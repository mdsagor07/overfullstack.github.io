---
title: Fight Complexity with Functional Programming
date: "2020-03-23T00:00:00.000Z"
layout: post
draft: false
path: "/posts/fight-complexity-with-fp/"
cover: "./cover.jpeg"
category: "Design"
tags:
  - "Java"
  - "Vavr"
description: "Skadooosh!"
---

## Abstract

A Metric-driven approach to reduce Cognitive Complexity in a code base, using Functional Programming, demoed **hands-on**, by solving a complex real-world ubiquitous design challenge - REST API Bulk Request Validation, with an extensible Framework that separates what-to-do (Validations) from how-to-do (Validation Orchestration). Let's do a case study of a successful implementation done by our team in the world's largest SaaS org, _Salesforce_, through our in-house baked FOSS library **Vader**.

## Audience & Takeaways

- The [USP](https://en.wikipedia.org/wiki/Unique_selling_proposition) for this talk is, unlike majority FP talks in Java/Kotlin space, which are introductory, this has something for all levels of the audience.
  - This talk starts with basic FP concepts like _Imperative vs. Declarative_ style using Java **Streams** or Kotlin **Sequences**.
  - Then the audience is gradually ramped-up towards intermediate FP concepts such as _Monads_, _First-Class Functions_, _Higher-Order Functions_.
  - Towards the end, we touch-upon concepts for an advanced audience like _Function-Lifting_, _Dozen FP Operations for daily Programming like `foldLeft`_ in the context of the problem, with pictures and simple examples. They are also provided with appropriate pointers wherever needed, to go back and refer.
- The audience experiences a mind-shift from the traditional mutation-heavy _Imperative style_ to _Functional style_ -- with Immutable Objects (Using Java 14 preview feature `Records` or Kotlin's `Data classes`) and Pure-Functions (replacing Mutation with Transformation).
- With Hands-on demos, this talk adds a robust paradigm tool-set and vocabulary to a programmer's arsenal and how to apply them to simplify the modeling and designing of complex _real-world_ problems.
- The audience learns how to objectively perceive complexity in any codebase through metrics (measured using popular static analysis tools), and how to reduce cognitive complexity methodically.

## Source-Code

The concepts are language agnostic. For broader outreach, I can use of either of these two for a hands-on demo -- **[Kotlin](https://kotlinlang.org/)** (a Modern Open-source JVM language) + **[Arrow](https://arrow-kt.io/)** (a Trending Open-source functional companion for Kotlin) _(or)_ **Java** + **[Vavr](https://www.vavr.io/)** (an Open-source functional library for Java)

As I cannot use the production code, I use code samples from my POC for the demonstration -- [Github repo for Java](https://github.com/overfullstack/railway-oriented-validation) or [Github repo for Kotlin](https://github.com/overfullstack/railway-oriented-validation-kotlin).

The code references in this post point to Java repo, but they can be correlated by name with the Kotlin repo.

## Talk Outline

- This talk has 2 stories embedded. The first part explains the differences between Imperative and Declarative styles and demonstrates the **Core:Context** philosophy behind the declarative style, which helps in separating **How-to-do** from **What-to-do**, using Java Streams or Kotlin Sequences.
- Then the talk transitions to the second part with a crash course on **Monads** and Functional Composition.
- The second part takes the Core:Context philosophy to the next level, by applying it to solve a real-world design problem, which is common across many _REST-service Domains_ - **Batch-Validation**.
- The talk demonstrates how batch-validation can quickly get complex when done imperatively, mixing _what-to-do(Validations)_, with _how-to-do(Validation Orchestration)_ and how it's NOT extensible in any of these three dimensions - Request Batch size, Validation count and No.of Services.
- Then the talk offers a Functional Programming (FP) solution, using Monads and Lambdas, which **Minimizes the accidental complexity without compromising Time complexity (Perf)**, and can seamlessly extend across all three dimensions.
- Throughout this talk, various types of Simple Monads (like `Option`, `Either`, `Try`, `IO` (Kotlin) etc.,) are introduced and how they fit in the context of the problem.
- This talk attempts to ramp-up the audience on functional programming gradually, and towards the end, we touch upon advanced concepts like Higher-Order Functions, Function Lifting, Dozen FP Operations for daily Programming like `foldLeft` etc.
- This talk is a fun-filled, code-driven, and without getting into definitions (which can be read through books), the attempt is to portray hands-on experience about how FP can help us become better developers and in-turn.

## Introduction

With the advent of **SaaS** and **Microservices/Macroservices**, software systems majorly communicate through the network, and **REST** is the predominant HTTP protocol used. To reduce network latency, these services resort to _Bulk-APIs_. One of the significant challenges of Bulk-APIs is **Request Validation**. With increasing request bulk size, service routes, and the number of validations, the validation orchestration can quickly get complex when done in traditional imperative style.

Let's take-up a real-world problem. Our Payment Platform service has parallel routes such as Authorization, Capture, Refund, Void. All of these are REST-APIs. They have JSON request payloads that accept sub-requests in bulk (list of JSON nodes). A simplified version of payload for one of the routes - Authorization:

```json
[
    {
        "amount": 99,
        "accountId": "{{validAccountId}}",
        ...,
        "paymentMethod": {
            ...
        },
        ...
    },
    {
        "amount": 77,
        "accountId": "{{validAccountId}}",
        ...,
        "paymentMethod": {
            ...
        },
        ...
    }
]
```

This JSON structure gets marshalled into POJOs, which needs to validated at the entry point of our application layer. Since all services deal with Payments, they have a lot of common fields like `amount`, as well as common child nodes like `paymentMethod` in their structure. Based on the type of field, they have different kinds of validations. E.g.:

- _Simple data validations_ - to validate data integrity for fields like `amount`.
- _Effectful validations_ - for fields like `accountId`, which involves a DB read and is exception prone.
- _Common Validations_ - for common fields such as `amount`, `accountId`, which are common across all service routes.
- _Nested Validations_ for the common child nodes like `paymentMethod`, as it's an independent child node inside a parent.

### The Requirements

The service validation module has the following requirements:

- Share Common and Nested Validations.
- Configure Validation sequence - Cheaper first and Costlier later.
- Fail-Fast for each sub-request.
- Partial failures - An aggregated error response for failed sub-requests can only be sent after valid requests are processed through multiple layers of the application. We have to hold on to the invalid sub-requests till the end and skip them from processing.

## Imperative treatment

We have close to **100 validations** of various kinds and increasing. When the above requirements are dealt with traditional [Imperative Style](https://en.wikipedia.org/wiki/Imperative_programming), it can quickly get messy, as shown [here](https://github.com/overfullstack/railway-oriented-validation/blob/master/src/main/java/app/imperative/ImperativeValidation.java). This code is mutation filled, non-extensible, non-sharable, non-unit-testable, and difficult to reason about.

But to state that objectively, we can run **Cyclomatic Complexity**[$_{[1]}$](https://www.ibm.com/developerworks/java/library/j-cq03316/) and **Cognitive Complexity** [$_{[2]}$](https://www.sonarsource.com/docs/CognitiveComplexity.pdf) metrics on this code, using a popular Code Quality tool called **SonarQube™**[$_{[3]}$](https://docs.sonarqube.org/latest/user-guide/metric-definitions/).

Our current imperative approach records **high** values for both these metrics. (Results to be run and explained during the talk).

## Need for Better Design

### The 3D design problem

This problem is a 3-dimensional design problem stretching among - Sub-requests, service routes (sharing common fields & nodes), and Validation count. In the above imperative approach, we entangled all 3, which lead to chaos. We need a design, which treats all of these separately, let them extend independently, and abstracts out validation sequencing and orchestration. We need to separate *What-to-do* from *How-to-do.*

### Dichotomous Data

We have two types of data floating around throughout our validation program - Valid sub-requests and Invalid sub-requests with Validation Failures. For each sub-request, based on its state, the imperative code flow is continuously branched out with `if-else` and `try-catch` statements, which lead to much of the cognitive complexity. We need a way to represent this valid/invalid **_Effect_** so that our program flows linearly agnostic of the sub-request's validation state.

## The Bulk Validation Framework

### Components

The framework mainly consists of 3 decoupled parts:

- Validations (what-to-do)
- Configuration (how-to-do)
- Orchestration (how-to-do)

### Why FP

We need an extensible framework to cater above design needs. But why is FP the best fit for solving problems like these? Every Software design problem can be seen like a block of objects doing functions or functions processing objects. We have the latter situation, where the sub-requests are being processed (validated) by various validation functions. Whenever there is a situation, where we got to apply a set of operations or transformations on a collection, where output of a function happens to be the input for the subsequent, that's when we should identify it's a FP problem. Please mind, these are transformations and not Mutations.

FP is the best fit to model domains with rich business logic, filled with computations and transformations. That is the reason, it is the first choice for Machine learning, AI, BigData, Reactive Programming etc.

### Immutable POJOs

Making POJOs immutable helps us take out a lot of cognitive load while reasoning about programs. Especially, when our objects are passing through an array of functions, Immutability gives a guarantee that the objects are only being _Transformed_ and not _Mutated_.

With _Java 14 preview_ feature **[Records](https://openjdk.java.net/jeps/359)**, I shall demo how a class can be easily made immutable - [Ref](https://github.com/overfullstack/railway-oriented-validation/blob/master/src/main/java/app/domain/ImmutableEgg.java)

### Validations as Values

I used Java 8 Functional interfaces to represent the validation functions as values - [Ref](https://github.com/overfullstack/railway-oriented-validation/blob/master/src/main/java/app/declarative/RailwayValidation2.java). This way Validation functions turn more cohesive than the imperative style, can be extended independently from each other and **shared** among various service routes.

### Representing Effect with Either Monad[$_{[4]}$](https://www.vavr.io/vavr-docs/#_either)

In the talk, I shall introduce Monad with a crash course and contextually explain the application of various monads, such as `Option`, `Either`, `Try`, `Stream`.

Let's start with `Either` Monad - It is a data type container that represents the data it contains in 2 states `left` and `right`. We can leverage this *Effect* to represent our Dichotomous Data, where `left: Validation Failure` and `right: Valid sub-request`. Either Monad has operations ([API ref](https://www.javadoc.io/doc/io.vavr/vavr/0.10.3/io/vavr/control/Either.html)) like `map` and `flatMap`, which perform operations on the contained value, only if Monad is in `right` state. This property helps developers write _linear programs_ without worrying about the state of the Monad - [Ref](https://github.com/overfullstack/railway-oriented-validation/blob/master/src/main/java/app/declarative/RailwayValidation2.java#L37-L51).

This is a popular technique called **Railway-Oriented-Programming**[$_{[5]}$](https://fsharpforfunandprofit.com/rop/).

### Validations exchange Monad Currency

This *Effect* can be used as a currency to be exchanged as input-output for our independent validation functions. A validation function takes Either monad as input. If the input is in the `right` state, validation is performed using its API functions `map` or `flatMap`, and if the validation fails, the corresponding failure is set in the `left` state. Otherwise, return the monad in the right state. As long as the result of a validation is in the right state, it doesn't matter what the value it has. Thus a wild-card is used in the `Validator` Data type signature - [Ref](https://github.com/overfullstack/railway-oriented-validation/blob/0a2b47279ea2d76eb8a31d3c3f8ea0a05d64b6e9/src/main/java/algebra/types/Validator.java#L11).

### The Configuration

Since functions are values, all we need is an Ordered List (like `java.util.list`) to maintain the sequence of validations. We can compose all the validation functions, in the order of preference. This order is easily **Configurable** - [Ref](https://github.com/overfullstack/railway-oriented-validation/blob/master/src/main/java/app/declarative/Config.java#L37-L50).

However, there is a complexity. List of Validations for a parent node consists of a mix of parent node and child node validations. But they can't be put under one `List`, as they are functions on different Data Types. So child validations need to be ported to parent context. We can achieve this with **Higher-Order Functions**, which act as DSL to **lift** child validation to parent type - [Ref](https://github.com/overfullstack/railway-oriented-validation/blob/master/src/main/java/algebra/ConfigDsl.java).

This is a powerful technique, which enables us to see the code through the lens of **Algebra**. This way, we can configure a **Chain** of validations in-order, sorting out all the parent-child dependencies. This is nothing but the most popular **Chain of Responsibility** Design pattern, with a functional touch.

If the inter-dependencies between Parent-Child happens to be more complex, we may end-up with *Graph* like relationship, but it can easily be *flatten* into a Chain with simple *Topological Sort*.

### The Orchestration

Now we have 2 lists to intertwine - List of sub-requests to be validated against List of Validations. This orchestration can be easily achieved in many ways due to the virtue of loose coupling between What-to-do(validations) and How-to-do(Orchestration). We can switch orchestration strategies (like fail-fast strategy to error-accumulation or running validations in parallel) without effecting validations code - [Ref](https://github.com/overfullstack/railway-oriented-validation/blob/master/src/main/java/algebra/Strategies.java).

The partial failure sub-requests are captured as Either Monads in `left` state, which are passed to subsequent layers, where they are ignored, thanks to the Either Monad property we discussed above.

### Testability

Individual validation functions are easily testable through unit-tests as they are pure and isolated. The orchestration is completely done using well-tested library functions like `foldLeft`, `findFirst`, etc. So nothing stops us from having a **100% code coverage**.

### Complexity

Thanks to the monad abstracting away all the branching complexity, our linear code has minimum complexity, which makes it easy to extend, debug and reason about. We can rerun the previous complexity metrics to prove it.
![complexity-compare](media/complexity-compare.png)
As pointed, we can compare [Imperative approach](https://github.com/overfullstack/railway-oriented-validation/blob/master/src/main/java/app/imperative/ImperativeValidation.java) with the [Declarative one](https://github.com/overfullstack/railway-oriented-validation/blob/master/src/main/java/app/declarative/RailwayValidation2.java). Despite the declarative implementation having more validations than imperative implementation, the _Cognitive Complexity_ remains minimum.

## Conclusion

Functional Programming is not Complex, but it fights complexity. The solution runs with the same time complexity (no perf impact), but minimum cognitive complexity. The framework is generic and agnostic of programming language and can be consumed by any Service with similar requirements, with minor modifications.

## My Talk on this

This talk was successfully presented and warmly received at:

- **[All Things Open](https://2020.allthingsopen.org/speakers/gopal-s-akshintala/)**, 2020, Raleigh, USA.
- [Kotlin User Group, London](https://youtu.be/QVuMSsIUw6M)
- [Berlin Functional Programming Group](https://youtu.be/DBDTNmLbU2Y)
- [JavaBin, Norway](https://youtu.be/tnpL1O8kTbM)
- [Kotlin User Group, Berlin](https://youtu.be/uGxx01yYAgk)
- [Google Developer Group Devfest 2019](https://devfest.gdghyderabad.in/speakers.html)
- [Kotlin User Group, Hyderabad](https://youtu.be/LGABy9qdB44)
- [Java User Group Hyderabad (@JUGHyd)](https://www.meetup.com/en-AU/jughyderabad/events/264688807/)
- [Salesforce, Hyderabad, India](http://y2u.be/l9jJ7m7_VpM)

This talk is also selected for prestigious international conferences:

- **[JBCN Conf - 2020](https://www.jbcnconf.com/2020/)**, September 2020, Barcelona, Spain (This event got cancelled due to COVID-19).

### Kotlin Version

- The [Slide-deck](http://bit.ly/fcwfp-kt-slides)
- Source-code links:
  - [imperative-vs-declarative](http://bit.ly/imp-vs-dec)
  - [railway-oriented-validation-kotlin](https://bit.ly/ro-validation-kt)

#### 10-2020 (All Things Open, Raleigh, USA)

`youtube: Dvr6gx4XaD8`

#### 09-2020 (Kotlin User Group, London)

`youtube: QVuMSsIUw6M`

#### 04-2020 (Kotlin User Group, Berlin)

`youtube: uGxx01yYAgk`

#### 05-2020 (Kotlin User Group, Hyderabad)

`youtube: LGABy9qdB44`

### Java Version

- The [Slide-deck](http://bit.ly/fcwfp-slides)
- Source-code links:
  - [imperative-vs-declarative](https://bit.ly/imp-vs-dec)
  - [railway-oriented-validation](https://bit.ly/ro-validation)

### 06-2020 (Berlin FP Group, Germany)

`youtube: DBDTNmLbU2Y`

#### 05-2020 (JavaBin, Norway)

`youtube: tnpL1O8kTbM`

### 08-2019 (Salesforce, Hyderabad)

`youtube: l9jJ7m7_VpM`

## References

1. <https://www.ibm.com/developerworks/java/library/j-cq03316/>
2. <https://www.sonarsource.com/docs/CognitiveComplexity.pdf>
3. <https://docs.sonarqube.org/latest/user-guide/metric-definitions/>
4. <https://www.vavr.io/vavr-docs/#_either>
5. <https://fsharpforfunandprofit.com/rop/>

- <http://docs.mipro-proceedings.com/4cows/01_4cows_5333.pdf>
- <http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html#just-what-is-a-functor,-really>
- <https://codurance.com/2018/08/09/the-functional-style-part-1/>
