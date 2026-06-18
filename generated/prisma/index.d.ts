
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Therapist
 * 
 */
export type Therapist = $Result.DefaultSelection<Prisma.$TherapistPayload>
/**
 * Model TherapistSpecialty
 * 
 */
export type TherapistSpecialty = $Result.DefaultSelection<Prisma.$TherapistSpecialtyPayload>
/**
 * Model TherapistEducation
 * 
 */
export type TherapistEducation = $Result.DefaultSelection<Prisma.$TherapistEducationPayload>
/**
 * Model TherapistCertificate
 * 
 */
export type TherapistCertificate = $Result.DefaultSelection<Prisma.$TherapistCertificatePayload>
/**
 * Model TestQuestion
 * 
 */
export type TestQuestion = $Result.DefaultSelection<Prisma.$TestQuestionPayload>
/**
 * Model TestAnswer
 * 
 */
export type TestAnswer = $Result.DefaultSelection<Prisma.$TestAnswerPayload>
/**
 * Model ClientTestResult
 * 
 */
export type ClientTestResult = $Result.DefaultSelection<Prisma.$ClientTestResultPayload>
/**
 * Model TherapistMatch
 * 
 */
export type TherapistMatch = $Result.DefaultSelection<Prisma.$TherapistMatchPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model SiteSetting
 * 
 */
export type SiteSetting = $Result.DefaultSelection<Prisma.$SiteSettingPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.therapist`: Exposes CRUD operations for the **Therapist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Therapists
    * const therapists = await prisma.therapist.findMany()
    * ```
    */
  get therapist(): Prisma.TherapistDelegate<ExtArgs>;

  /**
   * `prisma.therapistSpecialty`: Exposes CRUD operations for the **TherapistSpecialty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TherapistSpecialties
    * const therapistSpecialties = await prisma.therapistSpecialty.findMany()
    * ```
    */
  get therapistSpecialty(): Prisma.TherapistSpecialtyDelegate<ExtArgs>;

  /**
   * `prisma.therapistEducation`: Exposes CRUD operations for the **TherapistEducation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TherapistEducations
    * const therapistEducations = await prisma.therapistEducation.findMany()
    * ```
    */
  get therapistEducation(): Prisma.TherapistEducationDelegate<ExtArgs>;

  /**
   * `prisma.therapistCertificate`: Exposes CRUD operations for the **TherapistCertificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TherapistCertificates
    * const therapistCertificates = await prisma.therapistCertificate.findMany()
    * ```
    */
  get therapistCertificate(): Prisma.TherapistCertificateDelegate<ExtArgs>;

  /**
   * `prisma.testQuestion`: Exposes CRUD operations for the **TestQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestQuestions
    * const testQuestions = await prisma.testQuestion.findMany()
    * ```
    */
  get testQuestion(): Prisma.TestQuestionDelegate<ExtArgs>;

  /**
   * `prisma.testAnswer`: Exposes CRUD operations for the **TestAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestAnswers
    * const testAnswers = await prisma.testAnswer.findMany()
    * ```
    */
  get testAnswer(): Prisma.TestAnswerDelegate<ExtArgs>;

  /**
   * `prisma.clientTestResult`: Exposes CRUD operations for the **ClientTestResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientTestResults
    * const clientTestResults = await prisma.clientTestResult.findMany()
    * ```
    */
  get clientTestResult(): Prisma.ClientTestResultDelegate<ExtArgs>;

  /**
   * `prisma.therapistMatch`: Exposes CRUD operations for the **TherapistMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TherapistMatches
    * const therapistMatches = await prisma.therapistMatch.findMany()
    * ```
    */
  get therapistMatch(): Prisma.TherapistMatchDelegate<ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs>;

  /**
   * `prisma.siteSetting`: Exposes CRUD operations for the **SiteSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettings
    * const siteSettings = await prisma.siteSetting.findMany()
    * ```
    */
  get siteSetting(): Prisma.SiteSettingDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Therapist: 'Therapist',
    TherapistSpecialty: 'TherapistSpecialty',
    TherapistEducation: 'TherapistEducation',
    TherapistCertificate: 'TherapistCertificate',
    TestQuestion: 'TestQuestion',
    TestAnswer: 'TestAnswer',
    ClientTestResult: 'ClientTestResult',
    TherapistMatch: 'TherapistMatch',
    Appointment: 'Appointment',
    Review: 'Review',
    BlogPost: 'BlogPost',
    Banner: 'Banner',
    SiteSetting: 'SiteSetting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "therapist" | "therapistSpecialty" | "therapistEducation" | "therapistCertificate" | "testQuestion" | "testAnswer" | "clientTestResult" | "therapistMatch" | "appointment" | "review" | "blogPost" | "banner" | "siteSetting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Therapist: {
        payload: Prisma.$TherapistPayload<ExtArgs>
        fields: Prisma.TherapistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          findFirst: {
            args: Prisma.TherapistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          findMany: {
            args: Prisma.TherapistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>[]
          }
          create: {
            args: Prisma.TherapistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          createMany: {
            args: Prisma.TherapistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>[]
          }
          delete: {
            args: Prisma.TherapistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          update: {
            args: Prisma.TherapistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          deleteMany: {
            args: Prisma.TherapistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TherapistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          aggregate: {
            args: Prisma.TherapistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapist>
          }
          groupBy: {
            args: Prisma.TherapistGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapistGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapistCountArgs<ExtArgs>
            result: $Utils.Optional<TherapistCountAggregateOutputType> | number
          }
        }
      }
      TherapistSpecialty: {
        payload: Prisma.$TherapistSpecialtyPayload<ExtArgs>
        fields: Prisma.TherapistSpecialtyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapistSpecialtyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistSpecialtyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapistSpecialtyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistSpecialtyPayload>
          }
          findFirst: {
            args: Prisma.TherapistSpecialtyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistSpecialtyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapistSpecialtyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistSpecialtyPayload>
          }
          findMany: {
            args: Prisma.TherapistSpecialtyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistSpecialtyPayload>[]
          }
          create: {
            args: Prisma.TherapistSpecialtyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistSpecialtyPayload>
          }
          createMany: {
            args: Prisma.TherapistSpecialtyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapistSpecialtyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistSpecialtyPayload>[]
          }
          delete: {
            args: Prisma.TherapistSpecialtyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistSpecialtyPayload>
          }
          update: {
            args: Prisma.TherapistSpecialtyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistSpecialtyPayload>
          }
          deleteMany: {
            args: Prisma.TherapistSpecialtyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapistSpecialtyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TherapistSpecialtyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistSpecialtyPayload>
          }
          aggregate: {
            args: Prisma.TherapistSpecialtyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapistSpecialty>
          }
          groupBy: {
            args: Prisma.TherapistSpecialtyGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapistSpecialtyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapistSpecialtyCountArgs<ExtArgs>
            result: $Utils.Optional<TherapistSpecialtyCountAggregateOutputType> | number
          }
        }
      }
      TherapistEducation: {
        payload: Prisma.$TherapistEducationPayload<ExtArgs>
        fields: Prisma.TherapistEducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapistEducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistEducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapistEducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistEducationPayload>
          }
          findFirst: {
            args: Prisma.TherapistEducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistEducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapistEducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistEducationPayload>
          }
          findMany: {
            args: Prisma.TherapistEducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistEducationPayload>[]
          }
          create: {
            args: Prisma.TherapistEducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistEducationPayload>
          }
          createMany: {
            args: Prisma.TherapistEducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapistEducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistEducationPayload>[]
          }
          delete: {
            args: Prisma.TherapistEducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistEducationPayload>
          }
          update: {
            args: Prisma.TherapistEducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistEducationPayload>
          }
          deleteMany: {
            args: Prisma.TherapistEducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapistEducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TherapistEducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistEducationPayload>
          }
          aggregate: {
            args: Prisma.TherapistEducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapistEducation>
          }
          groupBy: {
            args: Prisma.TherapistEducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapistEducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapistEducationCountArgs<ExtArgs>
            result: $Utils.Optional<TherapistEducationCountAggregateOutputType> | number
          }
        }
      }
      TherapistCertificate: {
        payload: Prisma.$TherapistCertificatePayload<ExtArgs>
        fields: Prisma.TherapistCertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapistCertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistCertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapistCertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistCertificatePayload>
          }
          findFirst: {
            args: Prisma.TherapistCertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistCertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapistCertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistCertificatePayload>
          }
          findMany: {
            args: Prisma.TherapistCertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistCertificatePayload>[]
          }
          create: {
            args: Prisma.TherapistCertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistCertificatePayload>
          }
          createMany: {
            args: Prisma.TherapistCertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapistCertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistCertificatePayload>[]
          }
          delete: {
            args: Prisma.TherapistCertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistCertificatePayload>
          }
          update: {
            args: Prisma.TherapistCertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistCertificatePayload>
          }
          deleteMany: {
            args: Prisma.TherapistCertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapistCertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TherapistCertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistCertificatePayload>
          }
          aggregate: {
            args: Prisma.TherapistCertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapistCertificate>
          }
          groupBy: {
            args: Prisma.TherapistCertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapistCertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapistCertificateCountArgs<ExtArgs>
            result: $Utils.Optional<TherapistCertificateCountAggregateOutputType> | number
          }
        }
      }
      TestQuestion: {
        payload: Prisma.$TestQuestionPayload<ExtArgs>
        fields: Prisma.TestQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          findFirst: {
            args: Prisma.TestQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          findMany: {
            args: Prisma.TestQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>[]
          }
          create: {
            args: Prisma.TestQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          createMany: {
            args: Prisma.TestQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>[]
          }
          delete: {
            args: Prisma.TestQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          update: {
            args: Prisma.TestQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          deleteMany: {
            args: Prisma.TestQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          aggregate: {
            args: Prisma.TestQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestQuestion>
          }
          groupBy: {
            args: Prisma.TestQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<TestQuestionCountAggregateOutputType> | number
          }
        }
      }
      TestAnswer: {
        payload: Prisma.$TestAnswerPayload<ExtArgs>
        fields: Prisma.TestAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          findFirst: {
            args: Prisma.TestAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          findMany: {
            args: Prisma.TestAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>[]
          }
          create: {
            args: Prisma.TestAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          createMany: {
            args: Prisma.TestAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>[]
          }
          delete: {
            args: Prisma.TestAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          update: {
            args: Prisma.TestAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          deleteMany: {
            args: Prisma.TestAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          aggregate: {
            args: Prisma.TestAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestAnswer>
          }
          groupBy: {
            args: Prisma.TestAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<TestAnswerCountAggregateOutputType> | number
          }
        }
      }
      ClientTestResult: {
        payload: Prisma.$ClientTestResultPayload<ExtArgs>
        fields: Prisma.ClientTestResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientTestResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientTestResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestResultPayload>
          }
          findFirst: {
            args: Prisma.ClientTestResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientTestResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestResultPayload>
          }
          findMany: {
            args: Prisma.ClientTestResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestResultPayload>[]
          }
          create: {
            args: Prisma.ClientTestResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestResultPayload>
          }
          createMany: {
            args: Prisma.ClientTestResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientTestResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestResultPayload>[]
          }
          delete: {
            args: Prisma.ClientTestResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestResultPayload>
          }
          update: {
            args: Prisma.ClientTestResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestResultPayload>
          }
          deleteMany: {
            args: Prisma.ClientTestResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientTestResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientTestResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestResultPayload>
          }
          aggregate: {
            args: Prisma.ClientTestResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientTestResult>
          }
          groupBy: {
            args: Prisma.ClientTestResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientTestResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientTestResultCountArgs<ExtArgs>
            result: $Utils.Optional<ClientTestResultCountAggregateOutputType> | number
          }
        }
      }
      TherapistMatch: {
        payload: Prisma.$TherapistMatchPayload<ExtArgs>
        fields: Prisma.TherapistMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapistMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapistMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistMatchPayload>
          }
          findFirst: {
            args: Prisma.TherapistMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapistMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistMatchPayload>
          }
          findMany: {
            args: Prisma.TherapistMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistMatchPayload>[]
          }
          create: {
            args: Prisma.TherapistMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistMatchPayload>
          }
          createMany: {
            args: Prisma.TherapistMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapistMatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistMatchPayload>[]
          }
          delete: {
            args: Prisma.TherapistMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistMatchPayload>
          }
          update: {
            args: Prisma.TherapistMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistMatchPayload>
          }
          deleteMany: {
            args: Prisma.TherapistMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapistMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TherapistMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistMatchPayload>
          }
          aggregate: {
            args: Prisma.TherapistMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapistMatch>
          }
          groupBy: {
            args: Prisma.TherapistMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapistMatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapistMatchCountArgs<ExtArgs>
            result: $Utils.Optional<TherapistMatchCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      SiteSetting: {
        payload: Prisma.$SiteSettingPayload<ExtArgs>
        fields: Prisma.SiteSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          findMany: {
            args: Prisma.SiteSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>[]
          }
          create: {
            args: Prisma.SiteSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          createMany: {
            args: Prisma.SiteSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>[]
          }
          delete: {
            args: Prisma.SiteSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          update: {
            args: Prisma.SiteSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSetting>
          }
          groupBy: {
            args: Prisma.SiteSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    testResults: number
    matches: number
    appointments: number
    reviews: number
    blogPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testResults?: boolean | UserCountOutputTypeCountTestResultsArgs
    matches?: boolean | UserCountOutputTypeCountMatchesArgs
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    blogPosts?: boolean | UserCountOutputTypeCountBlogPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientTestResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistMatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }


  /**
   * Count Type TherapistCountOutputType
   */

  export type TherapistCountOutputType = {
    specialties: number
    educations: number
    certificates: number
    matches: number
    appointments: number
    reviews: number
  }

  export type TherapistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialties?: boolean | TherapistCountOutputTypeCountSpecialtiesArgs
    educations?: boolean | TherapistCountOutputTypeCountEducationsArgs
    certificates?: boolean | TherapistCountOutputTypeCountCertificatesArgs
    matches?: boolean | TherapistCountOutputTypeCountMatchesArgs
    appointments?: boolean | TherapistCountOutputTypeCountAppointmentsArgs
    reviews?: boolean | TherapistCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCountOutputType
     */
    select?: TherapistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistSpecialtyWhereInput
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountEducationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistEducationWhereInput
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistCertificateWhereInput
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistMatchWhereInput
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TestQuestionCountOutputType
   */

  export type TestQuestionCountOutputType = {
    answers: number
  }

  export type TestQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | TestQuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * TestQuestionCountOutputType without action
   */
  export type TestQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestionCountOutputType
     */
    select?: TestQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestQuestionCountOutputType without action
   */
  export type TestQuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapist?: boolean | User$therapistArgs<ExtArgs>
    testResults?: boolean | User$testResultsArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    blogPosts?: boolean | User$blogPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | User$therapistArgs<ExtArgs>
    testResults?: boolean | User$testResultsArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    blogPosts?: boolean | User$blogPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      therapist: Prisma.$TherapistPayload<ExtArgs> | null
      testResults: Prisma.$ClientTestResultPayload<ExtArgs>[]
      matches: Prisma.$TherapistMatchPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      blogPosts: Prisma.$BlogPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      role: string
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapist<T extends User$therapistArgs<ExtArgs> = {}>(args?: Subset<T, User$therapistArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    testResults<T extends User$testResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$testResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "findMany"> | Null>
    matches<T extends User$matchesArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "findMany"> | Null>
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    blogPosts<T extends User$blogPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.therapist
   */
  export type User$therapistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    where?: TherapistWhereInput
  }

  /**
   * User.testResults
   */
  export type User$testResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
    where?: ClientTestResultWhereInput
    orderBy?: ClientTestResultOrderByWithRelationInput | ClientTestResultOrderByWithRelationInput[]
    cursor?: ClientTestResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientTestResultScalarFieldEnum | ClientTestResultScalarFieldEnum[]
  }

  /**
   * User.matches
   */
  export type User$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    where?: TherapistMatchWhereInput
    orderBy?: TherapistMatchOrderByWithRelationInput | TherapistMatchOrderByWithRelationInput[]
    cursor?: TherapistMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TherapistMatchScalarFieldEnum | TherapistMatchScalarFieldEnum[]
  }

  /**
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.blogPosts
   */
  export type User$blogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Therapist
   */

  export type AggregateTherapist = {
    _count: TherapistCountAggregateOutputType | null
    _avg: TherapistAvgAggregateOutputType | null
    _sum: TherapistSumAggregateOutputType | null
    _min: TherapistMinAggregateOutputType | null
    _max: TherapistMaxAggregateOutputType | null
  }

  export type TherapistAvgAggregateOutputType = {
    experienceYears: number | null
    sessionPrice: number | null
  }

  export type TherapistSumAggregateOutputType = {
    experienceYears: number | null
    sessionPrice: number | null
  }

  export type TherapistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    about: string | null
    experienceYears: number | null
    sessionPrice: number | null
    isVerified: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    about: string | null
    experienceYears: number | null
    sessionPrice: number | null
    isVerified: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapistCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    about: number
    experienceYears: number
    sessionPrice: number
    isVerified: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TherapistAvgAggregateInputType = {
    experienceYears?: true
    sessionPrice?: true
  }

  export type TherapistSumAggregateInputType = {
    experienceYears?: true
    sessionPrice?: true
  }

  export type TherapistMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    about?: true
    experienceYears?: true
    sessionPrice?: true
    isVerified?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapistMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    about?: true
    experienceYears?: true
    sessionPrice?: true
    isVerified?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapistCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    about?: true
    experienceYears?: true
    sessionPrice?: true
    isVerified?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TherapistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Therapist to aggregate.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Therapists
    **/
    _count?: true | TherapistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TherapistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TherapistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapistMaxAggregateInputType
  }

  export type GetTherapistAggregateType<T extends TherapistAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapist[P]>
      : GetScalarType<T[P], AggregateTherapist[P]>
  }




  export type TherapistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistWhereInput
    orderBy?: TherapistOrderByWithAggregationInput | TherapistOrderByWithAggregationInput[]
    by: TherapistScalarFieldEnum[] | TherapistScalarFieldEnum
    having?: TherapistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapistCountAggregateInputType | true
    _avg?: TherapistAvgAggregateInputType
    _sum?: TherapistSumAggregateInputType
    _min?: TherapistMinAggregateInputType
    _max?: TherapistMaxAggregateInputType
  }

  export type TherapistGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    about: string | null
    experienceYears: number
    sessionPrice: number
    isVerified: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TherapistCountAggregateOutputType | null
    _avg: TherapistAvgAggregateOutputType | null
    _sum: TherapistSumAggregateOutputType | null
    _min: TherapistMinAggregateOutputType | null
    _max: TherapistMaxAggregateOutputType | null
  }

  type GetTherapistGroupByPayload<T extends TherapistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapistGroupByOutputType[P]>
            : GetScalarType<T[P], TherapistGroupByOutputType[P]>
        }
      >
    >


  export type TherapistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    about?: boolean
    experienceYears?: boolean
    sessionPrice?: boolean
    isVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    specialties?: boolean | Therapist$specialtiesArgs<ExtArgs>
    educations?: boolean | Therapist$educationsArgs<ExtArgs>
    certificates?: boolean | Therapist$certificatesArgs<ExtArgs>
    matches?: boolean | Therapist$matchesArgs<ExtArgs>
    appointments?: boolean | Therapist$appointmentsArgs<ExtArgs>
    reviews?: boolean | Therapist$reviewsArgs<ExtArgs>
    _count?: boolean | TherapistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapist"]>

  export type TherapistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    about?: boolean
    experienceYears?: boolean
    sessionPrice?: boolean
    isVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapist"]>

  export type TherapistSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    about?: boolean
    experienceYears?: boolean
    sessionPrice?: boolean
    isVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TherapistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    specialties?: boolean | Therapist$specialtiesArgs<ExtArgs>
    educations?: boolean | Therapist$educationsArgs<ExtArgs>
    certificates?: boolean | Therapist$certificatesArgs<ExtArgs>
    matches?: boolean | Therapist$matchesArgs<ExtArgs>
    appointments?: boolean | Therapist$appointmentsArgs<ExtArgs>
    reviews?: boolean | Therapist$reviewsArgs<ExtArgs>
    _count?: boolean | TherapistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TherapistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TherapistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Therapist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      specialties: Prisma.$TherapistSpecialtyPayload<ExtArgs>[]
      educations: Prisma.$TherapistEducationPayload<ExtArgs>[]
      certificates: Prisma.$TherapistCertificatePayload<ExtArgs>[]
      matches: Prisma.$TherapistMatchPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      about: string | null
      experienceYears: number
      sessionPrice: number
      isVerified: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["therapist"]>
    composites: {}
  }

  type TherapistGetPayload<S extends boolean | null | undefined | TherapistDefaultArgs> = $Result.GetResult<Prisma.$TherapistPayload, S>

  type TherapistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TherapistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TherapistCountAggregateInputType | true
    }

  export interface TherapistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Therapist'], meta: { name: 'Therapist' } }
    /**
     * Find zero or one Therapist that matches the filter.
     * @param {TherapistFindUniqueArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapistFindUniqueArgs>(args: SelectSubset<T, TherapistFindUniqueArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Therapist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TherapistFindUniqueOrThrowArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapistFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Therapist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistFindFirstArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapistFindFirstArgs>(args?: SelectSubset<T, TherapistFindFirstArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Therapist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistFindFirstOrThrowArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapistFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapistFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Therapists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Therapists
     * const therapists = await prisma.therapist.findMany()
     * 
     * // Get first 10 Therapists
     * const therapists = await prisma.therapist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapistWithIdOnly = await prisma.therapist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapistFindManyArgs>(args?: SelectSubset<T, TherapistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Therapist.
     * @param {TherapistCreateArgs} args - Arguments to create a Therapist.
     * @example
     * // Create one Therapist
     * const Therapist = await prisma.therapist.create({
     *   data: {
     *     // ... data to create a Therapist
     *   }
     * })
     * 
     */
    create<T extends TherapistCreateArgs>(args: SelectSubset<T, TherapistCreateArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Therapists.
     * @param {TherapistCreateManyArgs} args - Arguments to create many Therapists.
     * @example
     * // Create many Therapists
     * const therapist = await prisma.therapist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapistCreateManyArgs>(args?: SelectSubset<T, TherapistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Therapists and returns the data saved in the database.
     * @param {TherapistCreateManyAndReturnArgs} args - Arguments to create many Therapists.
     * @example
     * // Create many Therapists
     * const therapist = await prisma.therapist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Therapists and only return the `id`
     * const therapistWithIdOnly = await prisma.therapist.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapistCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Therapist.
     * @param {TherapistDeleteArgs} args - Arguments to delete one Therapist.
     * @example
     * // Delete one Therapist
     * const Therapist = await prisma.therapist.delete({
     *   where: {
     *     // ... filter to delete one Therapist
     *   }
     * })
     * 
     */
    delete<T extends TherapistDeleteArgs>(args: SelectSubset<T, TherapistDeleteArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Therapist.
     * @param {TherapistUpdateArgs} args - Arguments to update one Therapist.
     * @example
     * // Update one Therapist
     * const therapist = await prisma.therapist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapistUpdateArgs>(args: SelectSubset<T, TherapistUpdateArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Therapists.
     * @param {TherapistDeleteManyArgs} args - Arguments to filter Therapists to delete.
     * @example
     * // Delete a few Therapists
     * const { count } = await prisma.therapist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapistDeleteManyArgs>(args?: SelectSubset<T, TherapistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Therapists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Therapists
     * const therapist = await prisma.therapist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapistUpdateManyArgs>(args: SelectSubset<T, TherapistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Therapist.
     * @param {TherapistUpsertArgs} args - Arguments to update or create a Therapist.
     * @example
     * // Update or create a Therapist
     * const therapist = await prisma.therapist.upsert({
     *   create: {
     *     // ... data to create a Therapist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Therapist we want to update
     *   }
     * })
     */
    upsert<T extends TherapistUpsertArgs>(args: SelectSubset<T, TherapistUpsertArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Therapists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistCountArgs} args - Arguments to filter Therapists to count.
     * @example
     * // Count the number of Therapists
     * const count = await prisma.therapist.count({
     *   where: {
     *     // ... the filter for the Therapists we want to count
     *   }
     * })
    **/
    count<T extends TherapistCountArgs>(
      args?: Subset<T, TherapistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Therapist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TherapistAggregateArgs>(args: Subset<T, TherapistAggregateArgs>): Prisma.PrismaPromise<GetTherapistAggregateType<T>>

    /**
     * Group by Therapist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TherapistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapistGroupByArgs['orderBy'] }
        : { orderBy?: TherapistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TherapistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Therapist model
   */
  readonly fields: TherapistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Therapist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    specialties<T extends Therapist$specialtiesArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$specialtiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "findMany"> | Null>
    educations<T extends Therapist$educationsArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$educationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "findMany"> | Null>
    certificates<T extends Therapist$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "findMany"> | Null>
    matches<T extends Therapist$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "findMany"> | Null>
    appointments<T extends Therapist$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Therapist$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Therapist model
   */ 
  interface TherapistFieldRefs {
    readonly id: FieldRef<"Therapist", 'String'>
    readonly userId: FieldRef<"Therapist", 'String'>
    readonly title: FieldRef<"Therapist", 'String'>
    readonly about: FieldRef<"Therapist", 'String'>
    readonly experienceYears: FieldRef<"Therapist", 'Int'>
    readonly sessionPrice: FieldRef<"Therapist", 'Int'>
    readonly isVerified: FieldRef<"Therapist", 'Boolean'>
    readonly isActive: FieldRef<"Therapist", 'Boolean'>
    readonly createdAt: FieldRef<"Therapist", 'DateTime'>
    readonly updatedAt: FieldRef<"Therapist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Therapist findUnique
   */
  export type TherapistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist findUniqueOrThrow
   */
  export type TherapistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist findFirst
   */
  export type TherapistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Therapists.
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Therapists.
     */
    distinct?: TherapistScalarFieldEnum | TherapistScalarFieldEnum[]
  }

  /**
   * Therapist findFirstOrThrow
   */
  export type TherapistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Therapists.
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Therapists.
     */
    distinct?: TherapistScalarFieldEnum | TherapistScalarFieldEnum[]
  }

  /**
   * Therapist findMany
   */
  export type TherapistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter, which Therapists to fetch.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Therapists.
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    distinct?: TherapistScalarFieldEnum | TherapistScalarFieldEnum[]
  }

  /**
   * Therapist create
   */
  export type TherapistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * The data needed to create a Therapist.
     */
    data: XOR<TherapistCreateInput, TherapistUncheckedCreateInput>
  }

  /**
   * Therapist createMany
   */
  export type TherapistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Therapists.
     */
    data: TherapistCreateManyInput | TherapistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Therapist createManyAndReturn
   */
  export type TherapistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Therapists.
     */
    data: TherapistCreateManyInput | TherapistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Therapist update
   */
  export type TherapistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * The data needed to update a Therapist.
     */
    data: XOR<TherapistUpdateInput, TherapistUncheckedUpdateInput>
    /**
     * Choose, which Therapist to update.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist updateMany
   */
  export type TherapistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Therapists.
     */
    data: XOR<TherapistUpdateManyMutationInput, TherapistUncheckedUpdateManyInput>
    /**
     * Filter which Therapists to update
     */
    where?: TherapistWhereInput
  }

  /**
   * Therapist upsert
   */
  export type TherapistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * The filter to search for the Therapist to update in case it exists.
     */
    where: TherapistWhereUniqueInput
    /**
     * In case the Therapist found by the `where` argument doesn't exist, create a new Therapist with this data.
     */
    create: XOR<TherapistCreateInput, TherapistUncheckedCreateInput>
    /**
     * In case the Therapist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapistUpdateInput, TherapistUncheckedUpdateInput>
  }

  /**
   * Therapist delete
   */
  export type TherapistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter which Therapist to delete.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist deleteMany
   */
  export type TherapistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Therapists to delete
     */
    where?: TherapistWhereInput
  }

  /**
   * Therapist.specialties
   */
  export type Therapist$specialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
    where?: TherapistSpecialtyWhereInput
    orderBy?: TherapistSpecialtyOrderByWithRelationInput | TherapistSpecialtyOrderByWithRelationInput[]
    cursor?: TherapistSpecialtyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TherapistSpecialtyScalarFieldEnum | TherapistSpecialtyScalarFieldEnum[]
  }

  /**
   * Therapist.educations
   */
  export type Therapist$educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
    where?: TherapistEducationWhereInput
    orderBy?: TherapistEducationOrderByWithRelationInput | TherapistEducationOrderByWithRelationInput[]
    cursor?: TherapistEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TherapistEducationScalarFieldEnum | TherapistEducationScalarFieldEnum[]
  }

  /**
   * Therapist.certificates
   */
  export type Therapist$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
    where?: TherapistCertificateWhereInput
    orderBy?: TherapistCertificateOrderByWithRelationInput | TherapistCertificateOrderByWithRelationInput[]
    cursor?: TherapistCertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TherapistCertificateScalarFieldEnum | TherapistCertificateScalarFieldEnum[]
  }

  /**
   * Therapist.matches
   */
  export type Therapist$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    where?: TherapistMatchWhereInput
    orderBy?: TherapistMatchOrderByWithRelationInput | TherapistMatchOrderByWithRelationInput[]
    cursor?: TherapistMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TherapistMatchScalarFieldEnum | TherapistMatchScalarFieldEnum[]
  }

  /**
   * Therapist.appointments
   */
  export type Therapist$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Therapist.reviews
   */
  export type Therapist$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Therapist without action
   */
  export type TherapistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
  }


  /**
   * Model TherapistSpecialty
   */

  export type AggregateTherapistSpecialty = {
    _count: TherapistSpecialtyCountAggregateOutputType | null
    _min: TherapistSpecialtyMinAggregateOutputType | null
    _max: TherapistSpecialtyMaxAggregateOutputType | null
  }

  export type TherapistSpecialtyMinAggregateOutputType = {
    therapistId: string | null
    specialty: string | null
  }

  export type TherapistSpecialtyMaxAggregateOutputType = {
    therapistId: string | null
    specialty: string | null
  }

  export type TherapistSpecialtyCountAggregateOutputType = {
    therapistId: number
    specialty: number
    _all: number
  }


  export type TherapistSpecialtyMinAggregateInputType = {
    therapistId?: true
    specialty?: true
  }

  export type TherapistSpecialtyMaxAggregateInputType = {
    therapistId?: true
    specialty?: true
  }

  export type TherapistSpecialtyCountAggregateInputType = {
    therapistId?: true
    specialty?: true
    _all?: true
  }

  export type TherapistSpecialtyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistSpecialty to aggregate.
     */
    where?: TherapistSpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistSpecialties to fetch.
     */
    orderBy?: TherapistSpecialtyOrderByWithRelationInput | TherapistSpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapistSpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TherapistSpecialties
    **/
    _count?: true | TherapistSpecialtyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapistSpecialtyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapistSpecialtyMaxAggregateInputType
  }

  export type GetTherapistSpecialtyAggregateType<T extends TherapistSpecialtyAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapistSpecialty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapistSpecialty[P]>
      : GetScalarType<T[P], AggregateTherapistSpecialty[P]>
  }




  export type TherapistSpecialtyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistSpecialtyWhereInput
    orderBy?: TherapistSpecialtyOrderByWithAggregationInput | TherapistSpecialtyOrderByWithAggregationInput[]
    by: TherapistSpecialtyScalarFieldEnum[] | TherapistSpecialtyScalarFieldEnum
    having?: TherapistSpecialtyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapistSpecialtyCountAggregateInputType | true
    _min?: TherapistSpecialtyMinAggregateInputType
    _max?: TherapistSpecialtyMaxAggregateInputType
  }

  export type TherapistSpecialtyGroupByOutputType = {
    therapistId: string
    specialty: string
    _count: TherapistSpecialtyCountAggregateOutputType | null
    _min: TherapistSpecialtyMinAggregateOutputType | null
    _max: TherapistSpecialtyMaxAggregateOutputType | null
  }

  type GetTherapistSpecialtyGroupByPayload<T extends TherapistSpecialtyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapistSpecialtyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapistSpecialtyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapistSpecialtyGroupByOutputType[P]>
            : GetScalarType<T[P], TherapistSpecialtyGroupByOutputType[P]>
        }
      >
    >


  export type TherapistSpecialtySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    therapistId?: boolean
    specialty?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistSpecialty"]>

  export type TherapistSpecialtySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    therapistId?: boolean
    specialty?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistSpecialty"]>

  export type TherapistSpecialtySelectScalar = {
    therapistId?: boolean
    specialty?: boolean
  }

  export type TherapistSpecialtyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type TherapistSpecialtyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }

  export type $TherapistSpecialtyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TherapistSpecialty"
    objects: {
      therapist: Prisma.$TherapistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      therapistId: string
      specialty: string
    }, ExtArgs["result"]["therapistSpecialty"]>
    composites: {}
  }

  type TherapistSpecialtyGetPayload<S extends boolean | null | undefined | TherapistSpecialtyDefaultArgs> = $Result.GetResult<Prisma.$TherapistSpecialtyPayload, S>

  type TherapistSpecialtyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TherapistSpecialtyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TherapistSpecialtyCountAggregateInputType | true
    }

  export interface TherapistSpecialtyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TherapistSpecialty'], meta: { name: 'TherapistSpecialty' } }
    /**
     * Find zero or one TherapistSpecialty that matches the filter.
     * @param {TherapistSpecialtyFindUniqueArgs} args - Arguments to find a TherapistSpecialty
     * @example
     * // Get one TherapistSpecialty
     * const therapistSpecialty = await prisma.therapistSpecialty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapistSpecialtyFindUniqueArgs>(args: SelectSubset<T, TherapistSpecialtyFindUniqueArgs<ExtArgs>>): Prisma__TherapistSpecialtyClient<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TherapistSpecialty that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TherapistSpecialtyFindUniqueOrThrowArgs} args - Arguments to find a TherapistSpecialty
     * @example
     * // Get one TherapistSpecialty
     * const therapistSpecialty = await prisma.therapistSpecialty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapistSpecialtyFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapistSpecialtyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapistSpecialtyClient<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TherapistSpecialty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistSpecialtyFindFirstArgs} args - Arguments to find a TherapistSpecialty
     * @example
     * // Get one TherapistSpecialty
     * const therapistSpecialty = await prisma.therapistSpecialty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapistSpecialtyFindFirstArgs>(args?: SelectSubset<T, TherapistSpecialtyFindFirstArgs<ExtArgs>>): Prisma__TherapistSpecialtyClient<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TherapistSpecialty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistSpecialtyFindFirstOrThrowArgs} args - Arguments to find a TherapistSpecialty
     * @example
     * // Get one TherapistSpecialty
     * const therapistSpecialty = await prisma.therapistSpecialty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapistSpecialtyFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapistSpecialtyFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapistSpecialtyClient<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TherapistSpecialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistSpecialtyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TherapistSpecialties
     * const therapistSpecialties = await prisma.therapistSpecialty.findMany()
     * 
     * // Get first 10 TherapistSpecialties
     * const therapistSpecialties = await prisma.therapistSpecialty.findMany({ take: 10 })
     * 
     * // Only select the `therapistId`
     * const therapistSpecialtyWithTherapistIdOnly = await prisma.therapistSpecialty.findMany({ select: { therapistId: true } })
     * 
     */
    findMany<T extends TherapistSpecialtyFindManyArgs>(args?: SelectSubset<T, TherapistSpecialtyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TherapistSpecialty.
     * @param {TherapistSpecialtyCreateArgs} args - Arguments to create a TherapistSpecialty.
     * @example
     * // Create one TherapistSpecialty
     * const TherapistSpecialty = await prisma.therapistSpecialty.create({
     *   data: {
     *     // ... data to create a TherapistSpecialty
     *   }
     * })
     * 
     */
    create<T extends TherapistSpecialtyCreateArgs>(args: SelectSubset<T, TherapistSpecialtyCreateArgs<ExtArgs>>): Prisma__TherapistSpecialtyClient<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TherapistSpecialties.
     * @param {TherapistSpecialtyCreateManyArgs} args - Arguments to create many TherapistSpecialties.
     * @example
     * // Create many TherapistSpecialties
     * const therapistSpecialty = await prisma.therapistSpecialty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapistSpecialtyCreateManyArgs>(args?: SelectSubset<T, TherapistSpecialtyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TherapistSpecialties and returns the data saved in the database.
     * @param {TherapistSpecialtyCreateManyAndReturnArgs} args - Arguments to create many TherapistSpecialties.
     * @example
     * // Create many TherapistSpecialties
     * const therapistSpecialty = await prisma.therapistSpecialty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TherapistSpecialties and only return the `therapistId`
     * const therapistSpecialtyWithTherapistIdOnly = await prisma.therapistSpecialty.createManyAndReturn({ 
     *   select: { therapistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapistSpecialtyCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapistSpecialtyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TherapistSpecialty.
     * @param {TherapistSpecialtyDeleteArgs} args - Arguments to delete one TherapistSpecialty.
     * @example
     * // Delete one TherapistSpecialty
     * const TherapistSpecialty = await prisma.therapistSpecialty.delete({
     *   where: {
     *     // ... filter to delete one TherapistSpecialty
     *   }
     * })
     * 
     */
    delete<T extends TherapistSpecialtyDeleteArgs>(args: SelectSubset<T, TherapistSpecialtyDeleteArgs<ExtArgs>>): Prisma__TherapistSpecialtyClient<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TherapistSpecialty.
     * @param {TherapistSpecialtyUpdateArgs} args - Arguments to update one TherapistSpecialty.
     * @example
     * // Update one TherapistSpecialty
     * const therapistSpecialty = await prisma.therapistSpecialty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapistSpecialtyUpdateArgs>(args: SelectSubset<T, TherapistSpecialtyUpdateArgs<ExtArgs>>): Prisma__TherapistSpecialtyClient<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TherapistSpecialties.
     * @param {TherapistSpecialtyDeleteManyArgs} args - Arguments to filter TherapistSpecialties to delete.
     * @example
     * // Delete a few TherapistSpecialties
     * const { count } = await prisma.therapistSpecialty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapistSpecialtyDeleteManyArgs>(args?: SelectSubset<T, TherapistSpecialtyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapistSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistSpecialtyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TherapistSpecialties
     * const therapistSpecialty = await prisma.therapistSpecialty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapistSpecialtyUpdateManyArgs>(args: SelectSubset<T, TherapistSpecialtyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TherapistSpecialty.
     * @param {TherapistSpecialtyUpsertArgs} args - Arguments to update or create a TherapistSpecialty.
     * @example
     * // Update or create a TherapistSpecialty
     * const therapistSpecialty = await prisma.therapistSpecialty.upsert({
     *   create: {
     *     // ... data to create a TherapistSpecialty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TherapistSpecialty we want to update
     *   }
     * })
     */
    upsert<T extends TherapistSpecialtyUpsertArgs>(args: SelectSubset<T, TherapistSpecialtyUpsertArgs<ExtArgs>>): Prisma__TherapistSpecialtyClient<$Result.GetResult<Prisma.$TherapistSpecialtyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TherapistSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistSpecialtyCountArgs} args - Arguments to filter TherapistSpecialties to count.
     * @example
     * // Count the number of TherapistSpecialties
     * const count = await prisma.therapistSpecialty.count({
     *   where: {
     *     // ... the filter for the TherapistSpecialties we want to count
     *   }
     * })
    **/
    count<T extends TherapistSpecialtyCountArgs>(
      args?: Subset<T, TherapistSpecialtyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapistSpecialtyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TherapistSpecialty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistSpecialtyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TherapistSpecialtyAggregateArgs>(args: Subset<T, TherapistSpecialtyAggregateArgs>): Prisma.PrismaPromise<GetTherapistSpecialtyAggregateType<T>>

    /**
     * Group by TherapistSpecialty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistSpecialtyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TherapistSpecialtyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapistSpecialtyGroupByArgs['orderBy'] }
        : { orderBy?: TherapistSpecialtyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TherapistSpecialtyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapistSpecialtyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TherapistSpecialty model
   */
  readonly fields: TherapistSpecialtyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TherapistSpecialty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapistSpecialtyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TherapistSpecialty model
   */ 
  interface TherapistSpecialtyFieldRefs {
    readonly therapistId: FieldRef<"TherapistSpecialty", 'String'>
    readonly specialty: FieldRef<"TherapistSpecialty", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TherapistSpecialty findUnique
   */
  export type TherapistSpecialtyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which TherapistSpecialty to fetch.
     */
    where: TherapistSpecialtyWhereUniqueInput
  }

  /**
   * TherapistSpecialty findUniqueOrThrow
   */
  export type TherapistSpecialtyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which TherapistSpecialty to fetch.
     */
    where: TherapistSpecialtyWhereUniqueInput
  }

  /**
   * TherapistSpecialty findFirst
   */
  export type TherapistSpecialtyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which TherapistSpecialty to fetch.
     */
    where?: TherapistSpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistSpecialties to fetch.
     */
    orderBy?: TherapistSpecialtyOrderByWithRelationInput | TherapistSpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistSpecialties.
     */
    cursor?: TherapistSpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistSpecialties.
     */
    distinct?: TherapistSpecialtyScalarFieldEnum | TherapistSpecialtyScalarFieldEnum[]
  }

  /**
   * TherapistSpecialty findFirstOrThrow
   */
  export type TherapistSpecialtyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which TherapistSpecialty to fetch.
     */
    where?: TherapistSpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistSpecialties to fetch.
     */
    orderBy?: TherapistSpecialtyOrderByWithRelationInput | TherapistSpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistSpecialties.
     */
    cursor?: TherapistSpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistSpecialties.
     */
    distinct?: TherapistSpecialtyScalarFieldEnum | TherapistSpecialtyScalarFieldEnum[]
  }

  /**
   * TherapistSpecialty findMany
   */
  export type TherapistSpecialtyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which TherapistSpecialties to fetch.
     */
    where?: TherapistSpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistSpecialties to fetch.
     */
    orderBy?: TherapistSpecialtyOrderByWithRelationInput | TherapistSpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TherapistSpecialties.
     */
    cursor?: TherapistSpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistSpecialties.
     */
    skip?: number
    distinct?: TherapistSpecialtyScalarFieldEnum | TherapistSpecialtyScalarFieldEnum[]
  }

  /**
   * TherapistSpecialty create
   */
  export type TherapistSpecialtyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
    /**
     * The data needed to create a TherapistSpecialty.
     */
    data: XOR<TherapistSpecialtyCreateInput, TherapistSpecialtyUncheckedCreateInput>
  }

  /**
   * TherapistSpecialty createMany
   */
  export type TherapistSpecialtyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TherapistSpecialties.
     */
    data: TherapistSpecialtyCreateManyInput | TherapistSpecialtyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TherapistSpecialty createManyAndReturn
   */
  export type TherapistSpecialtyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TherapistSpecialties.
     */
    data: TherapistSpecialtyCreateManyInput | TherapistSpecialtyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TherapistSpecialty update
   */
  export type TherapistSpecialtyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
    /**
     * The data needed to update a TherapistSpecialty.
     */
    data: XOR<TherapistSpecialtyUpdateInput, TherapistSpecialtyUncheckedUpdateInput>
    /**
     * Choose, which TherapistSpecialty to update.
     */
    where: TherapistSpecialtyWhereUniqueInput
  }

  /**
   * TherapistSpecialty updateMany
   */
  export type TherapistSpecialtyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TherapistSpecialties.
     */
    data: XOR<TherapistSpecialtyUpdateManyMutationInput, TherapistSpecialtyUncheckedUpdateManyInput>
    /**
     * Filter which TherapistSpecialties to update
     */
    where?: TherapistSpecialtyWhereInput
  }

  /**
   * TherapistSpecialty upsert
   */
  export type TherapistSpecialtyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
    /**
     * The filter to search for the TherapistSpecialty to update in case it exists.
     */
    where: TherapistSpecialtyWhereUniqueInput
    /**
     * In case the TherapistSpecialty found by the `where` argument doesn't exist, create a new TherapistSpecialty with this data.
     */
    create: XOR<TherapistSpecialtyCreateInput, TherapistSpecialtyUncheckedCreateInput>
    /**
     * In case the TherapistSpecialty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapistSpecialtyUpdateInput, TherapistSpecialtyUncheckedUpdateInput>
  }

  /**
   * TherapistSpecialty delete
   */
  export type TherapistSpecialtyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
    /**
     * Filter which TherapistSpecialty to delete.
     */
    where: TherapistSpecialtyWhereUniqueInput
  }

  /**
   * TherapistSpecialty deleteMany
   */
  export type TherapistSpecialtyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistSpecialties to delete
     */
    where?: TherapistSpecialtyWhereInput
  }

  /**
   * TherapistSpecialty without action
   */
  export type TherapistSpecialtyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistSpecialty
     */
    select?: TherapistSpecialtySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistSpecialtyInclude<ExtArgs> | null
  }


  /**
   * Model TherapistEducation
   */

  export type AggregateTherapistEducation = {
    _count: TherapistEducationCountAggregateOutputType | null
    _avg: TherapistEducationAvgAggregateOutputType | null
    _sum: TherapistEducationSumAggregateOutputType | null
    _min: TherapistEducationMinAggregateOutputType | null
    _max: TherapistEducationMaxAggregateOutputType | null
  }

  export type TherapistEducationAvgAggregateOutputType = {
    year: number | null
  }

  export type TherapistEducationSumAggregateOutputType = {
    year: number | null
  }

  export type TherapistEducationMinAggregateOutputType = {
    id: string | null
    therapistId: string | null
    title: string | null
    school: string | null
    year: number | null
    createdAt: Date | null
  }

  export type TherapistEducationMaxAggregateOutputType = {
    id: string | null
    therapistId: string | null
    title: string | null
    school: string | null
    year: number | null
    createdAt: Date | null
  }

  export type TherapistEducationCountAggregateOutputType = {
    id: number
    therapistId: number
    title: number
    school: number
    year: number
    createdAt: number
    _all: number
  }


  export type TherapistEducationAvgAggregateInputType = {
    year?: true
  }

  export type TherapistEducationSumAggregateInputType = {
    year?: true
  }

  export type TherapistEducationMinAggregateInputType = {
    id?: true
    therapistId?: true
    title?: true
    school?: true
    year?: true
    createdAt?: true
  }

  export type TherapistEducationMaxAggregateInputType = {
    id?: true
    therapistId?: true
    title?: true
    school?: true
    year?: true
    createdAt?: true
  }

  export type TherapistEducationCountAggregateInputType = {
    id?: true
    therapistId?: true
    title?: true
    school?: true
    year?: true
    createdAt?: true
    _all?: true
  }

  export type TherapistEducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistEducation to aggregate.
     */
    where?: TherapistEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistEducations to fetch.
     */
    orderBy?: TherapistEducationOrderByWithRelationInput | TherapistEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapistEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TherapistEducations
    **/
    _count?: true | TherapistEducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TherapistEducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TherapistEducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapistEducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapistEducationMaxAggregateInputType
  }

  export type GetTherapistEducationAggregateType<T extends TherapistEducationAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapistEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapistEducation[P]>
      : GetScalarType<T[P], AggregateTherapistEducation[P]>
  }




  export type TherapistEducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistEducationWhereInput
    orderBy?: TherapistEducationOrderByWithAggregationInput | TherapistEducationOrderByWithAggregationInput[]
    by: TherapistEducationScalarFieldEnum[] | TherapistEducationScalarFieldEnum
    having?: TherapistEducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapistEducationCountAggregateInputType | true
    _avg?: TherapistEducationAvgAggregateInputType
    _sum?: TherapistEducationSumAggregateInputType
    _min?: TherapistEducationMinAggregateInputType
    _max?: TherapistEducationMaxAggregateInputType
  }

  export type TherapistEducationGroupByOutputType = {
    id: string
    therapistId: string
    title: string
    school: string | null
    year: number | null
    createdAt: Date
    _count: TherapistEducationCountAggregateOutputType | null
    _avg: TherapistEducationAvgAggregateOutputType | null
    _sum: TherapistEducationSumAggregateOutputType | null
    _min: TherapistEducationMinAggregateOutputType | null
    _max: TherapistEducationMaxAggregateOutputType | null
  }

  type GetTherapistEducationGroupByPayload<T extends TherapistEducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapistEducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapistEducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapistEducationGroupByOutputType[P]>
            : GetScalarType<T[P], TherapistEducationGroupByOutputType[P]>
        }
      >
    >


  export type TherapistEducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    title?: boolean
    school?: boolean
    year?: boolean
    createdAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistEducation"]>

  export type TherapistEducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    title?: boolean
    school?: boolean
    year?: boolean
    createdAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistEducation"]>

  export type TherapistEducationSelectScalar = {
    id?: boolean
    therapistId?: boolean
    title?: boolean
    school?: boolean
    year?: boolean
    createdAt?: boolean
  }

  export type TherapistEducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type TherapistEducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }

  export type $TherapistEducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TherapistEducation"
    objects: {
      therapist: Prisma.$TherapistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      therapistId: string
      title: string
      school: string | null
      year: number | null
      createdAt: Date
    }, ExtArgs["result"]["therapistEducation"]>
    composites: {}
  }

  type TherapistEducationGetPayload<S extends boolean | null | undefined | TherapistEducationDefaultArgs> = $Result.GetResult<Prisma.$TherapistEducationPayload, S>

  type TherapistEducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TherapistEducationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TherapistEducationCountAggregateInputType | true
    }

  export interface TherapistEducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TherapistEducation'], meta: { name: 'TherapistEducation' } }
    /**
     * Find zero or one TherapistEducation that matches the filter.
     * @param {TherapistEducationFindUniqueArgs} args - Arguments to find a TherapistEducation
     * @example
     * // Get one TherapistEducation
     * const therapistEducation = await prisma.therapistEducation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapistEducationFindUniqueArgs>(args: SelectSubset<T, TherapistEducationFindUniqueArgs<ExtArgs>>): Prisma__TherapistEducationClient<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TherapistEducation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TherapistEducationFindUniqueOrThrowArgs} args - Arguments to find a TherapistEducation
     * @example
     * // Get one TherapistEducation
     * const therapistEducation = await prisma.therapistEducation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapistEducationFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapistEducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapistEducationClient<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TherapistEducation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistEducationFindFirstArgs} args - Arguments to find a TherapistEducation
     * @example
     * // Get one TherapistEducation
     * const therapistEducation = await prisma.therapistEducation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapistEducationFindFirstArgs>(args?: SelectSubset<T, TherapistEducationFindFirstArgs<ExtArgs>>): Prisma__TherapistEducationClient<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TherapistEducation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistEducationFindFirstOrThrowArgs} args - Arguments to find a TherapistEducation
     * @example
     * // Get one TherapistEducation
     * const therapistEducation = await prisma.therapistEducation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapistEducationFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapistEducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapistEducationClient<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TherapistEducations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistEducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TherapistEducations
     * const therapistEducations = await prisma.therapistEducation.findMany()
     * 
     * // Get first 10 TherapistEducations
     * const therapistEducations = await prisma.therapistEducation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapistEducationWithIdOnly = await prisma.therapistEducation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapistEducationFindManyArgs>(args?: SelectSubset<T, TherapistEducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TherapistEducation.
     * @param {TherapistEducationCreateArgs} args - Arguments to create a TherapistEducation.
     * @example
     * // Create one TherapistEducation
     * const TherapistEducation = await prisma.therapistEducation.create({
     *   data: {
     *     // ... data to create a TherapistEducation
     *   }
     * })
     * 
     */
    create<T extends TherapistEducationCreateArgs>(args: SelectSubset<T, TherapistEducationCreateArgs<ExtArgs>>): Prisma__TherapistEducationClient<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TherapistEducations.
     * @param {TherapistEducationCreateManyArgs} args - Arguments to create many TherapistEducations.
     * @example
     * // Create many TherapistEducations
     * const therapistEducation = await prisma.therapistEducation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapistEducationCreateManyArgs>(args?: SelectSubset<T, TherapistEducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TherapistEducations and returns the data saved in the database.
     * @param {TherapistEducationCreateManyAndReturnArgs} args - Arguments to create many TherapistEducations.
     * @example
     * // Create many TherapistEducations
     * const therapistEducation = await prisma.therapistEducation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TherapistEducations and only return the `id`
     * const therapistEducationWithIdOnly = await prisma.therapistEducation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapistEducationCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapistEducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TherapistEducation.
     * @param {TherapistEducationDeleteArgs} args - Arguments to delete one TherapistEducation.
     * @example
     * // Delete one TherapistEducation
     * const TherapistEducation = await prisma.therapistEducation.delete({
     *   where: {
     *     // ... filter to delete one TherapistEducation
     *   }
     * })
     * 
     */
    delete<T extends TherapistEducationDeleteArgs>(args: SelectSubset<T, TherapistEducationDeleteArgs<ExtArgs>>): Prisma__TherapistEducationClient<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TherapistEducation.
     * @param {TherapistEducationUpdateArgs} args - Arguments to update one TherapistEducation.
     * @example
     * // Update one TherapistEducation
     * const therapistEducation = await prisma.therapistEducation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapistEducationUpdateArgs>(args: SelectSubset<T, TherapistEducationUpdateArgs<ExtArgs>>): Prisma__TherapistEducationClient<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TherapistEducations.
     * @param {TherapistEducationDeleteManyArgs} args - Arguments to filter TherapistEducations to delete.
     * @example
     * // Delete a few TherapistEducations
     * const { count } = await prisma.therapistEducation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapistEducationDeleteManyArgs>(args?: SelectSubset<T, TherapistEducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapistEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistEducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TherapistEducations
     * const therapistEducation = await prisma.therapistEducation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapistEducationUpdateManyArgs>(args: SelectSubset<T, TherapistEducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TherapistEducation.
     * @param {TherapistEducationUpsertArgs} args - Arguments to update or create a TherapistEducation.
     * @example
     * // Update or create a TherapistEducation
     * const therapistEducation = await prisma.therapistEducation.upsert({
     *   create: {
     *     // ... data to create a TherapistEducation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TherapistEducation we want to update
     *   }
     * })
     */
    upsert<T extends TherapistEducationUpsertArgs>(args: SelectSubset<T, TherapistEducationUpsertArgs<ExtArgs>>): Prisma__TherapistEducationClient<$Result.GetResult<Prisma.$TherapistEducationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TherapistEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistEducationCountArgs} args - Arguments to filter TherapistEducations to count.
     * @example
     * // Count the number of TherapistEducations
     * const count = await prisma.therapistEducation.count({
     *   where: {
     *     // ... the filter for the TherapistEducations we want to count
     *   }
     * })
    **/
    count<T extends TherapistEducationCountArgs>(
      args?: Subset<T, TherapistEducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapistEducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TherapistEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistEducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TherapistEducationAggregateArgs>(args: Subset<T, TherapistEducationAggregateArgs>): Prisma.PrismaPromise<GetTherapistEducationAggregateType<T>>

    /**
     * Group by TherapistEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistEducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TherapistEducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapistEducationGroupByArgs['orderBy'] }
        : { orderBy?: TherapistEducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TherapistEducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapistEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TherapistEducation model
   */
  readonly fields: TherapistEducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TherapistEducation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapistEducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TherapistEducation model
   */ 
  interface TherapistEducationFieldRefs {
    readonly id: FieldRef<"TherapistEducation", 'String'>
    readonly therapistId: FieldRef<"TherapistEducation", 'String'>
    readonly title: FieldRef<"TherapistEducation", 'String'>
    readonly school: FieldRef<"TherapistEducation", 'String'>
    readonly year: FieldRef<"TherapistEducation", 'Int'>
    readonly createdAt: FieldRef<"TherapistEducation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TherapistEducation findUnique
   */
  export type TherapistEducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
    /**
     * Filter, which TherapistEducation to fetch.
     */
    where: TherapistEducationWhereUniqueInput
  }

  /**
   * TherapistEducation findUniqueOrThrow
   */
  export type TherapistEducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
    /**
     * Filter, which TherapistEducation to fetch.
     */
    where: TherapistEducationWhereUniqueInput
  }

  /**
   * TherapistEducation findFirst
   */
  export type TherapistEducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
    /**
     * Filter, which TherapistEducation to fetch.
     */
    where?: TherapistEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistEducations to fetch.
     */
    orderBy?: TherapistEducationOrderByWithRelationInput | TherapistEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistEducations.
     */
    cursor?: TherapistEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistEducations.
     */
    distinct?: TherapistEducationScalarFieldEnum | TherapistEducationScalarFieldEnum[]
  }

  /**
   * TherapistEducation findFirstOrThrow
   */
  export type TherapistEducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
    /**
     * Filter, which TherapistEducation to fetch.
     */
    where?: TherapistEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistEducations to fetch.
     */
    orderBy?: TherapistEducationOrderByWithRelationInput | TherapistEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistEducations.
     */
    cursor?: TherapistEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistEducations.
     */
    distinct?: TherapistEducationScalarFieldEnum | TherapistEducationScalarFieldEnum[]
  }

  /**
   * TherapistEducation findMany
   */
  export type TherapistEducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
    /**
     * Filter, which TherapistEducations to fetch.
     */
    where?: TherapistEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistEducations to fetch.
     */
    orderBy?: TherapistEducationOrderByWithRelationInput | TherapistEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TherapistEducations.
     */
    cursor?: TherapistEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistEducations.
     */
    skip?: number
    distinct?: TherapistEducationScalarFieldEnum | TherapistEducationScalarFieldEnum[]
  }

  /**
   * TherapistEducation create
   */
  export type TherapistEducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
    /**
     * The data needed to create a TherapistEducation.
     */
    data: XOR<TherapistEducationCreateInput, TherapistEducationUncheckedCreateInput>
  }

  /**
   * TherapistEducation createMany
   */
  export type TherapistEducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TherapistEducations.
     */
    data: TherapistEducationCreateManyInput | TherapistEducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TherapistEducation createManyAndReturn
   */
  export type TherapistEducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TherapistEducations.
     */
    data: TherapistEducationCreateManyInput | TherapistEducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TherapistEducation update
   */
  export type TherapistEducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
    /**
     * The data needed to update a TherapistEducation.
     */
    data: XOR<TherapistEducationUpdateInput, TherapistEducationUncheckedUpdateInput>
    /**
     * Choose, which TherapistEducation to update.
     */
    where: TherapistEducationWhereUniqueInput
  }

  /**
   * TherapistEducation updateMany
   */
  export type TherapistEducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TherapistEducations.
     */
    data: XOR<TherapistEducationUpdateManyMutationInput, TherapistEducationUncheckedUpdateManyInput>
    /**
     * Filter which TherapistEducations to update
     */
    where?: TherapistEducationWhereInput
  }

  /**
   * TherapistEducation upsert
   */
  export type TherapistEducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
    /**
     * The filter to search for the TherapistEducation to update in case it exists.
     */
    where: TherapistEducationWhereUniqueInput
    /**
     * In case the TherapistEducation found by the `where` argument doesn't exist, create a new TherapistEducation with this data.
     */
    create: XOR<TherapistEducationCreateInput, TherapistEducationUncheckedCreateInput>
    /**
     * In case the TherapistEducation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapistEducationUpdateInput, TherapistEducationUncheckedUpdateInput>
  }

  /**
   * TherapistEducation delete
   */
  export type TherapistEducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
    /**
     * Filter which TherapistEducation to delete.
     */
    where: TherapistEducationWhereUniqueInput
  }

  /**
   * TherapistEducation deleteMany
   */
  export type TherapistEducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistEducations to delete
     */
    where?: TherapistEducationWhereInput
  }

  /**
   * TherapistEducation without action
   */
  export type TherapistEducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistEducation
     */
    select?: TherapistEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistEducationInclude<ExtArgs> | null
  }


  /**
   * Model TherapistCertificate
   */

  export type AggregateTherapistCertificate = {
    _count: TherapistCertificateCountAggregateOutputType | null
    _min: TherapistCertificateMinAggregateOutputType | null
    _max: TherapistCertificateMaxAggregateOutputType | null
  }

  export type TherapistCertificateMinAggregateOutputType = {
    id: string | null
    therapistId: string | null
    fileUrl: string | null
    fileName: string | null
    status: string | null
    createdAt: Date | null
  }

  export type TherapistCertificateMaxAggregateOutputType = {
    id: string | null
    therapistId: string | null
    fileUrl: string | null
    fileName: string | null
    status: string | null
    createdAt: Date | null
  }

  export type TherapistCertificateCountAggregateOutputType = {
    id: number
    therapistId: number
    fileUrl: number
    fileName: number
    status: number
    createdAt: number
    _all: number
  }


  export type TherapistCertificateMinAggregateInputType = {
    id?: true
    therapistId?: true
    fileUrl?: true
    fileName?: true
    status?: true
    createdAt?: true
  }

  export type TherapistCertificateMaxAggregateInputType = {
    id?: true
    therapistId?: true
    fileUrl?: true
    fileName?: true
    status?: true
    createdAt?: true
  }

  export type TherapistCertificateCountAggregateInputType = {
    id?: true
    therapistId?: true
    fileUrl?: true
    fileName?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TherapistCertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistCertificate to aggregate.
     */
    where?: TherapistCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistCertificates to fetch.
     */
    orderBy?: TherapistCertificateOrderByWithRelationInput | TherapistCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapistCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TherapistCertificates
    **/
    _count?: true | TherapistCertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapistCertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapistCertificateMaxAggregateInputType
  }

  export type GetTherapistCertificateAggregateType<T extends TherapistCertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapistCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapistCertificate[P]>
      : GetScalarType<T[P], AggregateTherapistCertificate[P]>
  }




  export type TherapistCertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistCertificateWhereInput
    orderBy?: TherapistCertificateOrderByWithAggregationInput | TherapistCertificateOrderByWithAggregationInput[]
    by: TherapistCertificateScalarFieldEnum[] | TherapistCertificateScalarFieldEnum
    having?: TherapistCertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapistCertificateCountAggregateInputType | true
    _min?: TherapistCertificateMinAggregateInputType
    _max?: TherapistCertificateMaxAggregateInputType
  }

  export type TherapistCertificateGroupByOutputType = {
    id: string
    therapistId: string
    fileUrl: string
    fileName: string | null
    status: string
    createdAt: Date
    _count: TherapistCertificateCountAggregateOutputType | null
    _min: TherapistCertificateMinAggregateOutputType | null
    _max: TherapistCertificateMaxAggregateOutputType | null
  }

  type GetTherapistCertificateGroupByPayload<T extends TherapistCertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapistCertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapistCertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapistCertificateGroupByOutputType[P]>
            : GetScalarType<T[P], TherapistCertificateGroupByOutputType[P]>
        }
      >
    >


  export type TherapistCertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    status?: boolean
    createdAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistCertificate"]>

  export type TherapistCertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    status?: boolean
    createdAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistCertificate"]>

  export type TherapistCertificateSelectScalar = {
    id?: boolean
    therapistId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TherapistCertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type TherapistCertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }

  export type $TherapistCertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TherapistCertificate"
    objects: {
      therapist: Prisma.$TherapistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      therapistId: string
      fileUrl: string
      fileName: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["therapistCertificate"]>
    composites: {}
  }

  type TherapistCertificateGetPayload<S extends boolean | null | undefined | TherapistCertificateDefaultArgs> = $Result.GetResult<Prisma.$TherapistCertificatePayload, S>

  type TherapistCertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TherapistCertificateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TherapistCertificateCountAggregateInputType | true
    }

  export interface TherapistCertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TherapistCertificate'], meta: { name: 'TherapistCertificate' } }
    /**
     * Find zero or one TherapistCertificate that matches the filter.
     * @param {TherapistCertificateFindUniqueArgs} args - Arguments to find a TherapistCertificate
     * @example
     * // Get one TherapistCertificate
     * const therapistCertificate = await prisma.therapistCertificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapistCertificateFindUniqueArgs>(args: SelectSubset<T, TherapistCertificateFindUniqueArgs<ExtArgs>>): Prisma__TherapistCertificateClient<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TherapistCertificate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TherapistCertificateFindUniqueOrThrowArgs} args - Arguments to find a TherapistCertificate
     * @example
     * // Get one TherapistCertificate
     * const therapistCertificate = await prisma.therapistCertificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapistCertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapistCertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapistCertificateClient<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TherapistCertificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistCertificateFindFirstArgs} args - Arguments to find a TherapistCertificate
     * @example
     * // Get one TherapistCertificate
     * const therapistCertificate = await prisma.therapistCertificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapistCertificateFindFirstArgs>(args?: SelectSubset<T, TherapistCertificateFindFirstArgs<ExtArgs>>): Prisma__TherapistCertificateClient<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TherapistCertificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistCertificateFindFirstOrThrowArgs} args - Arguments to find a TherapistCertificate
     * @example
     * // Get one TherapistCertificate
     * const therapistCertificate = await prisma.therapistCertificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapistCertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapistCertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapistCertificateClient<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TherapistCertificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistCertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TherapistCertificates
     * const therapistCertificates = await prisma.therapistCertificate.findMany()
     * 
     * // Get first 10 TherapistCertificates
     * const therapistCertificates = await prisma.therapistCertificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapistCertificateWithIdOnly = await prisma.therapistCertificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapistCertificateFindManyArgs>(args?: SelectSubset<T, TherapistCertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TherapistCertificate.
     * @param {TherapistCertificateCreateArgs} args - Arguments to create a TherapistCertificate.
     * @example
     * // Create one TherapistCertificate
     * const TherapistCertificate = await prisma.therapistCertificate.create({
     *   data: {
     *     // ... data to create a TherapistCertificate
     *   }
     * })
     * 
     */
    create<T extends TherapistCertificateCreateArgs>(args: SelectSubset<T, TherapistCertificateCreateArgs<ExtArgs>>): Prisma__TherapistCertificateClient<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TherapistCertificates.
     * @param {TherapistCertificateCreateManyArgs} args - Arguments to create many TherapistCertificates.
     * @example
     * // Create many TherapistCertificates
     * const therapistCertificate = await prisma.therapistCertificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapistCertificateCreateManyArgs>(args?: SelectSubset<T, TherapistCertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TherapistCertificates and returns the data saved in the database.
     * @param {TherapistCertificateCreateManyAndReturnArgs} args - Arguments to create many TherapistCertificates.
     * @example
     * // Create many TherapistCertificates
     * const therapistCertificate = await prisma.therapistCertificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TherapistCertificates and only return the `id`
     * const therapistCertificateWithIdOnly = await prisma.therapistCertificate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapistCertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapistCertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TherapistCertificate.
     * @param {TherapistCertificateDeleteArgs} args - Arguments to delete one TherapistCertificate.
     * @example
     * // Delete one TherapistCertificate
     * const TherapistCertificate = await prisma.therapistCertificate.delete({
     *   where: {
     *     // ... filter to delete one TherapistCertificate
     *   }
     * })
     * 
     */
    delete<T extends TherapistCertificateDeleteArgs>(args: SelectSubset<T, TherapistCertificateDeleteArgs<ExtArgs>>): Prisma__TherapistCertificateClient<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TherapistCertificate.
     * @param {TherapistCertificateUpdateArgs} args - Arguments to update one TherapistCertificate.
     * @example
     * // Update one TherapistCertificate
     * const therapistCertificate = await prisma.therapistCertificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapistCertificateUpdateArgs>(args: SelectSubset<T, TherapistCertificateUpdateArgs<ExtArgs>>): Prisma__TherapistCertificateClient<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TherapistCertificates.
     * @param {TherapistCertificateDeleteManyArgs} args - Arguments to filter TherapistCertificates to delete.
     * @example
     * // Delete a few TherapistCertificates
     * const { count } = await prisma.therapistCertificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapistCertificateDeleteManyArgs>(args?: SelectSubset<T, TherapistCertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapistCertificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistCertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TherapistCertificates
     * const therapistCertificate = await prisma.therapistCertificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapistCertificateUpdateManyArgs>(args: SelectSubset<T, TherapistCertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TherapistCertificate.
     * @param {TherapistCertificateUpsertArgs} args - Arguments to update or create a TherapistCertificate.
     * @example
     * // Update or create a TherapistCertificate
     * const therapistCertificate = await prisma.therapistCertificate.upsert({
     *   create: {
     *     // ... data to create a TherapistCertificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TherapistCertificate we want to update
     *   }
     * })
     */
    upsert<T extends TherapistCertificateUpsertArgs>(args: SelectSubset<T, TherapistCertificateUpsertArgs<ExtArgs>>): Prisma__TherapistCertificateClient<$Result.GetResult<Prisma.$TherapistCertificatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TherapistCertificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistCertificateCountArgs} args - Arguments to filter TherapistCertificates to count.
     * @example
     * // Count the number of TherapistCertificates
     * const count = await prisma.therapistCertificate.count({
     *   where: {
     *     // ... the filter for the TherapistCertificates we want to count
     *   }
     * })
    **/
    count<T extends TherapistCertificateCountArgs>(
      args?: Subset<T, TherapistCertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapistCertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TherapistCertificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistCertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TherapistCertificateAggregateArgs>(args: Subset<T, TherapistCertificateAggregateArgs>): Prisma.PrismaPromise<GetTherapistCertificateAggregateType<T>>

    /**
     * Group by TherapistCertificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistCertificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TherapistCertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapistCertificateGroupByArgs['orderBy'] }
        : { orderBy?: TherapistCertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TherapistCertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapistCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TherapistCertificate model
   */
  readonly fields: TherapistCertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TherapistCertificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapistCertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TherapistCertificate model
   */ 
  interface TherapistCertificateFieldRefs {
    readonly id: FieldRef<"TherapistCertificate", 'String'>
    readonly therapistId: FieldRef<"TherapistCertificate", 'String'>
    readonly fileUrl: FieldRef<"TherapistCertificate", 'String'>
    readonly fileName: FieldRef<"TherapistCertificate", 'String'>
    readonly status: FieldRef<"TherapistCertificate", 'String'>
    readonly createdAt: FieldRef<"TherapistCertificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TherapistCertificate findUnique
   */
  export type TherapistCertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
    /**
     * Filter, which TherapistCertificate to fetch.
     */
    where: TherapistCertificateWhereUniqueInput
  }

  /**
   * TherapistCertificate findUniqueOrThrow
   */
  export type TherapistCertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
    /**
     * Filter, which TherapistCertificate to fetch.
     */
    where: TherapistCertificateWhereUniqueInput
  }

  /**
   * TherapistCertificate findFirst
   */
  export type TherapistCertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
    /**
     * Filter, which TherapistCertificate to fetch.
     */
    where?: TherapistCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistCertificates to fetch.
     */
    orderBy?: TherapistCertificateOrderByWithRelationInput | TherapistCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistCertificates.
     */
    cursor?: TherapistCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistCertificates.
     */
    distinct?: TherapistCertificateScalarFieldEnum | TherapistCertificateScalarFieldEnum[]
  }

  /**
   * TherapistCertificate findFirstOrThrow
   */
  export type TherapistCertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
    /**
     * Filter, which TherapistCertificate to fetch.
     */
    where?: TherapistCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistCertificates to fetch.
     */
    orderBy?: TherapistCertificateOrderByWithRelationInput | TherapistCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistCertificates.
     */
    cursor?: TherapistCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistCertificates.
     */
    distinct?: TherapistCertificateScalarFieldEnum | TherapistCertificateScalarFieldEnum[]
  }

  /**
   * TherapistCertificate findMany
   */
  export type TherapistCertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
    /**
     * Filter, which TherapistCertificates to fetch.
     */
    where?: TherapistCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistCertificates to fetch.
     */
    orderBy?: TherapistCertificateOrderByWithRelationInput | TherapistCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TherapistCertificates.
     */
    cursor?: TherapistCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistCertificates.
     */
    skip?: number
    distinct?: TherapistCertificateScalarFieldEnum | TherapistCertificateScalarFieldEnum[]
  }

  /**
   * TherapistCertificate create
   */
  export type TherapistCertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a TherapistCertificate.
     */
    data: XOR<TherapistCertificateCreateInput, TherapistCertificateUncheckedCreateInput>
  }

  /**
   * TherapistCertificate createMany
   */
  export type TherapistCertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TherapistCertificates.
     */
    data: TherapistCertificateCreateManyInput | TherapistCertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TherapistCertificate createManyAndReturn
   */
  export type TherapistCertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TherapistCertificates.
     */
    data: TherapistCertificateCreateManyInput | TherapistCertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TherapistCertificate update
   */
  export type TherapistCertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a TherapistCertificate.
     */
    data: XOR<TherapistCertificateUpdateInput, TherapistCertificateUncheckedUpdateInput>
    /**
     * Choose, which TherapistCertificate to update.
     */
    where: TherapistCertificateWhereUniqueInput
  }

  /**
   * TherapistCertificate updateMany
   */
  export type TherapistCertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TherapistCertificates.
     */
    data: XOR<TherapistCertificateUpdateManyMutationInput, TherapistCertificateUncheckedUpdateManyInput>
    /**
     * Filter which TherapistCertificates to update
     */
    where?: TherapistCertificateWhereInput
  }

  /**
   * TherapistCertificate upsert
   */
  export type TherapistCertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the TherapistCertificate to update in case it exists.
     */
    where: TherapistCertificateWhereUniqueInput
    /**
     * In case the TherapistCertificate found by the `where` argument doesn't exist, create a new TherapistCertificate with this data.
     */
    create: XOR<TherapistCertificateCreateInput, TherapistCertificateUncheckedCreateInput>
    /**
     * In case the TherapistCertificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapistCertificateUpdateInput, TherapistCertificateUncheckedUpdateInput>
  }

  /**
   * TherapistCertificate delete
   */
  export type TherapistCertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
    /**
     * Filter which TherapistCertificate to delete.
     */
    where: TherapistCertificateWhereUniqueInput
  }

  /**
   * TherapistCertificate deleteMany
   */
  export type TherapistCertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistCertificates to delete
     */
    where?: TherapistCertificateWhereInput
  }

  /**
   * TherapistCertificate without action
   */
  export type TherapistCertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCertificate
     */
    select?: TherapistCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistCertificateInclude<ExtArgs> | null
  }


  /**
   * Model TestQuestion
   */

  export type AggregateTestQuestion = {
    _count: TestQuestionCountAggregateOutputType | null
    _avg: TestQuestionAvgAggregateOutputType | null
    _sum: TestQuestionSumAggregateOutputType | null
    _min: TestQuestionMinAggregateOutputType | null
    _max: TestQuestionMaxAggregateOutputType | null
  }

  export type TestQuestionAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type TestQuestionSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type TestQuestionMinAggregateOutputType = {
    id: string | null
    questionText: string | null
    dimension: string | null
    sortOrder: number | null
    isActive: boolean | null
  }

  export type TestQuestionMaxAggregateOutputType = {
    id: string | null
    questionText: string | null
    dimension: string | null
    sortOrder: number | null
    isActive: boolean | null
  }

  export type TestQuestionCountAggregateOutputType = {
    id: number
    questionText: number
    dimension: number
    sortOrder: number
    isActive: number
    _all: number
  }


  export type TestQuestionAvgAggregateInputType = {
    sortOrder?: true
  }

  export type TestQuestionSumAggregateInputType = {
    sortOrder?: true
  }

  export type TestQuestionMinAggregateInputType = {
    id?: true
    questionText?: true
    dimension?: true
    sortOrder?: true
    isActive?: true
  }

  export type TestQuestionMaxAggregateInputType = {
    id?: true
    questionText?: true
    dimension?: true
    sortOrder?: true
    isActive?: true
  }

  export type TestQuestionCountAggregateInputType = {
    id?: true
    questionText?: true
    dimension?: true
    sortOrder?: true
    isActive?: true
    _all?: true
  }

  export type TestQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestQuestion to aggregate.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestQuestions
    **/
    _count?: true | TestQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestQuestionMaxAggregateInputType
  }

  export type GetTestQuestionAggregateType<T extends TestQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateTestQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestQuestion[P]>
      : GetScalarType<T[P], AggregateTestQuestion[P]>
  }




  export type TestQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestQuestionWhereInput
    orderBy?: TestQuestionOrderByWithAggregationInput | TestQuestionOrderByWithAggregationInput[]
    by: TestQuestionScalarFieldEnum[] | TestQuestionScalarFieldEnum
    having?: TestQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestQuestionCountAggregateInputType | true
    _avg?: TestQuestionAvgAggregateInputType
    _sum?: TestQuestionSumAggregateInputType
    _min?: TestQuestionMinAggregateInputType
    _max?: TestQuestionMaxAggregateInputType
  }

  export type TestQuestionGroupByOutputType = {
    id: string
    questionText: string
    dimension: string | null
    sortOrder: number
    isActive: boolean
    _count: TestQuestionCountAggregateOutputType | null
    _avg: TestQuestionAvgAggregateOutputType | null
    _sum: TestQuestionSumAggregateOutputType | null
    _min: TestQuestionMinAggregateOutputType | null
    _max: TestQuestionMaxAggregateOutputType | null
  }

  type GetTestQuestionGroupByPayload<T extends TestQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], TestQuestionGroupByOutputType[P]>
        }
      >
    >


  export type TestQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    dimension?: boolean
    sortOrder?: boolean
    isActive?: boolean
    answers?: boolean | TestQuestion$answersArgs<ExtArgs>
    _count?: boolean | TestQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testQuestion"]>

  export type TestQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    dimension?: boolean
    sortOrder?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["testQuestion"]>

  export type TestQuestionSelectScalar = {
    id?: boolean
    questionText?: boolean
    dimension?: boolean
    sortOrder?: boolean
    isActive?: boolean
  }

  export type TestQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | TestQuestion$answersArgs<ExtArgs>
    _count?: boolean | TestQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TestQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestQuestion"
    objects: {
      answers: Prisma.$TestAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionText: string
      dimension: string | null
      sortOrder: number
      isActive: boolean
    }, ExtArgs["result"]["testQuestion"]>
    composites: {}
  }

  type TestQuestionGetPayload<S extends boolean | null | undefined | TestQuestionDefaultArgs> = $Result.GetResult<Prisma.$TestQuestionPayload, S>

  type TestQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestQuestionCountAggregateInputType | true
    }

  export interface TestQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestQuestion'], meta: { name: 'TestQuestion' } }
    /**
     * Find zero or one TestQuestion that matches the filter.
     * @param {TestQuestionFindUniqueArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestQuestionFindUniqueArgs>(args: SelectSubset<T, TestQuestionFindUniqueArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TestQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestQuestionFindUniqueOrThrowArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, TestQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TestQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionFindFirstArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestQuestionFindFirstArgs>(args?: SelectSubset<T, TestQuestionFindFirstArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TestQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionFindFirstOrThrowArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, TestQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TestQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestQuestions
     * const testQuestions = await prisma.testQuestion.findMany()
     * 
     * // Get first 10 TestQuestions
     * const testQuestions = await prisma.testQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testQuestionWithIdOnly = await prisma.testQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestQuestionFindManyArgs>(args?: SelectSubset<T, TestQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TestQuestion.
     * @param {TestQuestionCreateArgs} args - Arguments to create a TestQuestion.
     * @example
     * // Create one TestQuestion
     * const TestQuestion = await prisma.testQuestion.create({
     *   data: {
     *     // ... data to create a TestQuestion
     *   }
     * })
     * 
     */
    create<T extends TestQuestionCreateArgs>(args: SelectSubset<T, TestQuestionCreateArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TestQuestions.
     * @param {TestQuestionCreateManyArgs} args - Arguments to create many TestQuestions.
     * @example
     * // Create many TestQuestions
     * const testQuestion = await prisma.testQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestQuestionCreateManyArgs>(args?: SelectSubset<T, TestQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestQuestions and returns the data saved in the database.
     * @param {TestQuestionCreateManyAndReturnArgs} args - Arguments to create many TestQuestions.
     * @example
     * // Create many TestQuestions
     * const testQuestion = await prisma.testQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestQuestions and only return the `id`
     * const testQuestionWithIdOnly = await prisma.testQuestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, TestQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TestQuestion.
     * @param {TestQuestionDeleteArgs} args - Arguments to delete one TestQuestion.
     * @example
     * // Delete one TestQuestion
     * const TestQuestion = await prisma.testQuestion.delete({
     *   where: {
     *     // ... filter to delete one TestQuestion
     *   }
     * })
     * 
     */
    delete<T extends TestQuestionDeleteArgs>(args: SelectSubset<T, TestQuestionDeleteArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TestQuestion.
     * @param {TestQuestionUpdateArgs} args - Arguments to update one TestQuestion.
     * @example
     * // Update one TestQuestion
     * const testQuestion = await prisma.testQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestQuestionUpdateArgs>(args: SelectSubset<T, TestQuestionUpdateArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TestQuestions.
     * @param {TestQuestionDeleteManyArgs} args - Arguments to filter TestQuestions to delete.
     * @example
     * // Delete a few TestQuestions
     * const { count } = await prisma.testQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestQuestionDeleteManyArgs>(args?: SelectSubset<T, TestQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestQuestions
     * const testQuestion = await prisma.testQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestQuestionUpdateManyArgs>(args: SelectSubset<T, TestQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestQuestion.
     * @param {TestQuestionUpsertArgs} args - Arguments to update or create a TestQuestion.
     * @example
     * // Update or create a TestQuestion
     * const testQuestion = await prisma.testQuestion.upsert({
     *   create: {
     *     // ... data to create a TestQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestQuestion we want to update
     *   }
     * })
     */
    upsert<T extends TestQuestionUpsertArgs>(args: SelectSubset<T, TestQuestionUpsertArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TestQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionCountArgs} args - Arguments to filter TestQuestions to count.
     * @example
     * // Count the number of TestQuestions
     * const count = await prisma.testQuestion.count({
     *   where: {
     *     // ... the filter for the TestQuestions we want to count
     *   }
     * })
    **/
    count<T extends TestQuestionCountArgs>(
      args?: Subset<T, TestQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestQuestionAggregateArgs>(args: Subset<T, TestQuestionAggregateArgs>): Prisma.PrismaPromise<GetTestQuestionAggregateType<T>>

    /**
     * Group by TestQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestQuestionGroupByArgs['orderBy'] }
        : { orderBy?: TestQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestQuestion model
   */
  readonly fields: TestQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends TestQuestion$answersArgs<ExtArgs> = {}>(args?: Subset<T, TestQuestion$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestQuestion model
   */ 
  interface TestQuestionFieldRefs {
    readonly id: FieldRef<"TestQuestion", 'String'>
    readonly questionText: FieldRef<"TestQuestion", 'String'>
    readonly dimension: FieldRef<"TestQuestion", 'String'>
    readonly sortOrder: FieldRef<"TestQuestion", 'Int'>
    readonly isActive: FieldRef<"TestQuestion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TestQuestion findUnique
   */
  export type TestQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion findUniqueOrThrow
   */
  export type TestQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion findFirst
   */
  export type TestQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestQuestions.
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestQuestions.
     */
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * TestQuestion findFirstOrThrow
   */
  export type TestQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestQuestions.
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestQuestions.
     */
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * TestQuestion findMany
   */
  export type TestQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestions to fetch.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestQuestions.
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * TestQuestion create
   */
  export type TestQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a TestQuestion.
     */
    data: XOR<TestQuestionCreateInput, TestQuestionUncheckedCreateInput>
  }

  /**
   * TestQuestion createMany
   */
  export type TestQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestQuestions.
     */
    data: TestQuestionCreateManyInput | TestQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestQuestion createManyAndReturn
   */
  export type TestQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TestQuestions.
     */
    data: TestQuestionCreateManyInput | TestQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestQuestion update
   */
  export type TestQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a TestQuestion.
     */
    data: XOR<TestQuestionUpdateInput, TestQuestionUncheckedUpdateInput>
    /**
     * Choose, which TestQuestion to update.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion updateMany
   */
  export type TestQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestQuestions.
     */
    data: XOR<TestQuestionUpdateManyMutationInput, TestQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TestQuestions to update
     */
    where?: TestQuestionWhereInput
  }

  /**
   * TestQuestion upsert
   */
  export type TestQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the TestQuestion to update in case it exists.
     */
    where: TestQuestionWhereUniqueInput
    /**
     * In case the TestQuestion found by the `where` argument doesn't exist, create a new TestQuestion with this data.
     */
    create: XOR<TestQuestionCreateInput, TestQuestionUncheckedCreateInput>
    /**
     * In case the TestQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestQuestionUpdateInput, TestQuestionUncheckedUpdateInput>
  }

  /**
   * TestQuestion delete
   */
  export type TestQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter which TestQuestion to delete.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion deleteMany
   */
  export type TestQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestQuestions to delete
     */
    where?: TestQuestionWhereInput
  }

  /**
   * TestQuestion.answers
   */
  export type TestQuestion$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    where?: TestAnswerWhereInput
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    cursor?: TestAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestAnswerScalarFieldEnum | TestAnswerScalarFieldEnum[]
  }

  /**
   * TestQuestion without action
   */
  export type TestQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
  }


  /**
   * Model TestAnswer
   */

  export type AggregateTestAnswer = {
    _count: TestAnswerCountAggregateOutputType | null
    _avg: TestAnswerAvgAggregateOutputType | null
    _sum: TestAnswerSumAggregateOutputType | null
    _min: TestAnswerMinAggregateOutputType | null
    _max: TestAnswerMaxAggregateOutputType | null
  }

  export type TestAnswerAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type TestAnswerSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type TestAnswerMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    answerText: string | null
    sortOrder: number | null
  }

  export type TestAnswerMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    answerText: string | null
    sortOrder: number | null
  }

  export type TestAnswerCountAggregateOutputType = {
    id: number
    questionId: number
    answerText: number
    sortOrder: number
    _all: number
  }


  export type TestAnswerAvgAggregateInputType = {
    sortOrder?: true
  }

  export type TestAnswerSumAggregateInputType = {
    sortOrder?: true
  }

  export type TestAnswerMinAggregateInputType = {
    id?: true
    questionId?: true
    answerText?: true
    sortOrder?: true
  }

  export type TestAnswerMaxAggregateInputType = {
    id?: true
    questionId?: true
    answerText?: true
    sortOrder?: true
  }

  export type TestAnswerCountAggregateInputType = {
    id?: true
    questionId?: true
    answerText?: true
    sortOrder?: true
    _all?: true
  }

  export type TestAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestAnswer to aggregate.
     */
    where?: TestAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswers to fetch.
     */
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestAnswers
    **/
    _count?: true | TestAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestAnswerMaxAggregateInputType
  }

  export type GetTestAnswerAggregateType<T extends TestAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateTestAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestAnswer[P]>
      : GetScalarType<T[P], AggregateTestAnswer[P]>
  }




  export type TestAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAnswerWhereInput
    orderBy?: TestAnswerOrderByWithAggregationInput | TestAnswerOrderByWithAggregationInput[]
    by: TestAnswerScalarFieldEnum[] | TestAnswerScalarFieldEnum
    having?: TestAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestAnswerCountAggregateInputType | true
    _avg?: TestAnswerAvgAggregateInputType
    _sum?: TestAnswerSumAggregateInputType
    _min?: TestAnswerMinAggregateInputType
    _max?: TestAnswerMaxAggregateInputType
  }

  export type TestAnswerGroupByOutputType = {
    id: string
    questionId: string
    answerText: string
    sortOrder: number
    _count: TestAnswerCountAggregateOutputType | null
    _avg: TestAnswerAvgAggregateOutputType | null
    _sum: TestAnswerSumAggregateOutputType | null
    _min: TestAnswerMinAggregateOutputType | null
    _max: TestAnswerMaxAggregateOutputType | null
  }

  type GetTestAnswerGroupByPayload<T extends TestAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], TestAnswerGroupByOutputType[P]>
        }
      >
    >


  export type TestAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    answerText?: boolean
    sortOrder?: boolean
    question?: boolean | TestQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testAnswer"]>

  export type TestAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    answerText?: boolean
    sortOrder?: boolean
    question?: boolean | TestQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testAnswer"]>

  export type TestAnswerSelectScalar = {
    id?: boolean
    questionId?: boolean
    answerText?: boolean
    sortOrder?: boolean
  }

  export type TestAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | TestQuestionDefaultArgs<ExtArgs>
  }
  export type TestAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | TestQuestionDefaultArgs<ExtArgs>
  }

  export type $TestAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestAnswer"
    objects: {
      question: Prisma.$TestQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      answerText: string
      sortOrder: number
    }, ExtArgs["result"]["testAnswer"]>
    composites: {}
  }

  type TestAnswerGetPayload<S extends boolean | null | undefined | TestAnswerDefaultArgs> = $Result.GetResult<Prisma.$TestAnswerPayload, S>

  type TestAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestAnswerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestAnswerCountAggregateInputType | true
    }

  export interface TestAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestAnswer'], meta: { name: 'TestAnswer' } }
    /**
     * Find zero or one TestAnswer that matches the filter.
     * @param {TestAnswerFindUniqueArgs} args - Arguments to find a TestAnswer
     * @example
     * // Get one TestAnswer
     * const testAnswer = await prisma.testAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestAnswerFindUniqueArgs>(args: SelectSubset<T, TestAnswerFindUniqueArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TestAnswer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestAnswerFindUniqueOrThrowArgs} args - Arguments to find a TestAnswer
     * @example
     * // Get one TestAnswer
     * const testAnswer = await prisma.testAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, TestAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TestAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFindFirstArgs} args - Arguments to find a TestAnswer
     * @example
     * // Get one TestAnswer
     * const testAnswer = await prisma.testAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestAnswerFindFirstArgs>(args?: SelectSubset<T, TestAnswerFindFirstArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TestAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFindFirstOrThrowArgs} args - Arguments to find a TestAnswer
     * @example
     * // Get one TestAnswer
     * const testAnswer = await prisma.testAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, TestAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TestAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestAnswers
     * const testAnswers = await prisma.testAnswer.findMany()
     * 
     * // Get first 10 TestAnswers
     * const testAnswers = await prisma.testAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testAnswerWithIdOnly = await prisma.testAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestAnswerFindManyArgs>(args?: SelectSubset<T, TestAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TestAnswer.
     * @param {TestAnswerCreateArgs} args - Arguments to create a TestAnswer.
     * @example
     * // Create one TestAnswer
     * const TestAnswer = await prisma.testAnswer.create({
     *   data: {
     *     // ... data to create a TestAnswer
     *   }
     * })
     * 
     */
    create<T extends TestAnswerCreateArgs>(args: SelectSubset<T, TestAnswerCreateArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TestAnswers.
     * @param {TestAnswerCreateManyArgs} args - Arguments to create many TestAnswers.
     * @example
     * // Create many TestAnswers
     * const testAnswer = await prisma.testAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestAnswerCreateManyArgs>(args?: SelectSubset<T, TestAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestAnswers and returns the data saved in the database.
     * @param {TestAnswerCreateManyAndReturnArgs} args - Arguments to create many TestAnswers.
     * @example
     * // Create many TestAnswers
     * const testAnswer = await prisma.testAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestAnswers and only return the `id`
     * const testAnswerWithIdOnly = await prisma.testAnswer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, TestAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TestAnswer.
     * @param {TestAnswerDeleteArgs} args - Arguments to delete one TestAnswer.
     * @example
     * // Delete one TestAnswer
     * const TestAnswer = await prisma.testAnswer.delete({
     *   where: {
     *     // ... filter to delete one TestAnswer
     *   }
     * })
     * 
     */
    delete<T extends TestAnswerDeleteArgs>(args: SelectSubset<T, TestAnswerDeleteArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TestAnswer.
     * @param {TestAnswerUpdateArgs} args - Arguments to update one TestAnswer.
     * @example
     * // Update one TestAnswer
     * const testAnswer = await prisma.testAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestAnswerUpdateArgs>(args: SelectSubset<T, TestAnswerUpdateArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TestAnswers.
     * @param {TestAnswerDeleteManyArgs} args - Arguments to filter TestAnswers to delete.
     * @example
     * // Delete a few TestAnswers
     * const { count } = await prisma.testAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestAnswerDeleteManyArgs>(args?: SelectSubset<T, TestAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestAnswers
     * const testAnswer = await prisma.testAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestAnswerUpdateManyArgs>(args: SelectSubset<T, TestAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestAnswer.
     * @param {TestAnswerUpsertArgs} args - Arguments to update or create a TestAnswer.
     * @example
     * // Update or create a TestAnswer
     * const testAnswer = await prisma.testAnswer.upsert({
     *   create: {
     *     // ... data to create a TestAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestAnswer we want to update
     *   }
     * })
     */
    upsert<T extends TestAnswerUpsertArgs>(args: SelectSubset<T, TestAnswerUpsertArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TestAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerCountArgs} args - Arguments to filter TestAnswers to count.
     * @example
     * // Count the number of TestAnswers
     * const count = await prisma.testAnswer.count({
     *   where: {
     *     // ... the filter for the TestAnswers we want to count
     *   }
     * })
    **/
    count<T extends TestAnswerCountArgs>(
      args?: Subset<T, TestAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAnswerAggregateArgs>(args: Subset<T, TestAnswerAggregateArgs>): Prisma.PrismaPromise<GetTestAnswerAggregateType<T>>

    /**
     * Group by TestAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestAnswerGroupByArgs['orderBy'] }
        : { orderBy?: TestAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestAnswer model
   */
  readonly fields: TestAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends TestQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestQuestionDefaultArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestAnswer model
   */ 
  interface TestAnswerFieldRefs {
    readonly id: FieldRef<"TestAnswer", 'String'>
    readonly questionId: FieldRef<"TestAnswer", 'String'>
    readonly answerText: FieldRef<"TestAnswer", 'String'>
    readonly sortOrder: FieldRef<"TestAnswer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TestAnswer findUnique
   */
  export type TestAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswer to fetch.
     */
    where: TestAnswerWhereUniqueInput
  }

  /**
   * TestAnswer findUniqueOrThrow
   */
  export type TestAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswer to fetch.
     */
    where: TestAnswerWhereUniqueInput
  }

  /**
   * TestAnswer findFirst
   */
  export type TestAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswer to fetch.
     */
    where?: TestAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswers to fetch.
     */
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestAnswers.
     */
    cursor?: TestAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestAnswers.
     */
    distinct?: TestAnswerScalarFieldEnum | TestAnswerScalarFieldEnum[]
  }

  /**
   * TestAnswer findFirstOrThrow
   */
  export type TestAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswer to fetch.
     */
    where?: TestAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswers to fetch.
     */
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestAnswers.
     */
    cursor?: TestAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestAnswers.
     */
    distinct?: TestAnswerScalarFieldEnum | TestAnswerScalarFieldEnum[]
  }

  /**
   * TestAnswer findMany
   */
  export type TestAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswers to fetch.
     */
    where?: TestAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswers to fetch.
     */
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestAnswers.
     */
    cursor?: TestAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswers.
     */
    skip?: number
    distinct?: TestAnswerScalarFieldEnum | TestAnswerScalarFieldEnum[]
  }

  /**
   * TestAnswer create
   */
  export type TestAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a TestAnswer.
     */
    data: XOR<TestAnswerCreateInput, TestAnswerUncheckedCreateInput>
  }

  /**
   * TestAnswer createMany
   */
  export type TestAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestAnswers.
     */
    data: TestAnswerCreateManyInput | TestAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestAnswer createManyAndReturn
   */
  export type TestAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TestAnswers.
     */
    data: TestAnswerCreateManyInput | TestAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestAnswer update
   */
  export type TestAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a TestAnswer.
     */
    data: XOR<TestAnswerUpdateInput, TestAnswerUncheckedUpdateInput>
    /**
     * Choose, which TestAnswer to update.
     */
    where: TestAnswerWhereUniqueInput
  }

  /**
   * TestAnswer updateMany
   */
  export type TestAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestAnswers.
     */
    data: XOR<TestAnswerUpdateManyMutationInput, TestAnswerUncheckedUpdateManyInput>
    /**
     * Filter which TestAnswers to update
     */
    where?: TestAnswerWhereInput
  }

  /**
   * TestAnswer upsert
   */
  export type TestAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the TestAnswer to update in case it exists.
     */
    where: TestAnswerWhereUniqueInput
    /**
     * In case the TestAnswer found by the `where` argument doesn't exist, create a new TestAnswer with this data.
     */
    create: XOR<TestAnswerCreateInput, TestAnswerUncheckedCreateInput>
    /**
     * In case the TestAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestAnswerUpdateInput, TestAnswerUncheckedUpdateInput>
  }

  /**
   * TestAnswer delete
   */
  export type TestAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter which TestAnswer to delete.
     */
    where: TestAnswerWhereUniqueInput
  }

  /**
   * TestAnswer deleteMany
   */
  export type TestAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestAnswers to delete
     */
    where?: TestAnswerWhereInput
  }

  /**
   * TestAnswer without action
   */
  export type TestAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
  }


  /**
   * Model ClientTestResult
   */

  export type AggregateClientTestResult = {
    _count: ClientTestResultCountAggregateOutputType | null
    _min: ClientTestResultMinAggregateOutputType | null
    _max: ClientTestResultMaxAggregateOutputType | null
  }

  export type ClientTestResultMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ClientTestResultMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ClientTestResultCountAggregateOutputType = {
    id: number
    userId: number
    answers: number
    preferences: number
    createdAt: number
    _all: number
  }


  export type ClientTestResultMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type ClientTestResultMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type ClientTestResultCountAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    preferences?: true
    createdAt?: true
    _all?: true
  }

  export type ClientTestResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientTestResult to aggregate.
     */
    where?: ClientTestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTestResults to fetch.
     */
    orderBy?: ClientTestResultOrderByWithRelationInput | ClientTestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientTestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientTestResults
    **/
    _count?: true | ClientTestResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientTestResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientTestResultMaxAggregateInputType
  }

  export type GetClientTestResultAggregateType<T extends ClientTestResultAggregateArgs> = {
        [P in keyof T & keyof AggregateClientTestResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientTestResult[P]>
      : GetScalarType<T[P], AggregateClientTestResult[P]>
  }




  export type ClientTestResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientTestResultWhereInput
    orderBy?: ClientTestResultOrderByWithAggregationInput | ClientTestResultOrderByWithAggregationInput[]
    by: ClientTestResultScalarFieldEnum[] | ClientTestResultScalarFieldEnum
    having?: ClientTestResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientTestResultCountAggregateInputType | true
    _min?: ClientTestResultMinAggregateInputType
    _max?: ClientTestResultMaxAggregateInputType
  }

  export type ClientTestResultGroupByOutputType = {
    id: string
    userId: string
    answers: JsonValue
    preferences: JsonValue | null
    createdAt: Date
    _count: ClientTestResultCountAggregateOutputType | null
    _min: ClientTestResultMinAggregateOutputType | null
    _max: ClientTestResultMaxAggregateOutputType | null
  }

  type GetClientTestResultGroupByPayload<T extends ClientTestResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientTestResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientTestResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientTestResultGroupByOutputType[P]>
            : GetScalarType<T[P], ClientTestResultGroupByOutputType[P]>
        }
      >
    >


  export type ClientTestResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    preferences?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientTestResult"]>

  export type ClientTestResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    preferences?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientTestResult"]>

  export type ClientTestResultSelectScalar = {
    id?: boolean
    userId?: boolean
    answers?: boolean
    preferences?: boolean
    createdAt?: boolean
  }

  export type ClientTestResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientTestResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientTestResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientTestResult"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      answers: Prisma.JsonValue
      preferences: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["clientTestResult"]>
    composites: {}
  }

  type ClientTestResultGetPayload<S extends boolean | null | undefined | ClientTestResultDefaultArgs> = $Result.GetResult<Prisma.$ClientTestResultPayload, S>

  type ClientTestResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientTestResultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientTestResultCountAggregateInputType | true
    }

  export interface ClientTestResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientTestResult'], meta: { name: 'ClientTestResult' } }
    /**
     * Find zero or one ClientTestResult that matches the filter.
     * @param {ClientTestResultFindUniqueArgs} args - Arguments to find a ClientTestResult
     * @example
     * // Get one ClientTestResult
     * const clientTestResult = await prisma.clientTestResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientTestResultFindUniqueArgs>(args: SelectSubset<T, ClientTestResultFindUniqueArgs<ExtArgs>>): Prisma__ClientTestResultClient<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ClientTestResult that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientTestResultFindUniqueOrThrowArgs} args - Arguments to find a ClientTestResult
     * @example
     * // Get one ClientTestResult
     * const clientTestResult = await prisma.clientTestResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientTestResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientTestResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientTestResultClient<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ClientTestResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestResultFindFirstArgs} args - Arguments to find a ClientTestResult
     * @example
     * // Get one ClientTestResult
     * const clientTestResult = await prisma.clientTestResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientTestResultFindFirstArgs>(args?: SelectSubset<T, ClientTestResultFindFirstArgs<ExtArgs>>): Prisma__ClientTestResultClient<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ClientTestResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestResultFindFirstOrThrowArgs} args - Arguments to find a ClientTestResult
     * @example
     * // Get one ClientTestResult
     * const clientTestResult = await prisma.clientTestResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientTestResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientTestResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientTestResultClient<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ClientTestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientTestResults
     * const clientTestResults = await prisma.clientTestResult.findMany()
     * 
     * // Get first 10 ClientTestResults
     * const clientTestResults = await prisma.clientTestResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientTestResultWithIdOnly = await prisma.clientTestResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientTestResultFindManyArgs>(args?: SelectSubset<T, ClientTestResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ClientTestResult.
     * @param {ClientTestResultCreateArgs} args - Arguments to create a ClientTestResult.
     * @example
     * // Create one ClientTestResult
     * const ClientTestResult = await prisma.clientTestResult.create({
     *   data: {
     *     // ... data to create a ClientTestResult
     *   }
     * })
     * 
     */
    create<T extends ClientTestResultCreateArgs>(args: SelectSubset<T, ClientTestResultCreateArgs<ExtArgs>>): Prisma__ClientTestResultClient<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ClientTestResults.
     * @param {ClientTestResultCreateManyArgs} args - Arguments to create many ClientTestResults.
     * @example
     * // Create many ClientTestResults
     * const clientTestResult = await prisma.clientTestResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientTestResultCreateManyArgs>(args?: SelectSubset<T, ClientTestResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientTestResults and returns the data saved in the database.
     * @param {ClientTestResultCreateManyAndReturnArgs} args - Arguments to create many ClientTestResults.
     * @example
     * // Create many ClientTestResults
     * const clientTestResult = await prisma.clientTestResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientTestResults and only return the `id`
     * const clientTestResultWithIdOnly = await prisma.clientTestResult.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientTestResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientTestResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ClientTestResult.
     * @param {ClientTestResultDeleteArgs} args - Arguments to delete one ClientTestResult.
     * @example
     * // Delete one ClientTestResult
     * const ClientTestResult = await prisma.clientTestResult.delete({
     *   where: {
     *     // ... filter to delete one ClientTestResult
     *   }
     * })
     * 
     */
    delete<T extends ClientTestResultDeleteArgs>(args: SelectSubset<T, ClientTestResultDeleteArgs<ExtArgs>>): Prisma__ClientTestResultClient<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ClientTestResult.
     * @param {ClientTestResultUpdateArgs} args - Arguments to update one ClientTestResult.
     * @example
     * // Update one ClientTestResult
     * const clientTestResult = await prisma.clientTestResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientTestResultUpdateArgs>(args: SelectSubset<T, ClientTestResultUpdateArgs<ExtArgs>>): Prisma__ClientTestResultClient<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ClientTestResults.
     * @param {ClientTestResultDeleteManyArgs} args - Arguments to filter ClientTestResults to delete.
     * @example
     * // Delete a few ClientTestResults
     * const { count } = await prisma.clientTestResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientTestResultDeleteManyArgs>(args?: SelectSubset<T, ClientTestResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientTestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientTestResults
     * const clientTestResult = await prisma.clientTestResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientTestResultUpdateManyArgs>(args: SelectSubset<T, ClientTestResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientTestResult.
     * @param {ClientTestResultUpsertArgs} args - Arguments to update or create a ClientTestResult.
     * @example
     * // Update or create a ClientTestResult
     * const clientTestResult = await prisma.clientTestResult.upsert({
     *   create: {
     *     // ... data to create a ClientTestResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientTestResult we want to update
     *   }
     * })
     */
    upsert<T extends ClientTestResultUpsertArgs>(args: SelectSubset<T, ClientTestResultUpsertArgs<ExtArgs>>): Prisma__ClientTestResultClient<$Result.GetResult<Prisma.$ClientTestResultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ClientTestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestResultCountArgs} args - Arguments to filter ClientTestResults to count.
     * @example
     * // Count the number of ClientTestResults
     * const count = await prisma.clientTestResult.count({
     *   where: {
     *     // ... the filter for the ClientTestResults we want to count
     *   }
     * })
    **/
    count<T extends ClientTestResultCountArgs>(
      args?: Subset<T, ClientTestResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientTestResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientTestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientTestResultAggregateArgs>(args: Subset<T, ClientTestResultAggregateArgs>): Prisma.PrismaPromise<GetClientTestResultAggregateType<T>>

    /**
     * Group by ClientTestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientTestResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientTestResultGroupByArgs['orderBy'] }
        : { orderBy?: ClientTestResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientTestResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientTestResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientTestResult model
   */
  readonly fields: ClientTestResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientTestResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientTestResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientTestResult model
   */ 
  interface ClientTestResultFieldRefs {
    readonly id: FieldRef<"ClientTestResult", 'String'>
    readonly userId: FieldRef<"ClientTestResult", 'String'>
    readonly answers: FieldRef<"ClientTestResult", 'Json'>
    readonly preferences: FieldRef<"ClientTestResult", 'Json'>
    readonly createdAt: FieldRef<"ClientTestResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientTestResult findUnique
   */
  export type ClientTestResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
    /**
     * Filter, which ClientTestResult to fetch.
     */
    where: ClientTestResultWhereUniqueInput
  }

  /**
   * ClientTestResult findUniqueOrThrow
   */
  export type ClientTestResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
    /**
     * Filter, which ClientTestResult to fetch.
     */
    where: ClientTestResultWhereUniqueInput
  }

  /**
   * ClientTestResult findFirst
   */
  export type ClientTestResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
    /**
     * Filter, which ClientTestResult to fetch.
     */
    where?: ClientTestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTestResults to fetch.
     */
    orderBy?: ClientTestResultOrderByWithRelationInput | ClientTestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientTestResults.
     */
    cursor?: ClientTestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientTestResults.
     */
    distinct?: ClientTestResultScalarFieldEnum | ClientTestResultScalarFieldEnum[]
  }

  /**
   * ClientTestResult findFirstOrThrow
   */
  export type ClientTestResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
    /**
     * Filter, which ClientTestResult to fetch.
     */
    where?: ClientTestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTestResults to fetch.
     */
    orderBy?: ClientTestResultOrderByWithRelationInput | ClientTestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientTestResults.
     */
    cursor?: ClientTestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientTestResults.
     */
    distinct?: ClientTestResultScalarFieldEnum | ClientTestResultScalarFieldEnum[]
  }

  /**
   * ClientTestResult findMany
   */
  export type ClientTestResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
    /**
     * Filter, which ClientTestResults to fetch.
     */
    where?: ClientTestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTestResults to fetch.
     */
    orderBy?: ClientTestResultOrderByWithRelationInput | ClientTestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientTestResults.
     */
    cursor?: ClientTestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTestResults.
     */
    skip?: number
    distinct?: ClientTestResultScalarFieldEnum | ClientTestResultScalarFieldEnum[]
  }

  /**
   * ClientTestResult create
   */
  export type ClientTestResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientTestResult.
     */
    data: XOR<ClientTestResultCreateInput, ClientTestResultUncheckedCreateInput>
  }

  /**
   * ClientTestResult createMany
   */
  export type ClientTestResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientTestResults.
     */
    data: ClientTestResultCreateManyInput | ClientTestResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientTestResult createManyAndReturn
   */
  export type ClientTestResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ClientTestResults.
     */
    data: ClientTestResultCreateManyInput | ClientTestResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientTestResult update
   */
  export type ClientTestResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientTestResult.
     */
    data: XOR<ClientTestResultUpdateInput, ClientTestResultUncheckedUpdateInput>
    /**
     * Choose, which ClientTestResult to update.
     */
    where: ClientTestResultWhereUniqueInput
  }

  /**
   * ClientTestResult updateMany
   */
  export type ClientTestResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientTestResults.
     */
    data: XOR<ClientTestResultUpdateManyMutationInput, ClientTestResultUncheckedUpdateManyInput>
    /**
     * Filter which ClientTestResults to update
     */
    where?: ClientTestResultWhereInput
  }

  /**
   * ClientTestResult upsert
   */
  export type ClientTestResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientTestResult to update in case it exists.
     */
    where: ClientTestResultWhereUniqueInput
    /**
     * In case the ClientTestResult found by the `where` argument doesn't exist, create a new ClientTestResult with this data.
     */
    create: XOR<ClientTestResultCreateInput, ClientTestResultUncheckedCreateInput>
    /**
     * In case the ClientTestResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientTestResultUpdateInput, ClientTestResultUncheckedUpdateInput>
  }

  /**
   * ClientTestResult delete
   */
  export type ClientTestResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
    /**
     * Filter which ClientTestResult to delete.
     */
    where: ClientTestResultWhereUniqueInput
  }

  /**
   * ClientTestResult deleteMany
   */
  export type ClientTestResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientTestResults to delete
     */
    where?: ClientTestResultWhereInput
  }

  /**
   * ClientTestResult without action
   */
  export type ClientTestResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestResult
     */
    select?: ClientTestResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestResultInclude<ExtArgs> | null
  }


  /**
   * Model TherapistMatch
   */

  export type AggregateTherapistMatch = {
    _count: TherapistMatchCountAggregateOutputType | null
    _avg: TherapistMatchAvgAggregateOutputType | null
    _sum: TherapistMatchSumAggregateOutputType | null
    _min: TherapistMatchMinAggregateOutputType | null
    _max: TherapistMatchMaxAggregateOutputType | null
  }

  export type TherapistMatchAvgAggregateOutputType = {
    matchScore: number | null
  }

  export type TherapistMatchSumAggregateOutputType = {
    matchScore: number | null
  }

  export type TherapistMatchMinAggregateOutputType = {
    id: string | null
    userId: string | null
    therapistId: string | null
    matchScore: number | null
    createdAt: Date | null
  }

  export type TherapistMatchMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    therapistId: string | null
    matchScore: number | null
    createdAt: Date | null
  }

  export type TherapistMatchCountAggregateOutputType = {
    id: number
    userId: number
    therapistId: number
    matchScore: number
    createdAt: number
    _all: number
  }


  export type TherapistMatchAvgAggregateInputType = {
    matchScore?: true
  }

  export type TherapistMatchSumAggregateInputType = {
    matchScore?: true
  }

  export type TherapistMatchMinAggregateInputType = {
    id?: true
    userId?: true
    therapistId?: true
    matchScore?: true
    createdAt?: true
  }

  export type TherapistMatchMaxAggregateInputType = {
    id?: true
    userId?: true
    therapistId?: true
    matchScore?: true
    createdAt?: true
  }

  export type TherapistMatchCountAggregateInputType = {
    id?: true
    userId?: true
    therapistId?: true
    matchScore?: true
    createdAt?: true
    _all?: true
  }

  export type TherapistMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistMatch to aggregate.
     */
    where?: TherapistMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistMatches to fetch.
     */
    orderBy?: TherapistMatchOrderByWithRelationInput | TherapistMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapistMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TherapistMatches
    **/
    _count?: true | TherapistMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TherapistMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TherapistMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapistMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapistMatchMaxAggregateInputType
  }

  export type GetTherapistMatchAggregateType<T extends TherapistMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapistMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapistMatch[P]>
      : GetScalarType<T[P], AggregateTherapistMatch[P]>
  }




  export type TherapistMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistMatchWhereInput
    orderBy?: TherapistMatchOrderByWithAggregationInput | TherapistMatchOrderByWithAggregationInput[]
    by: TherapistMatchScalarFieldEnum[] | TherapistMatchScalarFieldEnum
    having?: TherapistMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapistMatchCountAggregateInputType | true
    _avg?: TherapistMatchAvgAggregateInputType
    _sum?: TherapistMatchSumAggregateInputType
    _min?: TherapistMatchMinAggregateInputType
    _max?: TherapistMatchMaxAggregateInputType
  }

  export type TherapistMatchGroupByOutputType = {
    id: string
    userId: string
    therapistId: string
    matchScore: number
    createdAt: Date
    _count: TherapistMatchCountAggregateOutputType | null
    _avg: TherapistMatchAvgAggregateOutputType | null
    _sum: TherapistMatchSumAggregateOutputType | null
    _min: TherapistMatchMinAggregateOutputType | null
    _max: TherapistMatchMaxAggregateOutputType | null
  }

  type GetTherapistMatchGroupByPayload<T extends TherapistMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapistMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapistMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapistMatchGroupByOutputType[P]>
            : GetScalarType<T[P], TherapistMatchGroupByOutputType[P]>
        }
      >
    >


  export type TherapistMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    matchScore?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistMatch"]>

  export type TherapistMatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    matchScore?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapistMatch"]>

  export type TherapistMatchSelectScalar = {
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    matchScore?: boolean
    createdAt?: boolean
  }

  export type TherapistMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type TherapistMatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }

  export type $TherapistMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TherapistMatch"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      therapist: Prisma.$TherapistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      therapistId: string
      matchScore: number
      createdAt: Date
    }, ExtArgs["result"]["therapistMatch"]>
    composites: {}
  }

  type TherapistMatchGetPayload<S extends boolean | null | undefined | TherapistMatchDefaultArgs> = $Result.GetResult<Prisma.$TherapistMatchPayload, S>

  type TherapistMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TherapistMatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TherapistMatchCountAggregateInputType | true
    }

  export interface TherapistMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TherapistMatch'], meta: { name: 'TherapistMatch' } }
    /**
     * Find zero or one TherapistMatch that matches the filter.
     * @param {TherapistMatchFindUniqueArgs} args - Arguments to find a TherapistMatch
     * @example
     * // Get one TherapistMatch
     * const therapistMatch = await prisma.therapistMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapistMatchFindUniqueArgs>(args: SelectSubset<T, TherapistMatchFindUniqueArgs<ExtArgs>>): Prisma__TherapistMatchClient<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TherapistMatch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TherapistMatchFindUniqueOrThrowArgs} args - Arguments to find a TherapistMatch
     * @example
     * // Get one TherapistMatch
     * const therapistMatch = await prisma.therapistMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapistMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapistMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapistMatchClient<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TherapistMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistMatchFindFirstArgs} args - Arguments to find a TherapistMatch
     * @example
     * // Get one TherapistMatch
     * const therapistMatch = await prisma.therapistMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapistMatchFindFirstArgs>(args?: SelectSubset<T, TherapistMatchFindFirstArgs<ExtArgs>>): Prisma__TherapistMatchClient<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TherapistMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistMatchFindFirstOrThrowArgs} args - Arguments to find a TherapistMatch
     * @example
     * // Get one TherapistMatch
     * const therapistMatch = await prisma.therapistMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapistMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapistMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapistMatchClient<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TherapistMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TherapistMatches
     * const therapistMatches = await prisma.therapistMatch.findMany()
     * 
     * // Get first 10 TherapistMatches
     * const therapistMatches = await prisma.therapistMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapistMatchWithIdOnly = await prisma.therapistMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapistMatchFindManyArgs>(args?: SelectSubset<T, TherapistMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TherapistMatch.
     * @param {TherapistMatchCreateArgs} args - Arguments to create a TherapistMatch.
     * @example
     * // Create one TherapistMatch
     * const TherapistMatch = await prisma.therapistMatch.create({
     *   data: {
     *     // ... data to create a TherapistMatch
     *   }
     * })
     * 
     */
    create<T extends TherapistMatchCreateArgs>(args: SelectSubset<T, TherapistMatchCreateArgs<ExtArgs>>): Prisma__TherapistMatchClient<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TherapistMatches.
     * @param {TherapistMatchCreateManyArgs} args - Arguments to create many TherapistMatches.
     * @example
     * // Create many TherapistMatches
     * const therapistMatch = await prisma.therapistMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapistMatchCreateManyArgs>(args?: SelectSubset<T, TherapistMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TherapistMatches and returns the data saved in the database.
     * @param {TherapistMatchCreateManyAndReturnArgs} args - Arguments to create many TherapistMatches.
     * @example
     * // Create many TherapistMatches
     * const therapistMatch = await prisma.therapistMatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TherapistMatches and only return the `id`
     * const therapistMatchWithIdOnly = await prisma.therapistMatch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapistMatchCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapistMatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TherapistMatch.
     * @param {TherapistMatchDeleteArgs} args - Arguments to delete one TherapistMatch.
     * @example
     * // Delete one TherapistMatch
     * const TherapistMatch = await prisma.therapistMatch.delete({
     *   where: {
     *     // ... filter to delete one TherapistMatch
     *   }
     * })
     * 
     */
    delete<T extends TherapistMatchDeleteArgs>(args: SelectSubset<T, TherapistMatchDeleteArgs<ExtArgs>>): Prisma__TherapistMatchClient<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TherapistMatch.
     * @param {TherapistMatchUpdateArgs} args - Arguments to update one TherapistMatch.
     * @example
     * // Update one TherapistMatch
     * const therapistMatch = await prisma.therapistMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapistMatchUpdateArgs>(args: SelectSubset<T, TherapistMatchUpdateArgs<ExtArgs>>): Prisma__TherapistMatchClient<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TherapistMatches.
     * @param {TherapistMatchDeleteManyArgs} args - Arguments to filter TherapistMatches to delete.
     * @example
     * // Delete a few TherapistMatches
     * const { count } = await prisma.therapistMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapistMatchDeleteManyArgs>(args?: SelectSubset<T, TherapistMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapistMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TherapistMatches
     * const therapistMatch = await prisma.therapistMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapistMatchUpdateManyArgs>(args: SelectSubset<T, TherapistMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TherapistMatch.
     * @param {TherapistMatchUpsertArgs} args - Arguments to update or create a TherapistMatch.
     * @example
     * // Update or create a TherapistMatch
     * const therapistMatch = await prisma.therapistMatch.upsert({
     *   create: {
     *     // ... data to create a TherapistMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TherapistMatch we want to update
     *   }
     * })
     */
    upsert<T extends TherapistMatchUpsertArgs>(args: SelectSubset<T, TherapistMatchUpsertArgs<ExtArgs>>): Prisma__TherapistMatchClient<$Result.GetResult<Prisma.$TherapistMatchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TherapistMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistMatchCountArgs} args - Arguments to filter TherapistMatches to count.
     * @example
     * // Count the number of TherapistMatches
     * const count = await prisma.therapistMatch.count({
     *   where: {
     *     // ... the filter for the TherapistMatches we want to count
     *   }
     * })
    **/
    count<T extends TherapistMatchCountArgs>(
      args?: Subset<T, TherapistMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapistMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TherapistMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TherapistMatchAggregateArgs>(args: Subset<T, TherapistMatchAggregateArgs>): Prisma.PrismaPromise<GetTherapistMatchAggregateType<T>>

    /**
     * Group by TherapistMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistMatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TherapistMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapistMatchGroupByArgs['orderBy'] }
        : { orderBy?: TherapistMatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TherapistMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapistMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TherapistMatch model
   */
  readonly fields: TherapistMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TherapistMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapistMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TherapistMatch model
   */ 
  interface TherapistMatchFieldRefs {
    readonly id: FieldRef<"TherapistMatch", 'String'>
    readonly userId: FieldRef<"TherapistMatch", 'String'>
    readonly therapistId: FieldRef<"TherapistMatch", 'String'>
    readonly matchScore: FieldRef<"TherapistMatch", 'Int'>
    readonly createdAt: FieldRef<"TherapistMatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TherapistMatch findUnique
   */
  export type TherapistMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    /**
     * Filter, which TherapistMatch to fetch.
     */
    where: TherapistMatchWhereUniqueInput
  }

  /**
   * TherapistMatch findUniqueOrThrow
   */
  export type TherapistMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    /**
     * Filter, which TherapistMatch to fetch.
     */
    where: TherapistMatchWhereUniqueInput
  }

  /**
   * TherapistMatch findFirst
   */
  export type TherapistMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    /**
     * Filter, which TherapistMatch to fetch.
     */
    where?: TherapistMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistMatches to fetch.
     */
    orderBy?: TherapistMatchOrderByWithRelationInput | TherapistMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistMatches.
     */
    cursor?: TherapistMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistMatches.
     */
    distinct?: TherapistMatchScalarFieldEnum | TherapistMatchScalarFieldEnum[]
  }

  /**
   * TherapistMatch findFirstOrThrow
   */
  export type TherapistMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    /**
     * Filter, which TherapistMatch to fetch.
     */
    where?: TherapistMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistMatches to fetch.
     */
    orderBy?: TherapistMatchOrderByWithRelationInput | TherapistMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistMatches.
     */
    cursor?: TherapistMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistMatches.
     */
    distinct?: TherapistMatchScalarFieldEnum | TherapistMatchScalarFieldEnum[]
  }

  /**
   * TherapistMatch findMany
   */
  export type TherapistMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    /**
     * Filter, which TherapistMatches to fetch.
     */
    where?: TherapistMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistMatches to fetch.
     */
    orderBy?: TherapistMatchOrderByWithRelationInput | TherapistMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TherapistMatches.
     */
    cursor?: TherapistMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistMatches.
     */
    skip?: number
    distinct?: TherapistMatchScalarFieldEnum | TherapistMatchScalarFieldEnum[]
  }

  /**
   * TherapistMatch create
   */
  export type TherapistMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a TherapistMatch.
     */
    data: XOR<TherapistMatchCreateInput, TherapistMatchUncheckedCreateInput>
  }

  /**
   * TherapistMatch createMany
   */
  export type TherapistMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TherapistMatches.
     */
    data: TherapistMatchCreateManyInput | TherapistMatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TherapistMatch createManyAndReturn
   */
  export type TherapistMatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TherapistMatches.
     */
    data: TherapistMatchCreateManyInput | TherapistMatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TherapistMatch update
   */
  export type TherapistMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a TherapistMatch.
     */
    data: XOR<TherapistMatchUpdateInput, TherapistMatchUncheckedUpdateInput>
    /**
     * Choose, which TherapistMatch to update.
     */
    where: TherapistMatchWhereUniqueInput
  }

  /**
   * TherapistMatch updateMany
   */
  export type TherapistMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TherapistMatches.
     */
    data: XOR<TherapistMatchUpdateManyMutationInput, TherapistMatchUncheckedUpdateManyInput>
    /**
     * Filter which TherapistMatches to update
     */
    where?: TherapistMatchWhereInput
  }

  /**
   * TherapistMatch upsert
   */
  export type TherapistMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the TherapistMatch to update in case it exists.
     */
    where: TherapistMatchWhereUniqueInput
    /**
     * In case the TherapistMatch found by the `where` argument doesn't exist, create a new TherapistMatch with this data.
     */
    create: XOR<TherapistMatchCreateInput, TherapistMatchUncheckedCreateInput>
    /**
     * In case the TherapistMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapistMatchUpdateInput, TherapistMatchUncheckedUpdateInput>
  }

  /**
   * TherapistMatch delete
   */
  export type TherapistMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
    /**
     * Filter which TherapistMatch to delete.
     */
    where: TherapistMatchWhereUniqueInput
  }

  /**
   * TherapistMatch deleteMany
   */
  export type TherapistMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistMatches to delete
     */
    where?: TherapistMatchWhereInput
  }

  /**
   * TherapistMatch without action
   */
  export type TherapistMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistMatch
     */
    select?: TherapistMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistMatchInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    price: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    price: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    therapistId: string | null
    startTime: Date | null
    endTime: Date | null
    status: string | null
    notes: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    therapistId: string | null
    startTime: Date | null
    endTime: Date | null
    status: string | null
    notes: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    clientId: number
    therapistId: number
    startTime: number
    endTime: number
    status: number
    notes: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    price?: true
  }

  export type AppointmentSumAggregateInputType = {
    price?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    clientId?: true
    therapistId?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    clientId?: true
    therapistId?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    clientId?: true
    therapistId?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    clientId: string
    therapistId: string
    startTime: Date
    endTime: Date
    status: string
    notes: string | null
    price: number | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    therapistId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    therapistId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    clientId?: boolean
    therapistId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      therapist: Prisma.$TherapistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      therapistId: string
      startTime: Date
      endTime: Date
      status: string
      notes: string | null
      price: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */ 
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly clientId: FieldRef<"Appointment", 'String'>
    readonly therapistId: FieldRef<"Appointment", 'String'>
    readonly startTime: FieldRef<"Appointment", 'DateTime'>
    readonly endTime: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'String'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly price: FieldRef<"Appointment", 'Int'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    therapistId: string | null
    rating: number | null
    comment: string | null
    isAnonymous: boolean | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    therapistId: string | null
    rating: number | null
    comment: string | null
    isAnonymous: boolean | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    clientId: number
    therapistId: number
    rating: number
    comment: number
    isAnonymous: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    clientId?: true
    therapistId?: true
    rating?: true
    comment?: true
    isAnonymous?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    clientId?: true
    therapistId?: true
    rating?: true
    comment?: true
    isAnonymous?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    clientId?: true
    therapistId?: true
    rating?: true
    comment?: true
    isAnonymous?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    clientId: string
    therapistId: string
    rating: number
    comment: string | null
    isAnonymous: boolean
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    therapistId?: boolean
    rating?: boolean
    comment?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    therapistId?: boolean
    rating?: boolean
    comment?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    clientId?: boolean
    therapistId?: boolean
    rating?: boolean
    comment?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      therapist: Prisma.$TherapistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      therapistId: string
      rating: number
      comment: string | null
      isAnonymous: boolean
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly clientId: FieldRef<"Review", 'String'>
    readonly therapistId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly isAnonymous: FieldRef<"Review", 'Boolean'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    excerpt: string | null
    coverImage: string | null
    authorId: string | null
    status: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    excerpt: string | null
    coverImage: string | null
    authorId: string | null
    status: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    excerpt: number
    coverImage: number
    authorId: number
    status: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    coverImage?: true
    authorId?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    coverImage?: true
    authorId?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    coverImage?: true
    authorId?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string | null
    excerpt: string | null
    coverImage: string | null
    authorId: string | null
    status: string
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    coverImage?: boolean
    authorId?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | BlogPost$authorArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    coverImage?: boolean
    authorId?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | BlogPost$authorArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    coverImage?: boolean
    authorId?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | BlogPost$authorArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | BlogPost$authorArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string | null
      excerpt: string | null
      coverImage: string | null
      authorId: string | null
      status: string
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends BlogPost$authorArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */ 
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly excerpt: FieldRef<"BlogPost", 'String'>
    readonly coverImage: FieldRef<"BlogPost", 'String'>
    readonly authorId: FieldRef<"BlogPost", 'String'>
    readonly status: FieldRef<"BlogPost", 'String'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
  }

  /**
   * BlogPost.author
   */
  export type BlogPost$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type BannerSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    imageUrl: string | null
    linkUrl: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    imageUrl: string | null
    linkUrl: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    imageUrl: number
    linkUrl: number
    sortOrder: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    sortOrder?: true
  }

  export type BannerSumAggregateInputType = {
    sortOrder?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    imageUrl?: true
    linkUrl?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    imageUrl?: true
    linkUrl?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    imageUrl?: true
    linkUrl?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: string
    title: string | null
    subtitle: string | null
    imageUrl: string | null
    linkUrl: string | null
    sortOrder: number
    isActive: boolean
    createdAt: Date
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }


  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      subtitle: string | null
      imageUrl: string | null
      linkUrl: string | null
      sortOrder: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Banner model
   */ 
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'String'>
    readonly title: FieldRef<"Banner", 'String'>
    readonly subtitle: FieldRef<"Banner", 'String'>
    readonly imageUrl: FieldRef<"Banner", 'String'>
    readonly linkUrl: FieldRef<"Banner", 'String'>
    readonly sortOrder: FieldRef<"Banner", 'Int'>
    readonly isActive: FieldRef<"Banner", 'Boolean'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data?: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
  }


  /**
   * Model SiteSetting
   */

  export type AggregateSiteSetting = {
    _count: SiteSettingCountAggregateOutputType | null
    _min: SiteSettingMinAggregateOutputType | null
    _max: SiteSettingMaxAggregateOutputType | null
  }

  export type SiteSettingMinAggregateOutputType = {
    key: string | null
    updatedAt: Date | null
  }

  export type SiteSettingMaxAggregateOutputType = {
    key: string | null
    updatedAt: Date | null
  }

  export type SiteSettingCountAggregateOutputType = {
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SiteSettingMinAggregateInputType = {
    key?: true
    updatedAt?: true
  }

  export type SiteSettingMaxAggregateInputType = {
    key?: true
    updatedAt?: true
  }

  export type SiteSettingCountAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSetting to aggregate.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettings
    **/
    _count?: true | SiteSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingMaxAggregateInputType
  }

  export type GetSiteSettingAggregateType<T extends SiteSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSetting[P]>
      : GetScalarType<T[P], AggregateSiteSetting[P]>
  }




  export type SiteSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingWhereInput
    orderBy?: SiteSettingOrderByWithAggregationInput | SiteSettingOrderByWithAggregationInput[]
    by: SiteSettingScalarFieldEnum[] | SiteSettingScalarFieldEnum
    having?: SiteSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingCountAggregateInputType | true
    _min?: SiteSettingMinAggregateInputType
    _max?: SiteSettingMaxAggregateInputType
  }

  export type SiteSettingGroupByOutputType = {
    key: string
    value: JsonValue
    updatedAt: Date
    _count: SiteSettingCountAggregateOutputType | null
    _min: SiteSettingMinAggregateOutputType | null
    _max: SiteSettingMaxAggregateOutputType | null
  }

  type GetSiteSettingGroupByPayload<T extends SiteSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSetting"]>

  export type SiteSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSetting"]>

  export type SiteSettingSelectScalar = {
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }


  export type $SiteSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: Prisma.JsonValue
      updatedAt: Date
    }, ExtArgs["result"]["siteSetting"]>
    composites: {}
  }

  type SiteSettingGetPayload<S extends boolean | null | undefined | SiteSettingDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingPayload, S>

  type SiteSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SiteSettingCountAggregateInputType | true
    }

  export interface SiteSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSetting'], meta: { name: 'SiteSetting' } }
    /**
     * Find zero or one SiteSetting that matches the filter.
     * @param {SiteSettingFindUniqueArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingFindUniqueArgs>(args: SelectSubset<T, SiteSettingFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SiteSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SiteSettingFindUniqueOrThrowArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SiteSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindFirstArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingFindFirstArgs>(args?: SelectSubset<T, SiteSettingFindFirstArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SiteSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindFirstOrThrowArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettings
     * const siteSettings = await prisma.siteSetting.findMany()
     * 
     * // Get first 10 SiteSettings
     * const siteSettings = await prisma.siteSetting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const siteSettingWithKeyOnly = await prisma.siteSetting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SiteSettingFindManyArgs>(args?: SelectSubset<T, SiteSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SiteSetting.
     * @param {SiteSettingCreateArgs} args - Arguments to create a SiteSetting.
     * @example
     * // Create one SiteSetting
     * const SiteSetting = await prisma.siteSetting.create({
     *   data: {
     *     // ... data to create a SiteSetting
     *   }
     * })
     * 
     */
    create<T extends SiteSettingCreateArgs>(args: SelectSubset<T, SiteSettingCreateArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SiteSettings.
     * @param {SiteSettingCreateManyArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSetting = await prisma.siteSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingCreateManyArgs>(args?: SelectSubset<T, SiteSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteSettings and returns the data saved in the database.
     * @param {SiteSettingCreateManyAndReturnArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSetting = await prisma.siteSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteSettings and only return the `key`
     * const siteSettingWithKeyOnly = await prisma.siteSetting.createManyAndReturn({ 
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SiteSetting.
     * @param {SiteSettingDeleteArgs} args - Arguments to delete one SiteSetting.
     * @example
     * // Delete one SiteSetting
     * const SiteSetting = await prisma.siteSetting.delete({
     *   where: {
     *     // ... filter to delete one SiteSetting
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingDeleteArgs>(args: SelectSubset<T, SiteSettingDeleteArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SiteSetting.
     * @param {SiteSettingUpdateArgs} args - Arguments to update one SiteSetting.
     * @example
     * // Update one SiteSetting
     * const siteSetting = await prisma.siteSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingUpdateArgs>(args: SelectSubset<T, SiteSettingUpdateArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SiteSettings.
     * @param {SiteSettingDeleteManyArgs} args - Arguments to filter SiteSettings to delete.
     * @example
     * // Delete a few SiteSettings
     * const { count } = await prisma.siteSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingDeleteManyArgs>(args?: SelectSubset<T, SiteSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettings
     * const siteSetting = await prisma.siteSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingUpdateManyArgs>(args: SelectSubset<T, SiteSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteSetting.
     * @param {SiteSettingUpsertArgs} args - Arguments to update or create a SiteSetting.
     * @example
     * // Update or create a SiteSetting
     * const siteSetting = await prisma.siteSetting.upsert({
     *   create: {
     *     // ... data to create a SiteSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSetting we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingUpsertArgs>(args: SelectSubset<T, SiteSettingUpsertArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingCountArgs} args - Arguments to filter SiteSettings to count.
     * @example
     * // Count the number of SiteSettings
     * const count = await prisma.siteSetting.count({
     *   where: {
     *     // ... the filter for the SiteSettings we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingCountArgs>(
      args?: Subset<T, SiteSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteSettingAggregateArgs>(args: Subset<T, SiteSettingAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingAggregateType<T>>

    /**
     * Group by SiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSetting model
   */
  readonly fields: SiteSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteSetting model
   */ 
  interface SiteSettingFieldRefs {
    readonly key: FieldRef<"SiteSetting", 'String'>
    readonly value: FieldRef<"SiteSetting", 'Json'>
    readonly updatedAt: FieldRef<"SiteSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSetting findUnique
   */
  export type SiteSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting findUniqueOrThrow
   */
  export type SiteSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting findFirst
   */
  export type SiteSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting findFirstOrThrow
   */
  export type SiteSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting findMany
   */
  export type SiteSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting create
   */
  export type SiteSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * The data needed to create a SiteSetting.
     */
    data: XOR<SiteSettingCreateInput, SiteSettingUncheckedCreateInput>
  }

  /**
   * SiteSetting createMany
   */
  export type SiteSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingCreateManyInput | SiteSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteSetting createManyAndReturn
   */
  export type SiteSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingCreateManyInput | SiteSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteSetting update
   */
  export type SiteSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * The data needed to update a SiteSetting.
     */
    data: XOR<SiteSettingUpdateInput, SiteSettingUncheckedUpdateInput>
    /**
     * Choose, which SiteSetting to update.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting updateMany
   */
  export type SiteSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingUpdateManyMutationInput, SiteSettingUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingWhereInput
  }

  /**
   * SiteSetting upsert
   */
  export type SiteSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * The filter to search for the SiteSetting to update in case it exists.
     */
    where: SiteSettingWhereUniqueInput
    /**
     * In case the SiteSetting found by the `where` argument doesn't exist, create a new SiteSetting with this data.
     */
    create: XOR<SiteSettingCreateInput, SiteSettingUncheckedCreateInput>
    /**
     * In case the SiteSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingUpdateInput, SiteSettingUncheckedUpdateInput>
  }

  /**
   * SiteSetting delete
   */
  export type SiteSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter which SiteSetting to delete.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting deleteMany
   */
  export type SiteSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to delete
     */
    where?: SiteSettingWhereInput
  }

  /**
   * SiteSetting without action
   */
  export type SiteSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TherapistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    about: 'about',
    experienceYears: 'experienceYears',
    sessionPrice: 'sessionPrice',
    isVerified: 'isVerified',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TherapistScalarFieldEnum = (typeof TherapistScalarFieldEnum)[keyof typeof TherapistScalarFieldEnum]


  export const TherapistSpecialtyScalarFieldEnum: {
    therapistId: 'therapistId',
    specialty: 'specialty'
  };

  export type TherapistSpecialtyScalarFieldEnum = (typeof TherapistSpecialtyScalarFieldEnum)[keyof typeof TherapistSpecialtyScalarFieldEnum]


  export const TherapistEducationScalarFieldEnum: {
    id: 'id',
    therapistId: 'therapistId',
    title: 'title',
    school: 'school',
    year: 'year',
    createdAt: 'createdAt'
  };

  export type TherapistEducationScalarFieldEnum = (typeof TherapistEducationScalarFieldEnum)[keyof typeof TherapistEducationScalarFieldEnum]


  export const TherapistCertificateScalarFieldEnum: {
    id: 'id',
    therapistId: 'therapistId',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TherapistCertificateScalarFieldEnum = (typeof TherapistCertificateScalarFieldEnum)[keyof typeof TherapistCertificateScalarFieldEnum]


  export const TestQuestionScalarFieldEnum: {
    id: 'id',
    questionText: 'questionText',
    dimension: 'dimension',
    sortOrder: 'sortOrder',
    isActive: 'isActive'
  };

  export type TestQuestionScalarFieldEnum = (typeof TestQuestionScalarFieldEnum)[keyof typeof TestQuestionScalarFieldEnum]


  export const TestAnswerScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    answerText: 'answerText',
    sortOrder: 'sortOrder'
  };

  export type TestAnswerScalarFieldEnum = (typeof TestAnswerScalarFieldEnum)[keyof typeof TestAnswerScalarFieldEnum]


  export const ClientTestResultScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    answers: 'answers',
    preferences: 'preferences',
    createdAt: 'createdAt'
  };

  export type ClientTestResultScalarFieldEnum = (typeof ClientTestResultScalarFieldEnum)[keyof typeof ClientTestResultScalarFieldEnum]


  export const TherapistMatchScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    therapistId: 'therapistId',
    matchScore: 'matchScore',
    createdAt: 'createdAt'
  };

  export type TherapistMatchScalarFieldEnum = (typeof TherapistMatchScalarFieldEnum)[keyof typeof TherapistMatchScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    therapistId: 'therapistId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    notes: 'notes',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    therapistId: 'therapistId',
    rating: 'rating',
    comment: 'comment',
    isAnonymous: 'isAnonymous',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    excerpt: 'excerpt',
    coverImage: 'coverImage',
    authorId: 'authorId',
    status: 'status',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    imageUrl: 'imageUrl',
    linkUrl: 'linkUrl',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const SiteSettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SiteSettingScalarFieldEnum = (typeof SiteSettingScalarFieldEnum)[keyof typeof SiteSettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    therapist?: XOR<TherapistNullableRelationFilter, TherapistWhereInput> | null
    testResults?: ClientTestResultListRelationFilter
    matches?: TherapistMatchListRelationFilter
    appointments?: AppointmentListRelationFilter
    reviews?: ReviewListRelationFilter
    blogPosts?: BlogPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapist?: TherapistOrderByWithRelationInput
    testResults?: ClientTestResultOrderByRelationAggregateInput
    matches?: TherapistMatchOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    blogPosts?: BlogPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    therapist?: XOR<TherapistNullableRelationFilter, TherapistWhereInput> | null
    testResults?: ClientTestResultListRelationFilter
    matches?: TherapistMatchListRelationFilter
    appointments?: AppointmentListRelationFilter
    reviews?: ReviewListRelationFilter
    blogPosts?: BlogPostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TherapistWhereInput = {
    AND?: TherapistWhereInput | TherapistWhereInput[]
    OR?: TherapistWhereInput[]
    NOT?: TherapistWhereInput | TherapistWhereInput[]
    id?: UuidFilter<"Therapist"> | string
    userId?: UuidFilter<"Therapist"> | string
    title?: StringNullableFilter<"Therapist"> | string | null
    about?: StringNullableFilter<"Therapist"> | string | null
    experienceYears?: IntFilter<"Therapist"> | number
    sessionPrice?: IntFilter<"Therapist"> | number
    isVerified?: BoolFilter<"Therapist"> | boolean
    isActive?: BoolFilter<"Therapist"> | boolean
    createdAt?: DateTimeFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeFilter<"Therapist"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    specialties?: TherapistSpecialtyListRelationFilter
    educations?: TherapistEducationListRelationFilter
    certificates?: TherapistCertificateListRelationFilter
    matches?: TherapistMatchListRelationFilter
    appointments?: AppointmentListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type TherapistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    experienceYears?: SortOrder
    sessionPrice?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    specialties?: TherapistSpecialtyOrderByRelationAggregateInput
    educations?: TherapistEducationOrderByRelationAggregateInput
    certificates?: TherapistCertificateOrderByRelationAggregateInput
    matches?: TherapistMatchOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type TherapistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TherapistWhereInput | TherapistWhereInput[]
    OR?: TherapistWhereInput[]
    NOT?: TherapistWhereInput | TherapistWhereInput[]
    title?: StringNullableFilter<"Therapist"> | string | null
    about?: StringNullableFilter<"Therapist"> | string | null
    experienceYears?: IntFilter<"Therapist"> | number
    sessionPrice?: IntFilter<"Therapist"> | number
    isVerified?: BoolFilter<"Therapist"> | boolean
    isActive?: BoolFilter<"Therapist"> | boolean
    createdAt?: DateTimeFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeFilter<"Therapist"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    specialties?: TherapistSpecialtyListRelationFilter
    educations?: TherapistEducationListRelationFilter
    certificates?: TherapistCertificateListRelationFilter
    matches?: TherapistMatchListRelationFilter
    appointments?: AppointmentListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "userId">

  export type TherapistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    experienceYears?: SortOrder
    sessionPrice?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TherapistCountOrderByAggregateInput
    _avg?: TherapistAvgOrderByAggregateInput
    _max?: TherapistMaxOrderByAggregateInput
    _min?: TherapistMinOrderByAggregateInput
    _sum?: TherapistSumOrderByAggregateInput
  }

  export type TherapistScalarWhereWithAggregatesInput = {
    AND?: TherapistScalarWhereWithAggregatesInput | TherapistScalarWhereWithAggregatesInput[]
    OR?: TherapistScalarWhereWithAggregatesInput[]
    NOT?: TherapistScalarWhereWithAggregatesInput | TherapistScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Therapist"> | string
    userId?: UuidWithAggregatesFilter<"Therapist"> | string
    title?: StringNullableWithAggregatesFilter<"Therapist"> | string | null
    about?: StringNullableWithAggregatesFilter<"Therapist"> | string | null
    experienceYears?: IntWithAggregatesFilter<"Therapist"> | number
    sessionPrice?: IntWithAggregatesFilter<"Therapist"> | number
    isVerified?: BoolWithAggregatesFilter<"Therapist"> | boolean
    isActive?: BoolWithAggregatesFilter<"Therapist"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Therapist"> | Date | string
  }

  export type TherapistSpecialtyWhereInput = {
    AND?: TherapistSpecialtyWhereInput | TherapistSpecialtyWhereInput[]
    OR?: TherapistSpecialtyWhereInput[]
    NOT?: TherapistSpecialtyWhereInput | TherapistSpecialtyWhereInput[]
    therapistId?: UuidFilter<"TherapistSpecialty"> | string
    specialty?: StringFilter<"TherapistSpecialty"> | string
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }

  export type TherapistSpecialtyOrderByWithRelationInput = {
    therapistId?: SortOrder
    specialty?: SortOrder
    therapist?: TherapistOrderByWithRelationInput
  }

  export type TherapistSpecialtyWhereUniqueInput = Prisma.AtLeast<{
    therapistId_specialty?: TherapistSpecialtyTherapistIdSpecialtyCompoundUniqueInput
    AND?: TherapistSpecialtyWhereInput | TherapistSpecialtyWhereInput[]
    OR?: TherapistSpecialtyWhereInput[]
    NOT?: TherapistSpecialtyWhereInput | TherapistSpecialtyWhereInput[]
    therapistId?: UuidFilter<"TherapistSpecialty"> | string
    specialty?: StringFilter<"TherapistSpecialty"> | string
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }, "therapistId_specialty">

  export type TherapistSpecialtyOrderByWithAggregationInput = {
    therapistId?: SortOrder
    specialty?: SortOrder
    _count?: TherapistSpecialtyCountOrderByAggregateInput
    _max?: TherapistSpecialtyMaxOrderByAggregateInput
    _min?: TherapistSpecialtyMinOrderByAggregateInput
  }

  export type TherapistSpecialtyScalarWhereWithAggregatesInput = {
    AND?: TherapistSpecialtyScalarWhereWithAggregatesInput | TherapistSpecialtyScalarWhereWithAggregatesInput[]
    OR?: TherapistSpecialtyScalarWhereWithAggregatesInput[]
    NOT?: TherapistSpecialtyScalarWhereWithAggregatesInput | TherapistSpecialtyScalarWhereWithAggregatesInput[]
    therapistId?: UuidWithAggregatesFilter<"TherapistSpecialty"> | string
    specialty?: StringWithAggregatesFilter<"TherapistSpecialty"> | string
  }

  export type TherapistEducationWhereInput = {
    AND?: TherapistEducationWhereInput | TherapistEducationWhereInput[]
    OR?: TherapistEducationWhereInput[]
    NOT?: TherapistEducationWhereInput | TherapistEducationWhereInput[]
    id?: UuidFilter<"TherapistEducation"> | string
    therapistId?: UuidFilter<"TherapistEducation"> | string
    title?: StringFilter<"TherapistEducation"> | string
    school?: StringNullableFilter<"TherapistEducation"> | string | null
    year?: IntNullableFilter<"TherapistEducation"> | number | null
    createdAt?: DateTimeFilter<"TherapistEducation"> | Date | string
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }

  export type TherapistEducationOrderByWithRelationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    title?: SortOrder
    school?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    therapist?: TherapistOrderByWithRelationInput
  }

  export type TherapistEducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TherapistEducationWhereInput | TherapistEducationWhereInput[]
    OR?: TherapistEducationWhereInput[]
    NOT?: TherapistEducationWhereInput | TherapistEducationWhereInput[]
    therapistId?: UuidFilter<"TherapistEducation"> | string
    title?: StringFilter<"TherapistEducation"> | string
    school?: StringNullableFilter<"TherapistEducation"> | string | null
    year?: IntNullableFilter<"TherapistEducation"> | number | null
    createdAt?: DateTimeFilter<"TherapistEducation"> | Date | string
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }, "id">

  export type TherapistEducationOrderByWithAggregationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    title?: SortOrder
    school?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TherapistEducationCountOrderByAggregateInput
    _avg?: TherapistEducationAvgOrderByAggregateInput
    _max?: TherapistEducationMaxOrderByAggregateInput
    _min?: TherapistEducationMinOrderByAggregateInput
    _sum?: TherapistEducationSumOrderByAggregateInput
  }

  export type TherapistEducationScalarWhereWithAggregatesInput = {
    AND?: TherapistEducationScalarWhereWithAggregatesInput | TherapistEducationScalarWhereWithAggregatesInput[]
    OR?: TherapistEducationScalarWhereWithAggregatesInput[]
    NOT?: TherapistEducationScalarWhereWithAggregatesInput | TherapistEducationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TherapistEducation"> | string
    therapistId?: UuidWithAggregatesFilter<"TherapistEducation"> | string
    title?: StringWithAggregatesFilter<"TherapistEducation"> | string
    school?: StringNullableWithAggregatesFilter<"TherapistEducation"> | string | null
    year?: IntNullableWithAggregatesFilter<"TherapistEducation"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TherapistEducation"> | Date | string
  }

  export type TherapistCertificateWhereInput = {
    AND?: TherapistCertificateWhereInput | TherapistCertificateWhereInput[]
    OR?: TherapistCertificateWhereInput[]
    NOT?: TherapistCertificateWhereInput | TherapistCertificateWhereInput[]
    id?: UuidFilter<"TherapistCertificate"> | string
    therapistId?: UuidFilter<"TherapistCertificate"> | string
    fileUrl?: StringFilter<"TherapistCertificate"> | string
    fileName?: StringNullableFilter<"TherapistCertificate"> | string | null
    status?: StringFilter<"TherapistCertificate"> | string
    createdAt?: DateTimeFilter<"TherapistCertificate"> | Date | string
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }

  export type TherapistCertificateOrderByWithRelationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    therapist?: TherapistOrderByWithRelationInput
  }

  export type TherapistCertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TherapistCertificateWhereInput | TherapistCertificateWhereInput[]
    OR?: TherapistCertificateWhereInput[]
    NOT?: TherapistCertificateWhereInput | TherapistCertificateWhereInput[]
    therapistId?: UuidFilter<"TherapistCertificate"> | string
    fileUrl?: StringFilter<"TherapistCertificate"> | string
    fileName?: StringNullableFilter<"TherapistCertificate"> | string | null
    status?: StringFilter<"TherapistCertificate"> | string
    createdAt?: DateTimeFilter<"TherapistCertificate"> | Date | string
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }, "id">

  export type TherapistCertificateOrderByWithAggregationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TherapistCertificateCountOrderByAggregateInput
    _max?: TherapistCertificateMaxOrderByAggregateInput
    _min?: TherapistCertificateMinOrderByAggregateInput
  }

  export type TherapistCertificateScalarWhereWithAggregatesInput = {
    AND?: TherapistCertificateScalarWhereWithAggregatesInput | TherapistCertificateScalarWhereWithAggregatesInput[]
    OR?: TherapistCertificateScalarWhereWithAggregatesInput[]
    NOT?: TherapistCertificateScalarWhereWithAggregatesInput | TherapistCertificateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TherapistCertificate"> | string
    therapistId?: UuidWithAggregatesFilter<"TherapistCertificate"> | string
    fileUrl?: StringWithAggregatesFilter<"TherapistCertificate"> | string
    fileName?: StringNullableWithAggregatesFilter<"TherapistCertificate"> | string | null
    status?: StringWithAggregatesFilter<"TherapistCertificate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TherapistCertificate"> | Date | string
  }

  export type TestQuestionWhereInput = {
    AND?: TestQuestionWhereInput | TestQuestionWhereInput[]
    OR?: TestQuestionWhereInput[]
    NOT?: TestQuestionWhereInput | TestQuestionWhereInput[]
    id?: UuidFilter<"TestQuestion"> | string
    questionText?: StringFilter<"TestQuestion"> | string
    dimension?: StringNullableFilter<"TestQuestion"> | string | null
    sortOrder?: IntFilter<"TestQuestion"> | number
    isActive?: BoolFilter<"TestQuestion"> | boolean
    answers?: TestAnswerListRelationFilter
  }

  export type TestQuestionOrderByWithRelationInput = {
    id?: SortOrder
    questionText?: SortOrder
    dimension?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    answers?: TestAnswerOrderByRelationAggregateInput
  }

  export type TestQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestQuestionWhereInput | TestQuestionWhereInput[]
    OR?: TestQuestionWhereInput[]
    NOT?: TestQuestionWhereInput | TestQuestionWhereInput[]
    questionText?: StringFilter<"TestQuestion"> | string
    dimension?: StringNullableFilter<"TestQuestion"> | string | null
    sortOrder?: IntFilter<"TestQuestion"> | number
    isActive?: BoolFilter<"TestQuestion"> | boolean
    answers?: TestAnswerListRelationFilter
  }, "id">

  export type TestQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    questionText?: SortOrder
    dimension?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    _count?: TestQuestionCountOrderByAggregateInput
    _avg?: TestQuestionAvgOrderByAggregateInput
    _max?: TestQuestionMaxOrderByAggregateInput
    _min?: TestQuestionMinOrderByAggregateInput
    _sum?: TestQuestionSumOrderByAggregateInput
  }

  export type TestQuestionScalarWhereWithAggregatesInput = {
    AND?: TestQuestionScalarWhereWithAggregatesInput | TestQuestionScalarWhereWithAggregatesInput[]
    OR?: TestQuestionScalarWhereWithAggregatesInput[]
    NOT?: TestQuestionScalarWhereWithAggregatesInput | TestQuestionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TestQuestion"> | string
    questionText?: StringWithAggregatesFilter<"TestQuestion"> | string
    dimension?: StringNullableWithAggregatesFilter<"TestQuestion"> | string | null
    sortOrder?: IntWithAggregatesFilter<"TestQuestion"> | number
    isActive?: BoolWithAggregatesFilter<"TestQuestion"> | boolean
  }

  export type TestAnswerWhereInput = {
    AND?: TestAnswerWhereInput | TestAnswerWhereInput[]
    OR?: TestAnswerWhereInput[]
    NOT?: TestAnswerWhereInput | TestAnswerWhereInput[]
    id?: UuidFilter<"TestAnswer"> | string
    questionId?: UuidFilter<"TestAnswer"> | string
    answerText?: StringFilter<"TestAnswer"> | string
    sortOrder?: IntFilter<"TestAnswer"> | number
    question?: XOR<TestQuestionRelationFilter, TestQuestionWhereInput>
  }

  export type TestAnswerOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    sortOrder?: SortOrder
    question?: TestQuestionOrderByWithRelationInput
  }

  export type TestAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestAnswerWhereInput | TestAnswerWhereInput[]
    OR?: TestAnswerWhereInput[]
    NOT?: TestAnswerWhereInput | TestAnswerWhereInput[]
    questionId?: UuidFilter<"TestAnswer"> | string
    answerText?: StringFilter<"TestAnswer"> | string
    sortOrder?: IntFilter<"TestAnswer"> | number
    question?: XOR<TestQuestionRelationFilter, TestQuestionWhereInput>
  }, "id">

  export type TestAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    sortOrder?: SortOrder
    _count?: TestAnswerCountOrderByAggregateInput
    _avg?: TestAnswerAvgOrderByAggregateInput
    _max?: TestAnswerMaxOrderByAggregateInput
    _min?: TestAnswerMinOrderByAggregateInput
    _sum?: TestAnswerSumOrderByAggregateInput
  }

  export type TestAnswerScalarWhereWithAggregatesInput = {
    AND?: TestAnswerScalarWhereWithAggregatesInput | TestAnswerScalarWhereWithAggregatesInput[]
    OR?: TestAnswerScalarWhereWithAggregatesInput[]
    NOT?: TestAnswerScalarWhereWithAggregatesInput | TestAnswerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TestAnswer"> | string
    questionId?: UuidWithAggregatesFilter<"TestAnswer"> | string
    answerText?: StringWithAggregatesFilter<"TestAnswer"> | string
    sortOrder?: IntWithAggregatesFilter<"TestAnswer"> | number
  }

  export type ClientTestResultWhereInput = {
    AND?: ClientTestResultWhereInput | ClientTestResultWhereInput[]
    OR?: ClientTestResultWhereInput[]
    NOT?: ClientTestResultWhereInput | ClientTestResultWhereInput[]
    id?: UuidFilter<"ClientTestResult"> | string
    userId?: UuidFilter<"ClientTestResult"> | string
    answers?: JsonFilter<"ClientTestResult">
    preferences?: JsonNullableFilter<"ClientTestResult">
    createdAt?: DateTimeFilter<"ClientTestResult"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ClientTestResultOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    preferences?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ClientTestResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientTestResultWhereInput | ClientTestResultWhereInput[]
    OR?: ClientTestResultWhereInput[]
    NOT?: ClientTestResultWhereInput | ClientTestResultWhereInput[]
    userId?: UuidFilter<"ClientTestResult"> | string
    answers?: JsonFilter<"ClientTestResult">
    preferences?: JsonNullableFilter<"ClientTestResult">
    createdAt?: DateTimeFilter<"ClientTestResult"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ClientTestResultOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    preferences?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ClientTestResultCountOrderByAggregateInput
    _max?: ClientTestResultMaxOrderByAggregateInput
    _min?: ClientTestResultMinOrderByAggregateInput
  }

  export type ClientTestResultScalarWhereWithAggregatesInput = {
    AND?: ClientTestResultScalarWhereWithAggregatesInput | ClientTestResultScalarWhereWithAggregatesInput[]
    OR?: ClientTestResultScalarWhereWithAggregatesInput[]
    NOT?: ClientTestResultScalarWhereWithAggregatesInput | ClientTestResultScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ClientTestResult"> | string
    userId?: UuidWithAggregatesFilter<"ClientTestResult"> | string
    answers?: JsonWithAggregatesFilter<"ClientTestResult">
    preferences?: JsonNullableWithAggregatesFilter<"ClientTestResult">
    createdAt?: DateTimeWithAggregatesFilter<"ClientTestResult"> | Date | string
  }

  export type TherapistMatchWhereInput = {
    AND?: TherapistMatchWhereInput | TherapistMatchWhereInput[]
    OR?: TherapistMatchWhereInput[]
    NOT?: TherapistMatchWhereInput | TherapistMatchWhereInput[]
    id?: UuidFilter<"TherapistMatch"> | string
    userId?: UuidFilter<"TherapistMatch"> | string
    therapistId?: UuidFilter<"TherapistMatch"> | string
    matchScore?: IntFilter<"TherapistMatch"> | number
    createdAt?: DateTimeFilter<"TherapistMatch"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }

  export type TherapistMatchOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    matchScore?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    therapist?: TherapistOrderByWithRelationInput
  }

  export type TherapistMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_therapistId?: TherapistMatchUserIdTherapistIdCompoundUniqueInput
    AND?: TherapistMatchWhereInput | TherapistMatchWhereInput[]
    OR?: TherapistMatchWhereInput[]
    NOT?: TherapistMatchWhereInput | TherapistMatchWhereInput[]
    userId?: UuidFilter<"TherapistMatch"> | string
    therapistId?: UuidFilter<"TherapistMatch"> | string
    matchScore?: IntFilter<"TherapistMatch"> | number
    createdAt?: DateTimeFilter<"TherapistMatch"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }, "id" | "userId_therapistId">

  export type TherapistMatchOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    matchScore?: SortOrder
    createdAt?: SortOrder
    _count?: TherapistMatchCountOrderByAggregateInput
    _avg?: TherapistMatchAvgOrderByAggregateInput
    _max?: TherapistMatchMaxOrderByAggregateInput
    _min?: TherapistMatchMinOrderByAggregateInput
    _sum?: TherapistMatchSumOrderByAggregateInput
  }

  export type TherapistMatchScalarWhereWithAggregatesInput = {
    AND?: TherapistMatchScalarWhereWithAggregatesInput | TherapistMatchScalarWhereWithAggregatesInput[]
    OR?: TherapistMatchScalarWhereWithAggregatesInput[]
    NOT?: TherapistMatchScalarWhereWithAggregatesInput | TherapistMatchScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TherapistMatch"> | string
    userId?: UuidWithAggregatesFilter<"TherapistMatch"> | string
    therapistId?: UuidWithAggregatesFilter<"TherapistMatch"> | string
    matchScore?: IntWithAggregatesFilter<"TherapistMatch"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TherapistMatch"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: UuidFilter<"Appointment"> | string
    clientId?: UuidFilter<"Appointment"> | string
    therapistId?: UuidFilter<"Appointment"> | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringFilter<"Appointment"> | string
    notes?: StringNullableFilter<"Appointment"> | string | null
    price?: IntNullableFilter<"Appointment"> | number | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    client?: XOR<UserRelationFilter, UserWhereInput>
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    therapistId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: UserOrderByWithRelationInput
    therapist?: TherapistOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    clientId?: UuidFilter<"Appointment"> | string
    therapistId?: UuidFilter<"Appointment"> | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringFilter<"Appointment"> | string
    notes?: StringNullableFilter<"Appointment"> | string | null
    price?: IntNullableFilter<"Appointment"> | number | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    client?: XOR<UserRelationFilter, UserWhereInput>
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    therapistId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Appointment"> | string
    clientId?: UuidWithAggregatesFilter<"Appointment"> | string
    therapistId?: UuidWithAggregatesFilter<"Appointment"> | string
    startTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: StringWithAggregatesFilter<"Appointment"> | string
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    price?: IntNullableWithAggregatesFilter<"Appointment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: UuidFilter<"Review"> | string
    clientId?: UuidFilter<"Review"> | string
    therapistId?: UuidFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    isAnonymous?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    client?: XOR<UserRelationFilter, UserWhereInput>
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    therapistId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    client?: UserOrderByWithRelationInput
    therapist?: TherapistOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId_therapistId?: ReviewClientIdTherapistIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    clientId?: UuidFilter<"Review"> | string
    therapistId?: UuidFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    isAnonymous?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    client?: XOR<UserRelationFilter, UserWhereInput>
    therapist?: XOR<TherapistRelationFilter, TherapistWhereInput>
  }, "id" | "clientId_therapistId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    therapistId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Review"> | string
    clientId?: UuidWithAggregatesFilter<"Review"> | string
    therapistId?: UuidWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    isAnonymous?: BoolWithAggregatesFilter<"Review"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: UuidFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    content?: StringNullableFilter<"BlogPost"> | string | null
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    authorId?: UuidNullableFilter<"BlogPost"> | string | null
    status?: StringFilter<"BlogPost"> | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    title?: StringFilter<"BlogPost"> | string
    content?: StringNullableFilter<"BlogPost"> | string | null
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    authorId?: UuidNullableFilter<"BlogPost"> | string | null
    status?: StringFilter<"BlogPost"> | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    content?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    excerpt?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    authorId?: UuidNullableWithAggregatesFilter<"BlogPost"> | string | null
    status?: StringWithAggregatesFilter<"BlogPost"> | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: UuidFilter<"Banner"> | string
    title?: StringNullableFilter<"Banner"> | string | null
    subtitle?: StringNullableFilter<"Banner"> | string | null
    imageUrl?: StringNullableFilter<"Banner"> | string | null
    linkUrl?: StringNullableFilter<"Banner"> | string | null
    sortOrder?: IntFilter<"Banner"> | number
    isActive?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    subtitle?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    title?: StringNullableFilter<"Banner"> | string | null
    subtitle?: StringNullableFilter<"Banner"> | string | null
    imageUrl?: StringNullableFilter<"Banner"> | string | null
    linkUrl?: StringNullableFilter<"Banner"> | string | null
    sortOrder?: IntFilter<"Banner"> | number
    isActive?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    subtitle?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Banner"> | string
    title?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    subtitle?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    linkUrl?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Banner"> | number
    isActive?: BoolWithAggregatesFilter<"Banner"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
  }

  export type SiteSettingWhereInput = {
    AND?: SiteSettingWhereInput | SiteSettingWhereInput[]
    OR?: SiteSettingWhereInput[]
    NOT?: SiteSettingWhereInput | SiteSettingWhereInput[]
    key?: StringFilter<"SiteSetting"> | string
    value?: JsonFilter<"SiteSetting">
    updatedAt?: DateTimeFilter<"SiteSetting"> | Date | string
  }

  export type SiteSettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SiteSettingWhereInput | SiteSettingWhereInput[]
    OR?: SiteSettingWhereInput[]
    NOT?: SiteSettingWhereInput | SiteSettingWhereInput[]
    value?: JsonFilter<"SiteSetting">
    updatedAt?: DateTimeFilter<"SiteSetting"> | Date | string
  }, "key">

  export type SiteSettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteSettingCountOrderByAggregateInput
    _max?: SiteSettingMaxOrderByAggregateInput
    _min?: SiteSettingMinOrderByAggregateInput
  }

  export type SiteSettingScalarWhereWithAggregatesInput = {
    AND?: SiteSettingScalarWhereWithAggregatesInput | SiteSettingScalarWhereWithAggregatesInput[]
    OR?: SiteSettingScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingScalarWhereWithAggregatesInput | SiteSettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"SiteSetting"> | string
    value?: JsonWithAggregatesFilter<"SiteSetting">
    updatedAt?: DateTimeWithAggregatesFilter<"SiteSetting"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistCreateNestedOneWithoutUserInput
    testResults?: ClientTestResultCreateNestedManyWithoutUserInput
    matches?: TherapistMatchCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutClientInput
    reviews?: ReviewCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistUncheckedCreateNestedOneWithoutUserInput
    testResults?: ClientTestResultUncheckedCreateNestedManyWithoutUserInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneWithoutUserNestedInput
    testResults?: ClientTestResultUpdateManyWithoutUserNestedInput
    matches?: TherapistMatchUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutClientNestedInput
    reviews?: ReviewUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUncheckedUpdateOneWithoutUserNestedInput
    testResults?: ClientTestResultUncheckedUpdateManyWithoutUserNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistCreateInput = {
    id?: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTherapistInput
    specialties?: TherapistSpecialtyCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentCreateNestedManyWithoutTherapistInput
    reviews?: ReviewCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialties?: TherapistSpecialtyUncheckedCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationUncheckedCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateUncheckedCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTherapistInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTherapistNestedInput
    specialties?: TherapistSpecialtyUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialties?: TherapistSpecialtyUncheckedUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUncheckedUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUncheckedUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistCreateManyInput = {
    id?: string
    userId: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistSpecialtyCreateInput = {
    specialty: string
    therapist: TherapistCreateNestedOneWithoutSpecialtiesInput
  }

  export type TherapistSpecialtyUncheckedCreateInput = {
    therapistId: string
    specialty: string
  }

  export type TherapistSpecialtyUpdateInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    therapist?: TherapistUpdateOneRequiredWithoutSpecialtiesNestedInput
  }

  export type TherapistSpecialtyUncheckedUpdateInput = {
    therapistId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type TherapistSpecialtyCreateManyInput = {
    therapistId: string
    specialty: string
  }

  export type TherapistSpecialtyUpdateManyMutationInput = {
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type TherapistSpecialtyUncheckedUpdateManyInput = {
    therapistId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type TherapistEducationCreateInput = {
    id?: string
    title: string
    school?: string | null
    year?: number | null
    createdAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutEducationsInput
  }

  export type TherapistEducationUncheckedCreateInput = {
    id?: string
    therapistId: string
    title: string
    school?: string | null
    year?: number | null
    createdAt?: Date | string
  }

  export type TherapistEducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutEducationsNestedInput
  }

  export type TherapistEducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistEducationCreateManyInput = {
    id?: string
    therapistId: string
    title: string
    school?: string | null
    year?: number | null
    createdAt?: Date | string
  }

  export type TherapistEducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistEducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistCertificateCreateInput = {
    id?: string
    fileUrl: string
    fileName?: string | null
    status?: string
    createdAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutCertificatesInput
  }

  export type TherapistCertificateUncheckedCreateInput = {
    id?: string
    therapistId: string
    fileUrl: string
    fileName?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TherapistCertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type TherapistCertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistCertificateCreateManyInput = {
    id?: string
    therapistId: string
    fileUrl: string
    fileName?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TherapistCertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistCertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestQuestionCreateInput = {
    id?: string
    questionText: string
    dimension?: string | null
    sortOrder?: number
    isActive?: boolean
    answers?: TestAnswerCreateNestedManyWithoutQuestionInput
  }

  export type TestQuestionUncheckedCreateInput = {
    id?: string
    questionText: string
    dimension?: string | null
    sortOrder?: number
    isActive?: boolean
    answers?: TestAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type TestQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    dimension?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    answers?: TestAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type TestQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    dimension?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    answers?: TestAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TestQuestionCreateManyInput = {
    id?: string
    questionText: string
    dimension?: string | null
    sortOrder?: number
    isActive?: boolean
  }

  export type TestQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    dimension?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TestQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    dimension?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TestAnswerCreateInput = {
    id?: string
    answerText: string
    sortOrder?: number
    question: TestQuestionCreateNestedOneWithoutAnswersInput
  }

  export type TestAnswerUncheckedCreateInput = {
    id?: string
    questionId: string
    answerText: string
    sortOrder?: number
  }

  export type TestAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    question?: TestQuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type TestAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type TestAnswerCreateManyInput = {
    id?: string
    questionId: string
    answerText: string
    sortOrder?: number
  }

  export type TestAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type TestAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ClientTestResultCreateInput = {
    id?: string
    answers: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTestResultsInput
  }

  export type ClientTestResultUncheckedCreateInput = {
    id?: string
    userId: string
    answers: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ClientTestResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestResultsNestedInput
  }

  export type ClientTestResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTestResultCreateManyInput = {
    id?: string
    userId: string
    answers: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ClientTestResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTestResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistMatchCreateInput = {
    id?: string
    matchScore?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMatchesInput
    therapist: TherapistCreateNestedOneWithoutMatchesInput
  }

  export type TherapistMatchUncheckedCreateInput = {
    id?: string
    userId: string
    therapistId: string
    matchScore?: number
    createdAt?: Date | string
  }

  export type TherapistMatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
    therapist?: TherapistUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type TherapistMatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistMatchCreateManyInput = {
    id?: string
    userId: string
    therapistId: string
    matchScore?: number
    createdAt?: Date | string
  }

  export type TherapistMatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistMatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: string
    notes?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutAppointmentsInput
    therapist: TherapistCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    clientId: string
    therapistId: string
    startTime: Date | string
    endTime: Date | string
    status?: string
    notes?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    therapist?: TherapistUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    clientId: string
    therapistId: string
    startTime: Date | string
    endTime: Date | string
    status?: string
    notes?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    isAnonymous?: boolean
    createdAt?: Date | string
    client: UserCreateNestedOneWithoutReviewsInput
    therapist: TherapistCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    clientId: string
    therapistId: string
    rating: number
    comment?: string | null
    isAnonymous?: boolean
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutReviewsNestedInput
    therapist?: TherapistUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    clientId: string
    therapistId: string
    rating: number
    comment?: string | null
    isAnonymous?: boolean
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    coverImage?: string | null
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutBlogPostsInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    coverImage?: string | null
    authorId?: string | null
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutBlogPostsNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateManyInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    coverImage?: string | null
    authorId?: string | null
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateInput = {
    id?: string
    title?: string | null
    subtitle?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    title?: string | null
    subtitle?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyInput = {
    id?: string
    title?: string | null
    subtitle?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingCreateInput = {
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type SiteSettingUncheckedCreateInput = {
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type SiteSettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingCreateManyInput = {
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type SiteSettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TherapistNullableRelationFilter = {
    is?: TherapistWhereInput | null
    isNot?: TherapistWhereInput | null
  }

  export type ClientTestResultListRelationFilter = {
    every?: ClientTestResultWhereInput
    some?: ClientTestResultWhereInput
    none?: ClientTestResultWhereInput
  }

  export type TherapistMatchListRelationFilter = {
    every?: TherapistMatchWhereInput
    some?: TherapistMatchWhereInput
    none?: TherapistMatchWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientTestResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TherapistMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TherapistSpecialtyListRelationFilter = {
    every?: TherapistSpecialtyWhereInput
    some?: TherapistSpecialtyWhereInput
    none?: TherapistSpecialtyWhereInput
  }

  export type TherapistEducationListRelationFilter = {
    every?: TherapistEducationWhereInput
    some?: TherapistEducationWhereInput
    none?: TherapistEducationWhereInput
  }

  export type TherapistCertificateListRelationFilter = {
    every?: TherapistCertificateWhereInput
    some?: TherapistCertificateWhereInput
    none?: TherapistCertificateWhereInput
  }

  export type TherapistSpecialtyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TherapistEducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TherapistCertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TherapistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    about?: SortOrder
    experienceYears?: SortOrder
    sessionPrice?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistAvgOrderByAggregateInput = {
    experienceYears?: SortOrder
    sessionPrice?: SortOrder
  }

  export type TherapistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    about?: SortOrder
    experienceYears?: SortOrder
    sessionPrice?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    about?: SortOrder
    experienceYears?: SortOrder
    sessionPrice?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistSumOrderByAggregateInput = {
    experienceYears?: SortOrder
    sessionPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TherapistRelationFilter = {
    is?: TherapistWhereInput
    isNot?: TherapistWhereInput
  }

  export type TherapistSpecialtyTherapistIdSpecialtyCompoundUniqueInput = {
    therapistId: string
    specialty: string
  }

  export type TherapistSpecialtyCountOrderByAggregateInput = {
    therapistId?: SortOrder
    specialty?: SortOrder
  }

  export type TherapistSpecialtyMaxOrderByAggregateInput = {
    therapistId?: SortOrder
    specialty?: SortOrder
  }

  export type TherapistSpecialtyMinOrderByAggregateInput = {
    therapistId?: SortOrder
    specialty?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TherapistEducationCountOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    title?: SortOrder
    school?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type TherapistEducationAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type TherapistEducationMaxOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    title?: SortOrder
    school?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type TherapistEducationMinOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    title?: SortOrder
    school?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type TherapistEducationSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TherapistCertificateCountOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TherapistCertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TherapistCertificateMinOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TestAnswerListRelationFilter = {
    every?: TestAnswerWhereInput
    some?: TestAnswerWhereInput
    none?: TestAnswerWhereInput
  }

  export type TestAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    dimension?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
  }

  export type TestQuestionAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type TestQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    dimension?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
  }

  export type TestQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    dimension?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
  }

  export type TestQuestionSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type TestQuestionRelationFilter = {
    is?: TestQuestionWhereInput
    isNot?: TestQuestionWhereInput
  }

  export type TestAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    sortOrder?: SortOrder
  }

  export type TestAnswerAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type TestAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    sortOrder?: SortOrder
  }

  export type TestAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    sortOrder?: SortOrder
  }

  export type TestAnswerSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ClientTestResultCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    preferences?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientTestResultMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientTestResultMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TherapistMatchUserIdTherapistIdCompoundUniqueInput = {
    userId: string
    therapistId: string
  }

  export type TherapistMatchCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    matchScore?: SortOrder
    createdAt?: SortOrder
  }

  export type TherapistMatchAvgOrderByAggregateInput = {
    matchScore?: SortOrder
  }

  export type TherapistMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    matchScore?: SortOrder
    createdAt?: SortOrder
  }

  export type TherapistMatchMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    matchScore?: SortOrder
    createdAt?: SortOrder
  }

  export type TherapistMatchSumOrderByAggregateInput = {
    matchScore?: SortOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    therapistId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    therapistId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    therapistId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ReviewClientIdTherapistIdCompoundUniqueInput = {
    clientId: string
    therapistId: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    therapistId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    therapistId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    therapistId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type SiteSettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingMaxOrderByAggregateInput = {
    key?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingMinOrderByAggregateInput = {
    key?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistCreateNestedOneWithoutUserInput = {
    create?: XOR<TherapistCreateWithoutUserInput, TherapistUncheckedCreateWithoutUserInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutUserInput
    connect?: TherapistWhereUniqueInput
  }

  export type ClientTestResultCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientTestResultCreateWithoutUserInput, ClientTestResultUncheckedCreateWithoutUserInput> | ClientTestResultCreateWithoutUserInput[] | ClientTestResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientTestResultCreateOrConnectWithoutUserInput | ClientTestResultCreateOrConnectWithoutUserInput[]
    createMany?: ClientTestResultCreateManyUserInputEnvelope
    connect?: ClientTestResultWhereUniqueInput | ClientTestResultWhereUniqueInput[]
  }

  export type TherapistMatchCreateNestedManyWithoutUserInput = {
    create?: XOR<TherapistMatchCreateWithoutUserInput, TherapistMatchUncheckedCreateWithoutUserInput> | TherapistMatchCreateWithoutUserInput[] | TherapistMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TherapistMatchCreateOrConnectWithoutUserInput | TherapistMatchCreateOrConnectWithoutUserInput[]
    createMany?: TherapistMatchCreateManyUserInputEnvelope
    connect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutClientInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutClientInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BlogPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type TherapistUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TherapistCreateWithoutUserInput, TherapistUncheckedCreateWithoutUserInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutUserInput
    connect?: TherapistWhereUniqueInput
  }

  export type ClientTestResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientTestResultCreateWithoutUserInput, ClientTestResultUncheckedCreateWithoutUserInput> | ClientTestResultCreateWithoutUserInput[] | ClientTestResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientTestResultCreateOrConnectWithoutUserInput | ClientTestResultCreateOrConnectWithoutUserInput[]
    createMany?: ClientTestResultCreateManyUserInputEnvelope
    connect?: ClientTestResultWhereUniqueInput | ClientTestResultWhereUniqueInput[]
  }

  export type TherapistMatchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TherapistMatchCreateWithoutUserInput, TherapistMatchUncheckedCreateWithoutUserInput> | TherapistMatchCreateWithoutUserInput[] | TherapistMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TherapistMatchCreateOrConnectWithoutUserInput | TherapistMatchCreateOrConnectWithoutUserInput[]
    createMany?: TherapistMatchCreateManyUserInputEnvelope
    connect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TherapistUpdateOneWithoutUserNestedInput = {
    create?: XOR<TherapistCreateWithoutUserInput, TherapistUncheckedCreateWithoutUserInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutUserInput
    upsert?: TherapistUpsertWithoutUserInput
    disconnect?: TherapistWhereInput | boolean
    delete?: TherapistWhereInput | boolean
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutUserInput, TherapistUpdateWithoutUserInput>, TherapistUncheckedUpdateWithoutUserInput>
  }

  export type ClientTestResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientTestResultCreateWithoutUserInput, ClientTestResultUncheckedCreateWithoutUserInput> | ClientTestResultCreateWithoutUserInput[] | ClientTestResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientTestResultCreateOrConnectWithoutUserInput | ClientTestResultCreateOrConnectWithoutUserInput[]
    upsert?: ClientTestResultUpsertWithWhereUniqueWithoutUserInput | ClientTestResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientTestResultCreateManyUserInputEnvelope
    set?: ClientTestResultWhereUniqueInput | ClientTestResultWhereUniqueInput[]
    disconnect?: ClientTestResultWhereUniqueInput | ClientTestResultWhereUniqueInput[]
    delete?: ClientTestResultWhereUniqueInput | ClientTestResultWhereUniqueInput[]
    connect?: ClientTestResultWhereUniqueInput | ClientTestResultWhereUniqueInput[]
    update?: ClientTestResultUpdateWithWhereUniqueWithoutUserInput | ClientTestResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientTestResultUpdateManyWithWhereWithoutUserInput | ClientTestResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientTestResultScalarWhereInput | ClientTestResultScalarWhereInput[]
  }

  export type TherapistMatchUpdateManyWithoutUserNestedInput = {
    create?: XOR<TherapistMatchCreateWithoutUserInput, TherapistMatchUncheckedCreateWithoutUserInput> | TherapistMatchCreateWithoutUserInput[] | TherapistMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TherapistMatchCreateOrConnectWithoutUserInput | TherapistMatchCreateOrConnectWithoutUserInput[]
    upsert?: TherapistMatchUpsertWithWhereUniqueWithoutUserInput | TherapistMatchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TherapistMatchCreateManyUserInputEnvelope
    set?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    disconnect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    delete?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    connect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    update?: TherapistMatchUpdateWithWhereUniqueWithoutUserInput | TherapistMatchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TherapistMatchUpdateManyWithWhereWithoutUserInput | TherapistMatchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TherapistMatchScalarWhereInput | TherapistMatchScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClientInput | AppointmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClientInput | AppointmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClientInput | AppointmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutClientInput | ReviewUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutClientInput | ReviewUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutClientInput | ReviewUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BlogPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAuthorInput | BlogPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAuthorInput | BlogPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAuthorInput | BlogPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type TherapistUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TherapistCreateWithoutUserInput, TherapistUncheckedCreateWithoutUserInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutUserInput
    upsert?: TherapistUpsertWithoutUserInput
    disconnect?: TherapistWhereInput | boolean
    delete?: TherapistWhereInput | boolean
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutUserInput, TherapistUpdateWithoutUserInput>, TherapistUncheckedUpdateWithoutUserInput>
  }

  export type ClientTestResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientTestResultCreateWithoutUserInput, ClientTestResultUncheckedCreateWithoutUserInput> | ClientTestResultCreateWithoutUserInput[] | ClientTestResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientTestResultCreateOrConnectWithoutUserInput | ClientTestResultCreateOrConnectWithoutUserInput[]
    upsert?: ClientTestResultUpsertWithWhereUniqueWithoutUserInput | ClientTestResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientTestResultCreateManyUserInputEnvelope
    set?: ClientTestResultWhereUniqueInput | ClientTestResultWhereUniqueInput[]
    disconnect?: ClientTestResultWhereUniqueInput | ClientTestResultWhereUniqueInput[]
    delete?: ClientTestResultWhereUniqueInput | ClientTestResultWhereUniqueInput[]
    connect?: ClientTestResultWhereUniqueInput | ClientTestResultWhereUniqueInput[]
    update?: ClientTestResultUpdateWithWhereUniqueWithoutUserInput | ClientTestResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientTestResultUpdateManyWithWhereWithoutUserInput | ClientTestResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientTestResultScalarWhereInput | ClientTestResultScalarWhereInput[]
  }

  export type TherapistMatchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TherapistMatchCreateWithoutUserInput, TherapistMatchUncheckedCreateWithoutUserInput> | TherapistMatchCreateWithoutUserInput[] | TherapistMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TherapistMatchCreateOrConnectWithoutUserInput | TherapistMatchCreateOrConnectWithoutUserInput[]
    upsert?: TherapistMatchUpsertWithWhereUniqueWithoutUserInput | TherapistMatchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TherapistMatchCreateManyUserInputEnvelope
    set?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    disconnect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    delete?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    connect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    update?: TherapistMatchUpdateWithWhereUniqueWithoutUserInput | TherapistMatchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TherapistMatchUpdateManyWithWhereWithoutUserInput | TherapistMatchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TherapistMatchScalarWhereInput | TherapistMatchScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClientInput | AppointmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClientInput | AppointmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClientInput | AppointmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutClientInput | ReviewUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutClientInput | ReviewUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutClientInput | ReviewUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAuthorInput | BlogPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAuthorInput | BlogPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAuthorInput | BlogPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTherapistInput = {
    create?: XOR<UserCreateWithoutTherapistInput, UserUncheckedCreateWithoutTherapistInput>
    connectOrCreate?: UserCreateOrConnectWithoutTherapistInput
    connect?: UserWhereUniqueInput
  }

  export type TherapistSpecialtyCreateNestedManyWithoutTherapistInput = {
    create?: XOR<TherapistSpecialtyCreateWithoutTherapistInput, TherapistSpecialtyUncheckedCreateWithoutTherapistInput> | TherapistSpecialtyCreateWithoutTherapistInput[] | TherapistSpecialtyUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistSpecialtyCreateOrConnectWithoutTherapistInput | TherapistSpecialtyCreateOrConnectWithoutTherapistInput[]
    createMany?: TherapistSpecialtyCreateManyTherapistInputEnvelope
    connect?: TherapistSpecialtyWhereUniqueInput | TherapistSpecialtyWhereUniqueInput[]
  }

  export type TherapistEducationCreateNestedManyWithoutTherapistInput = {
    create?: XOR<TherapistEducationCreateWithoutTherapistInput, TherapistEducationUncheckedCreateWithoutTherapistInput> | TherapistEducationCreateWithoutTherapistInput[] | TherapistEducationUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistEducationCreateOrConnectWithoutTherapistInput | TherapistEducationCreateOrConnectWithoutTherapistInput[]
    createMany?: TherapistEducationCreateManyTherapistInputEnvelope
    connect?: TherapistEducationWhereUniqueInput | TherapistEducationWhereUniqueInput[]
  }

  export type TherapistCertificateCreateNestedManyWithoutTherapistInput = {
    create?: XOR<TherapistCertificateCreateWithoutTherapistInput, TherapistCertificateUncheckedCreateWithoutTherapistInput> | TherapistCertificateCreateWithoutTherapistInput[] | TherapistCertificateUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistCertificateCreateOrConnectWithoutTherapistInput | TherapistCertificateCreateOrConnectWithoutTherapistInput[]
    createMany?: TherapistCertificateCreateManyTherapistInputEnvelope
    connect?: TherapistCertificateWhereUniqueInput | TherapistCertificateWhereUniqueInput[]
  }

  export type TherapistMatchCreateNestedManyWithoutTherapistInput = {
    create?: XOR<TherapistMatchCreateWithoutTherapistInput, TherapistMatchUncheckedCreateWithoutTherapistInput> | TherapistMatchCreateWithoutTherapistInput[] | TherapistMatchUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistMatchCreateOrConnectWithoutTherapistInput | TherapistMatchCreateOrConnectWithoutTherapistInput[]
    createMany?: TherapistMatchCreateManyTherapistInputEnvelope
    connect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutTherapistInput = {
    create?: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput> | AppointmentCreateWithoutTherapistInput[] | AppointmentUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTherapistInput | AppointmentCreateOrConnectWithoutTherapistInput[]
    createMany?: AppointmentCreateManyTherapistInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTherapistInput = {
    create?: XOR<ReviewCreateWithoutTherapistInput, ReviewUncheckedCreateWithoutTherapistInput> | ReviewCreateWithoutTherapistInput[] | ReviewUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTherapistInput | ReviewCreateOrConnectWithoutTherapistInput[]
    createMany?: ReviewCreateManyTherapistInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TherapistSpecialtyUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<TherapistSpecialtyCreateWithoutTherapistInput, TherapistSpecialtyUncheckedCreateWithoutTherapistInput> | TherapistSpecialtyCreateWithoutTherapistInput[] | TherapistSpecialtyUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistSpecialtyCreateOrConnectWithoutTherapistInput | TherapistSpecialtyCreateOrConnectWithoutTherapistInput[]
    createMany?: TherapistSpecialtyCreateManyTherapistInputEnvelope
    connect?: TherapistSpecialtyWhereUniqueInput | TherapistSpecialtyWhereUniqueInput[]
  }

  export type TherapistEducationUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<TherapistEducationCreateWithoutTherapistInput, TherapistEducationUncheckedCreateWithoutTherapistInput> | TherapistEducationCreateWithoutTherapistInput[] | TherapistEducationUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistEducationCreateOrConnectWithoutTherapistInput | TherapistEducationCreateOrConnectWithoutTherapistInput[]
    createMany?: TherapistEducationCreateManyTherapistInputEnvelope
    connect?: TherapistEducationWhereUniqueInput | TherapistEducationWhereUniqueInput[]
  }

  export type TherapistCertificateUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<TherapistCertificateCreateWithoutTherapistInput, TherapistCertificateUncheckedCreateWithoutTherapistInput> | TherapistCertificateCreateWithoutTherapistInput[] | TherapistCertificateUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistCertificateCreateOrConnectWithoutTherapistInput | TherapistCertificateCreateOrConnectWithoutTherapistInput[]
    createMany?: TherapistCertificateCreateManyTherapistInputEnvelope
    connect?: TherapistCertificateWhereUniqueInput | TherapistCertificateWhereUniqueInput[]
  }

  export type TherapistMatchUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<TherapistMatchCreateWithoutTherapistInput, TherapistMatchUncheckedCreateWithoutTherapistInput> | TherapistMatchCreateWithoutTherapistInput[] | TherapistMatchUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistMatchCreateOrConnectWithoutTherapistInput | TherapistMatchCreateOrConnectWithoutTherapistInput[]
    createMany?: TherapistMatchCreateManyTherapistInputEnvelope
    connect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput> | AppointmentCreateWithoutTherapistInput[] | AppointmentUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTherapistInput | AppointmentCreateOrConnectWithoutTherapistInput[]
    createMany?: AppointmentCreateManyTherapistInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<ReviewCreateWithoutTherapistInput, ReviewUncheckedCreateWithoutTherapistInput> | ReviewCreateWithoutTherapistInput[] | ReviewUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTherapistInput | ReviewCreateOrConnectWithoutTherapistInput[]
    createMany?: ReviewCreateManyTherapistInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTherapistNestedInput = {
    create?: XOR<UserCreateWithoutTherapistInput, UserUncheckedCreateWithoutTherapistInput>
    connectOrCreate?: UserCreateOrConnectWithoutTherapistInput
    upsert?: UserUpsertWithoutTherapistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTherapistInput, UserUpdateWithoutTherapistInput>, UserUncheckedUpdateWithoutTherapistInput>
  }

  export type TherapistSpecialtyUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<TherapistSpecialtyCreateWithoutTherapistInput, TherapistSpecialtyUncheckedCreateWithoutTherapistInput> | TherapistSpecialtyCreateWithoutTherapistInput[] | TherapistSpecialtyUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistSpecialtyCreateOrConnectWithoutTherapistInput | TherapistSpecialtyCreateOrConnectWithoutTherapistInput[]
    upsert?: TherapistSpecialtyUpsertWithWhereUniqueWithoutTherapistInput | TherapistSpecialtyUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: TherapistSpecialtyCreateManyTherapistInputEnvelope
    set?: TherapistSpecialtyWhereUniqueInput | TherapistSpecialtyWhereUniqueInput[]
    disconnect?: TherapistSpecialtyWhereUniqueInput | TherapistSpecialtyWhereUniqueInput[]
    delete?: TherapistSpecialtyWhereUniqueInput | TherapistSpecialtyWhereUniqueInput[]
    connect?: TherapistSpecialtyWhereUniqueInput | TherapistSpecialtyWhereUniqueInput[]
    update?: TherapistSpecialtyUpdateWithWhereUniqueWithoutTherapistInput | TherapistSpecialtyUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: TherapistSpecialtyUpdateManyWithWhereWithoutTherapistInput | TherapistSpecialtyUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: TherapistSpecialtyScalarWhereInput | TherapistSpecialtyScalarWhereInput[]
  }

  export type TherapistEducationUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<TherapistEducationCreateWithoutTherapistInput, TherapistEducationUncheckedCreateWithoutTherapistInput> | TherapistEducationCreateWithoutTherapistInput[] | TherapistEducationUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistEducationCreateOrConnectWithoutTherapistInput | TherapistEducationCreateOrConnectWithoutTherapistInput[]
    upsert?: TherapistEducationUpsertWithWhereUniqueWithoutTherapistInput | TherapistEducationUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: TherapistEducationCreateManyTherapistInputEnvelope
    set?: TherapistEducationWhereUniqueInput | TherapistEducationWhereUniqueInput[]
    disconnect?: TherapistEducationWhereUniqueInput | TherapistEducationWhereUniqueInput[]
    delete?: TherapistEducationWhereUniqueInput | TherapistEducationWhereUniqueInput[]
    connect?: TherapistEducationWhereUniqueInput | TherapistEducationWhereUniqueInput[]
    update?: TherapistEducationUpdateWithWhereUniqueWithoutTherapistInput | TherapistEducationUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: TherapistEducationUpdateManyWithWhereWithoutTherapistInput | TherapistEducationUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: TherapistEducationScalarWhereInput | TherapistEducationScalarWhereInput[]
  }

  export type TherapistCertificateUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<TherapistCertificateCreateWithoutTherapistInput, TherapistCertificateUncheckedCreateWithoutTherapistInput> | TherapistCertificateCreateWithoutTherapistInput[] | TherapistCertificateUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistCertificateCreateOrConnectWithoutTherapistInput | TherapistCertificateCreateOrConnectWithoutTherapistInput[]
    upsert?: TherapistCertificateUpsertWithWhereUniqueWithoutTherapistInput | TherapistCertificateUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: TherapistCertificateCreateManyTherapistInputEnvelope
    set?: TherapistCertificateWhereUniqueInput | TherapistCertificateWhereUniqueInput[]
    disconnect?: TherapistCertificateWhereUniqueInput | TherapistCertificateWhereUniqueInput[]
    delete?: TherapistCertificateWhereUniqueInput | TherapistCertificateWhereUniqueInput[]
    connect?: TherapistCertificateWhereUniqueInput | TherapistCertificateWhereUniqueInput[]
    update?: TherapistCertificateUpdateWithWhereUniqueWithoutTherapistInput | TherapistCertificateUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: TherapistCertificateUpdateManyWithWhereWithoutTherapistInput | TherapistCertificateUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: TherapistCertificateScalarWhereInput | TherapistCertificateScalarWhereInput[]
  }

  export type TherapistMatchUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<TherapistMatchCreateWithoutTherapistInput, TherapistMatchUncheckedCreateWithoutTherapistInput> | TherapistMatchCreateWithoutTherapistInput[] | TherapistMatchUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistMatchCreateOrConnectWithoutTherapistInput | TherapistMatchCreateOrConnectWithoutTherapistInput[]
    upsert?: TherapistMatchUpsertWithWhereUniqueWithoutTherapistInput | TherapistMatchUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: TherapistMatchCreateManyTherapistInputEnvelope
    set?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    disconnect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    delete?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    connect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    update?: TherapistMatchUpdateWithWhereUniqueWithoutTherapistInput | TherapistMatchUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: TherapistMatchUpdateManyWithWhereWithoutTherapistInput | TherapistMatchUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: TherapistMatchScalarWhereInput | TherapistMatchScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput> | AppointmentCreateWithoutTherapistInput[] | AppointmentUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTherapistInput | AppointmentCreateOrConnectWithoutTherapistInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutTherapistInput | AppointmentUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: AppointmentCreateManyTherapistInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutTherapistInput | AppointmentUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutTherapistInput | AppointmentUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<ReviewCreateWithoutTherapistInput, ReviewUncheckedCreateWithoutTherapistInput> | ReviewCreateWithoutTherapistInput[] | ReviewUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTherapistInput | ReviewCreateOrConnectWithoutTherapistInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTherapistInput | ReviewUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: ReviewCreateManyTherapistInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTherapistInput | ReviewUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTherapistInput | ReviewUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TherapistSpecialtyUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<TherapistSpecialtyCreateWithoutTherapistInput, TherapistSpecialtyUncheckedCreateWithoutTherapistInput> | TherapistSpecialtyCreateWithoutTherapistInput[] | TherapistSpecialtyUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistSpecialtyCreateOrConnectWithoutTherapistInput | TherapistSpecialtyCreateOrConnectWithoutTherapistInput[]
    upsert?: TherapistSpecialtyUpsertWithWhereUniqueWithoutTherapistInput | TherapistSpecialtyUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: TherapistSpecialtyCreateManyTherapistInputEnvelope
    set?: TherapistSpecialtyWhereUniqueInput | TherapistSpecialtyWhereUniqueInput[]
    disconnect?: TherapistSpecialtyWhereUniqueInput | TherapistSpecialtyWhereUniqueInput[]
    delete?: TherapistSpecialtyWhereUniqueInput | TherapistSpecialtyWhereUniqueInput[]
    connect?: TherapistSpecialtyWhereUniqueInput | TherapistSpecialtyWhereUniqueInput[]
    update?: TherapistSpecialtyUpdateWithWhereUniqueWithoutTherapistInput | TherapistSpecialtyUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: TherapistSpecialtyUpdateManyWithWhereWithoutTherapistInput | TherapistSpecialtyUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: TherapistSpecialtyScalarWhereInput | TherapistSpecialtyScalarWhereInput[]
  }

  export type TherapistEducationUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<TherapistEducationCreateWithoutTherapistInput, TherapistEducationUncheckedCreateWithoutTherapistInput> | TherapistEducationCreateWithoutTherapistInput[] | TherapistEducationUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistEducationCreateOrConnectWithoutTherapistInput | TherapistEducationCreateOrConnectWithoutTherapistInput[]
    upsert?: TherapistEducationUpsertWithWhereUniqueWithoutTherapistInput | TherapistEducationUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: TherapistEducationCreateManyTherapistInputEnvelope
    set?: TherapistEducationWhereUniqueInput | TherapistEducationWhereUniqueInput[]
    disconnect?: TherapistEducationWhereUniqueInput | TherapistEducationWhereUniqueInput[]
    delete?: TherapistEducationWhereUniqueInput | TherapistEducationWhereUniqueInput[]
    connect?: TherapistEducationWhereUniqueInput | TherapistEducationWhereUniqueInput[]
    update?: TherapistEducationUpdateWithWhereUniqueWithoutTherapistInput | TherapistEducationUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: TherapistEducationUpdateManyWithWhereWithoutTherapistInput | TherapistEducationUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: TherapistEducationScalarWhereInput | TherapistEducationScalarWhereInput[]
  }

  export type TherapistCertificateUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<TherapistCertificateCreateWithoutTherapistInput, TherapistCertificateUncheckedCreateWithoutTherapistInput> | TherapistCertificateCreateWithoutTherapistInput[] | TherapistCertificateUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistCertificateCreateOrConnectWithoutTherapistInput | TherapistCertificateCreateOrConnectWithoutTherapistInput[]
    upsert?: TherapistCertificateUpsertWithWhereUniqueWithoutTherapistInput | TherapistCertificateUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: TherapistCertificateCreateManyTherapistInputEnvelope
    set?: TherapistCertificateWhereUniqueInput | TherapistCertificateWhereUniqueInput[]
    disconnect?: TherapistCertificateWhereUniqueInput | TherapistCertificateWhereUniqueInput[]
    delete?: TherapistCertificateWhereUniqueInput | TherapistCertificateWhereUniqueInput[]
    connect?: TherapistCertificateWhereUniqueInput | TherapistCertificateWhereUniqueInput[]
    update?: TherapistCertificateUpdateWithWhereUniqueWithoutTherapistInput | TherapistCertificateUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: TherapistCertificateUpdateManyWithWhereWithoutTherapistInput | TherapistCertificateUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: TherapistCertificateScalarWhereInput | TherapistCertificateScalarWhereInput[]
  }

  export type TherapistMatchUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<TherapistMatchCreateWithoutTherapistInput, TherapistMatchUncheckedCreateWithoutTherapistInput> | TherapistMatchCreateWithoutTherapistInput[] | TherapistMatchUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: TherapistMatchCreateOrConnectWithoutTherapistInput | TherapistMatchCreateOrConnectWithoutTherapistInput[]
    upsert?: TherapistMatchUpsertWithWhereUniqueWithoutTherapistInput | TherapistMatchUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: TherapistMatchCreateManyTherapistInputEnvelope
    set?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    disconnect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    delete?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    connect?: TherapistMatchWhereUniqueInput | TherapistMatchWhereUniqueInput[]
    update?: TherapistMatchUpdateWithWhereUniqueWithoutTherapistInput | TherapistMatchUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: TherapistMatchUpdateManyWithWhereWithoutTherapistInput | TherapistMatchUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: TherapistMatchScalarWhereInput | TherapistMatchScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput> | AppointmentCreateWithoutTherapistInput[] | AppointmentUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTherapistInput | AppointmentCreateOrConnectWithoutTherapistInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutTherapistInput | AppointmentUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: AppointmentCreateManyTherapistInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutTherapistInput | AppointmentUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutTherapistInput | AppointmentUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<ReviewCreateWithoutTherapistInput, ReviewUncheckedCreateWithoutTherapistInput> | ReviewCreateWithoutTherapistInput[] | ReviewUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTherapistInput | ReviewCreateOrConnectWithoutTherapistInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTherapistInput | ReviewUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: ReviewCreateManyTherapistInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTherapistInput | ReviewUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTherapistInput | ReviewUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TherapistCreateNestedOneWithoutSpecialtiesInput = {
    create?: XOR<TherapistCreateWithoutSpecialtiesInput, TherapistUncheckedCreateWithoutSpecialtiesInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutSpecialtiesInput
    connect?: TherapistWhereUniqueInput
  }

  export type TherapistUpdateOneRequiredWithoutSpecialtiesNestedInput = {
    create?: XOR<TherapistCreateWithoutSpecialtiesInput, TherapistUncheckedCreateWithoutSpecialtiesInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutSpecialtiesInput
    upsert?: TherapistUpsertWithoutSpecialtiesInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutSpecialtiesInput, TherapistUpdateWithoutSpecialtiesInput>, TherapistUncheckedUpdateWithoutSpecialtiesInput>
  }

  export type TherapistCreateNestedOneWithoutEducationsInput = {
    create?: XOR<TherapistCreateWithoutEducationsInput, TherapistUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutEducationsInput
    connect?: TherapistWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TherapistUpdateOneRequiredWithoutEducationsNestedInput = {
    create?: XOR<TherapistCreateWithoutEducationsInput, TherapistUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutEducationsInput
    upsert?: TherapistUpsertWithoutEducationsInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutEducationsInput, TherapistUpdateWithoutEducationsInput>, TherapistUncheckedUpdateWithoutEducationsInput>
  }

  export type TherapistCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<TherapistCreateWithoutCertificatesInput, TherapistUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutCertificatesInput
    connect?: TherapistWhereUniqueInput
  }

  export type TherapistUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<TherapistCreateWithoutCertificatesInput, TherapistUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutCertificatesInput
    upsert?: TherapistUpsertWithoutCertificatesInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutCertificatesInput, TherapistUpdateWithoutCertificatesInput>, TherapistUncheckedUpdateWithoutCertificatesInput>
  }

  export type TestAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput> | TestAnswerCreateWithoutQuestionInput[] | TestAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutQuestionInput | TestAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: TestAnswerCreateManyQuestionInputEnvelope
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
  }

  export type TestAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput> | TestAnswerCreateWithoutQuestionInput[] | TestAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutQuestionInput | TestAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: TestAnswerCreateManyQuestionInputEnvelope
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
  }

  export type TestAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput> | TestAnswerCreateWithoutQuestionInput[] | TestAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutQuestionInput | TestAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: TestAnswerUpsertWithWhereUniqueWithoutQuestionInput | TestAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TestAnswerCreateManyQuestionInputEnvelope
    set?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    disconnect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    delete?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    update?: TestAnswerUpdateWithWhereUniqueWithoutQuestionInput | TestAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TestAnswerUpdateManyWithWhereWithoutQuestionInput | TestAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
  }

  export type TestAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput> | TestAnswerCreateWithoutQuestionInput[] | TestAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutQuestionInput | TestAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: TestAnswerUpsertWithWhereUniqueWithoutQuestionInput | TestAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TestAnswerCreateManyQuestionInputEnvelope
    set?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    disconnect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    delete?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    update?: TestAnswerUpdateWithWhereUniqueWithoutQuestionInput | TestAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TestAnswerUpdateManyWithWhereWithoutQuestionInput | TestAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
  }

  export type TestQuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<TestQuestionCreateWithoutAnswersInput, TestQuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: TestQuestionCreateOrConnectWithoutAnswersInput
    connect?: TestQuestionWhereUniqueInput
  }

  export type TestQuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<TestQuestionCreateWithoutAnswersInput, TestQuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: TestQuestionCreateOrConnectWithoutAnswersInput
    upsert?: TestQuestionUpsertWithoutAnswersInput
    connect?: TestQuestionWhereUniqueInput
    update?: XOR<XOR<TestQuestionUpdateToOneWithWhereWithoutAnswersInput, TestQuestionUpdateWithoutAnswersInput>, TestQuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserCreateNestedOneWithoutTestResultsInput = {
    create?: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestResultsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTestResultsNestedInput = {
    create?: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestResultsInput
    upsert?: UserUpsertWithoutTestResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestResultsInput, UserUpdateWithoutTestResultsInput>, UserUncheckedUpdateWithoutTestResultsInput>
  }

  export type UserCreateNestedOneWithoutMatchesInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type TherapistCreateNestedOneWithoutMatchesInput = {
    create?: XOR<TherapistCreateWithoutMatchesInput, TherapistUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutMatchesInput
    connect?: TherapistWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    upsert?: UserUpsertWithoutMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesInput, UserUpdateWithoutMatchesInput>, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type TherapistUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<TherapistCreateWithoutMatchesInput, TherapistUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutMatchesInput
    upsert?: TherapistUpsertWithoutMatchesInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutMatchesInput, TherapistUpdateWithoutMatchesInput>, TherapistUncheckedUpdateWithoutMatchesInput>
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type TherapistCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<TherapistCreateWithoutAppointmentsInput, TherapistUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutAppointmentsInput
    connect?: TherapistWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type TherapistUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<TherapistCreateWithoutAppointmentsInput, TherapistUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutAppointmentsInput
    upsert?: TherapistUpsertWithoutAppointmentsInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutAppointmentsInput, TherapistUpdateWithoutAppointmentsInput>, TherapistUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type TherapistCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TherapistCreateWithoutReviewsInput, TherapistUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutReviewsInput
    connect?: TherapistWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type TherapistUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TherapistCreateWithoutReviewsInput, TherapistUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutReviewsInput
    upsert?: TherapistUpsertWithoutReviewsInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutReviewsInput, TherapistUpdateWithoutReviewsInput>, TherapistUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutBlogPostsInput = {
    create?: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutBlogPostsNestedInput = {
    create?: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostsInput
    upsert?: UserUpsertWithoutBlogPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogPostsInput, UserUpdateWithoutBlogPostsInput>, UserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TherapistCreateWithoutUserInput = {
    id?: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialties?: TherapistSpecialtyCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentCreateNestedManyWithoutTherapistInput
    reviews?: ReviewCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialties?: TherapistSpecialtyUncheckedCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationUncheckedCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateUncheckedCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTherapistInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutUserInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutUserInput, TherapistUncheckedCreateWithoutUserInput>
  }

  export type ClientTestResultCreateWithoutUserInput = {
    id?: string
    answers: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ClientTestResultUncheckedCreateWithoutUserInput = {
    id?: string
    answers: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ClientTestResultCreateOrConnectWithoutUserInput = {
    where: ClientTestResultWhereUniqueInput
    create: XOR<ClientTestResultCreateWithoutUserInput, ClientTestResultUncheckedCreateWithoutUserInput>
  }

  export type ClientTestResultCreateManyUserInputEnvelope = {
    data: ClientTestResultCreateManyUserInput | ClientTestResultCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TherapistMatchCreateWithoutUserInput = {
    id?: string
    matchScore?: number
    createdAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutMatchesInput
  }

  export type TherapistMatchUncheckedCreateWithoutUserInput = {
    id?: string
    therapistId: string
    matchScore?: number
    createdAt?: Date | string
  }

  export type TherapistMatchCreateOrConnectWithoutUserInput = {
    where: TherapistMatchWhereUniqueInput
    create: XOR<TherapistMatchCreateWithoutUserInput, TherapistMatchUncheckedCreateWithoutUserInput>
  }

  export type TherapistMatchCreateManyUserInputEnvelope = {
    data: TherapistMatchCreateManyUserInput | TherapistMatchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutClientInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: string
    notes?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutClientInput = {
    id?: string
    therapistId: string
    startTime: Date | string
    endTime: Date | string
    status?: string
    notes?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput>
  }

  export type AppointmentCreateManyClientInputEnvelope = {
    data: AppointmentCreateManyClientInput | AppointmentCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutClientInput = {
    id?: string
    rating: number
    comment?: string | null
    isAnonymous?: boolean
    createdAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutClientInput = {
    id?: string
    therapistId: string
    rating: number
    comment?: string | null
    isAnonymous?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutClientInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput>
  }

  export type ReviewCreateManyClientInputEnvelope = {
    data: ReviewCreateManyClientInput | ReviewCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    coverImage?: string | null
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    coverImage?: string | null
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostCreateOrConnectWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput>
  }

  export type BlogPostCreateManyAuthorInputEnvelope = {
    data: BlogPostCreateManyAuthorInput | BlogPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TherapistUpsertWithoutUserInput = {
    update: XOR<TherapistUpdateWithoutUserInput, TherapistUncheckedUpdateWithoutUserInput>
    create: XOR<TherapistCreateWithoutUserInput, TherapistUncheckedCreateWithoutUserInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutUserInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutUserInput, TherapistUncheckedUpdateWithoutUserInput>
  }

  export type TherapistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialties?: TherapistSpecialtyUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialties?: TherapistSpecialtyUncheckedUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUncheckedUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUncheckedUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type ClientTestResultUpsertWithWhereUniqueWithoutUserInput = {
    where: ClientTestResultWhereUniqueInput
    update: XOR<ClientTestResultUpdateWithoutUserInput, ClientTestResultUncheckedUpdateWithoutUserInput>
    create: XOR<ClientTestResultCreateWithoutUserInput, ClientTestResultUncheckedCreateWithoutUserInput>
  }

  export type ClientTestResultUpdateWithWhereUniqueWithoutUserInput = {
    where: ClientTestResultWhereUniqueInput
    data: XOR<ClientTestResultUpdateWithoutUserInput, ClientTestResultUncheckedUpdateWithoutUserInput>
  }

  export type ClientTestResultUpdateManyWithWhereWithoutUserInput = {
    where: ClientTestResultScalarWhereInput
    data: XOR<ClientTestResultUpdateManyMutationInput, ClientTestResultUncheckedUpdateManyWithoutUserInput>
  }

  export type ClientTestResultScalarWhereInput = {
    AND?: ClientTestResultScalarWhereInput | ClientTestResultScalarWhereInput[]
    OR?: ClientTestResultScalarWhereInput[]
    NOT?: ClientTestResultScalarWhereInput | ClientTestResultScalarWhereInput[]
    id?: UuidFilter<"ClientTestResult"> | string
    userId?: UuidFilter<"ClientTestResult"> | string
    answers?: JsonFilter<"ClientTestResult">
    preferences?: JsonNullableFilter<"ClientTestResult">
    createdAt?: DateTimeFilter<"ClientTestResult"> | Date | string
  }

  export type TherapistMatchUpsertWithWhereUniqueWithoutUserInput = {
    where: TherapistMatchWhereUniqueInput
    update: XOR<TherapistMatchUpdateWithoutUserInput, TherapistMatchUncheckedUpdateWithoutUserInput>
    create: XOR<TherapistMatchCreateWithoutUserInput, TherapistMatchUncheckedCreateWithoutUserInput>
  }

  export type TherapistMatchUpdateWithWhereUniqueWithoutUserInput = {
    where: TherapistMatchWhereUniqueInput
    data: XOR<TherapistMatchUpdateWithoutUserInput, TherapistMatchUncheckedUpdateWithoutUserInput>
  }

  export type TherapistMatchUpdateManyWithWhereWithoutUserInput = {
    where: TherapistMatchScalarWhereInput
    data: XOR<TherapistMatchUpdateManyMutationInput, TherapistMatchUncheckedUpdateManyWithoutUserInput>
  }

  export type TherapistMatchScalarWhereInput = {
    AND?: TherapistMatchScalarWhereInput | TherapistMatchScalarWhereInput[]
    OR?: TherapistMatchScalarWhereInput[]
    NOT?: TherapistMatchScalarWhereInput | TherapistMatchScalarWhereInput[]
    id?: UuidFilter<"TherapistMatch"> | string
    userId?: UuidFilter<"TherapistMatch"> | string
    therapistId?: UuidFilter<"TherapistMatch"> | string
    matchScore?: IntFilter<"TherapistMatch"> | number
    createdAt?: DateTimeFilter<"TherapistMatch"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutClientInput, AppointmentUncheckedUpdateWithoutClientInput>
    create: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutClientInput, AppointmentUncheckedUpdateWithoutClientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutClientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutClientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: UuidFilter<"Appointment"> | string
    clientId?: UuidFilter<"Appointment"> | string
    therapistId?: UuidFilter<"Appointment"> | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringFilter<"Appointment"> | string
    notes?: StringNullableFilter<"Appointment"> | string | null
    price?: IntNullableFilter<"Appointment"> | number | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutClientInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutClientInput, ReviewUncheckedUpdateWithoutClientInput>
    create: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutClientInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutClientInput, ReviewUncheckedUpdateWithoutClientInput>
  }

  export type ReviewUpdateManyWithWhereWithoutClientInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutClientInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: UuidFilter<"Review"> | string
    clientId?: UuidFilter<"Review"> | string
    therapistId?: UuidFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    isAnonymous?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type BlogPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutAuthorInput, BlogPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutAuthorInput, BlogPostUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: UuidFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    content?: StringNullableFilter<"BlogPost"> | string | null
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    authorId?: UuidNullableFilter<"BlogPost"> | string | null
    status?: StringFilter<"BlogPost"> | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
  }

  export type UserCreateWithoutTherapistInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testResults?: ClientTestResultCreateNestedManyWithoutUserInput
    matches?: TherapistMatchCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutClientInput
    reviews?: ReviewCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutTherapistInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testResults?: ClientTestResultUncheckedCreateNestedManyWithoutUserInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutTherapistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTherapistInput, UserUncheckedCreateWithoutTherapistInput>
  }

  export type TherapistSpecialtyCreateWithoutTherapistInput = {
    specialty: string
  }

  export type TherapistSpecialtyUncheckedCreateWithoutTherapistInput = {
    specialty: string
  }

  export type TherapistSpecialtyCreateOrConnectWithoutTherapistInput = {
    where: TherapistSpecialtyWhereUniqueInput
    create: XOR<TherapistSpecialtyCreateWithoutTherapistInput, TherapistSpecialtyUncheckedCreateWithoutTherapistInput>
  }

  export type TherapistSpecialtyCreateManyTherapistInputEnvelope = {
    data: TherapistSpecialtyCreateManyTherapistInput | TherapistSpecialtyCreateManyTherapistInput[]
    skipDuplicates?: boolean
  }

  export type TherapistEducationCreateWithoutTherapistInput = {
    id?: string
    title: string
    school?: string | null
    year?: number | null
    createdAt?: Date | string
  }

  export type TherapistEducationUncheckedCreateWithoutTherapistInput = {
    id?: string
    title: string
    school?: string | null
    year?: number | null
    createdAt?: Date | string
  }

  export type TherapistEducationCreateOrConnectWithoutTherapistInput = {
    where: TherapistEducationWhereUniqueInput
    create: XOR<TherapistEducationCreateWithoutTherapistInput, TherapistEducationUncheckedCreateWithoutTherapistInput>
  }

  export type TherapistEducationCreateManyTherapistInputEnvelope = {
    data: TherapistEducationCreateManyTherapistInput | TherapistEducationCreateManyTherapistInput[]
    skipDuplicates?: boolean
  }

  export type TherapistCertificateCreateWithoutTherapistInput = {
    id?: string
    fileUrl: string
    fileName?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TherapistCertificateUncheckedCreateWithoutTherapistInput = {
    id?: string
    fileUrl: string
    fileName?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TherapistCertificateCreateOrConnectWithoutTherapistInput = {
    where: TherapistCertificateWhereUniqueInput
    create: XOR<TherapistCertificateCreateWithoutTherapistInput, TherapistCertificateUncheckedCreateWithoutTherapistInput>
  }

  export type TherapistCertificateCreateManyTherapistInputEnvelope = {
    data: TherapistCertificateCreateManyTherapistInput | TherapistCertificateCreateManyTherapistInput[]
    skipDuplicates?: boolean
  }

  export type TherapistMatchCreateWithoutTherapistInput = {
    id?: string
    matchScore?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMatchesInput
  }

  export type TherapistMatchUncheckedCreateWithoutTherapistInput = {
    id?: string
    userId: string
    matchScore?: number
    createdAt?: Date | string
  }

  export type TherapistMatchCreateOrConnectWithoutTherapistInput = {
    where: TherapistMatchWhereUniqueInput
    create: XOR<TherapistMatchCreateWithoutTherapistInput, TherapistMatchUncheckedCreateWithoutTherapistInput>
  }

  export type TherapistMatchCreateManyTherapistInputEnvelope = {
    data: TherapistMatchCreateManyTherapistInput | TherapistMatchCreateManyTherapistInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutTherapistInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: string
    notes?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutTherapistInput = {
    id?: string
    clientId: string
    startTime: Date | string
    endTime: Date | string
    status?: string
    notes?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutTherapistInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput>
  }

  export type AppointmentCreateManyTherapistInputEnvelope = {
    data: AppointmentCreateManyTherapistInput | AppointmentCreateManyTherapistInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTherapistInput = {
    id?: string
    rating: number
    comment?: string | null
    isAnonymous?: boolean
    createdAt?: Date | string
    client: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTherapistInput = {
    id?: string
    clientId: string
    rating: number
    comment?: string | null
    isAnonymous?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTherapistInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTherapistInput, ReviewUncheckedCreateWithoutTherapistInput>
  }

  export type ReviewCreateManyTherapistInputEnvelope = {
    data: ReviewCreateManyTherapistInput | ReviewCreateManyTherapistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTherapistInput = {
    update: XOR<UserUpdateWithoutTherapistInput, UserUncheckedUpdateWithoutTherapistInput>
    create: XOR<UserCreateWithoutTherapistInput, UserUncheckedCreateWithoutTherapistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTherapistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTherapistInput, UserUncheckedUpdateWithoutTherapistInput>
  }

  export type UserUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testResults?: ClientTestResultUpdateManyWithoutUserNestedInput
    matches?: TherapistMatchUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutClientNestedInput
    reviews?: ReviewUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testResults?: ClientTestResultUncheckedUpdateManyWithoutUserNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TherapistSpecialtyUpsertWithWhereUniqueWithoutTherapistInput = {
    where: TherapistSpecialtyWhereUniqueInput
    update: XOR<TherapistSpecialtyUpdateWithoutTherapistInput, TherapistSpecialtyUncheckedUpdateWithoutTherapistInput>
    create: XOR<TherapistSpecialtyCreateWithoutTherapistInput, TherapistSpecialtyUncheckedCreateWithoutTherapistInput>
  }

  export type TherapistSpecialtyUpdateWithWhereUniqueWithoutTherapistInput = {
    where: TherapistSpecialtyWhereUniqueInput
    data: XOR<TherapistSpecialtyUpdateWithoutTherapistInput, TherapistSpecialtyUncheckedUpdateWithoutTherapistInput>
  }

  export type TherapistSpecialtyUpdateManyWithWhereWithoutTherapistInput = {
    where: TherapistSpecialtyScalarWhereInput
    data: XOR<TherapistSpecialtyUpdateManyMutationInput, TherapistSpecialtyUncheckedUpdateManyWithoutTherapistInput>
  }

  export type TherapistSpecialtyScalarWhereInput = {
    AND?: TherapistSpecialtyScalarWhereInput | TherapistSpecialtyScalarWhereInput[]
    OR?: TherapistSpecialtyScalarWhereInput[]
    NOT?: TherapistSpecialtyScalarWhereInput | TherapistSpecialtyScalarWhereInput[]
    therapistId?: UuidFilter<"TherapistSpecialty"> | string
    specialty?: StringFilter<"TherapistSpecialty"> | string
  }

  export type TherapistEducationUpsertWithWhereUniqueWithoutTherapistInput = {
    where: TherapistEducationWhereUniqueInput
    update: XOR<TherapistEducationUpdateWithoutTherapistInput, TherapistEducationUncheckedUpdateWithoutTherapistInput>
    create: XOR<TherapistEducationCreateWithoutTherapistInput, TherapistEducationUncheckedCreateWithoutTherapistInput>
  }

  export type TherapistEducationUpdateWithWhereUniqueWithoutTherapistInput = {
    where: TherapistEducationWhereUniqueInput
    data: XOR<TherapistEducationUpdateWithoutTherapistInput, TherapistEducationUncheckedUpdateWithoutTherapistInput>
  }

  export type TherapistEducationUpdateManyWithWhereWithoutTherapistInput = {
    where: TherapistEducationScalarWhereInput
    data: XOR<TherapistEducationUpdateManyMutationInput, TherapistEducationUncheckedUpdateManyWithoutTherapistInput>
  }

  export type TherapistEducationScalarWhereInput = {
    AND?: TherapistEducationScalarWhereInput | TherapistEducationScalarWhereInput[]
    OR?: TherapistEducationScalarWhereInput[]
    NOT?: TherapistEducationScalarWhereInput | TherapistEducationScalarWhereInput[]
    id?: UuidFilter<"TherapistEducation"> | string
    therapistId?: UuidFilter<"TherapistEducation"> | string
    title?: StringFilter<"TherapistEducation"> | string
    school?: StringNullableFilter<"TherapistEducation"> | string | null
    year?: IntNullableFilter<"TherapistEducation"> | number | null
    createdAt?: DateTimeFilter<"TherapistEducation"> | Date | string
  }

  export type TherapistCertificateUpsertWithWhereUniqueWithoutTherapistInput = {
    where: TherapistCertificateWhereUniqueInput
    update: XOR<TherapistCertificateUpdateWithoutTherapistInput, TherapistCertificateUncheckedUpdateWithoutTherapistInput>
    create: XOR<TherapistCertificateCreateWithoutTherapistInput, TherapistCertificateUncheckedCreateWithoutTherapistInput>
  }

  export type TherapistCertificateUpdateWithWhereUniqueWithoutTherapistInput = {
    where: TherapistCertificateWhereUniqueInput
    data: XOR<TherapistCertificateUpdateWithoutTherapistInput, TherapistCertificateUncheckedUpdateWithoutTherapistInput>
  }

  export type TherapistCertificateUpdateManyWithWhereWithoutTherapistInput = {
    where: TherapistCertificateScalarWhereInput
    data: XOR<TherapistCertificateUpdateManyMutationInput, TherapistCertificateUncheckedUpdateManyWithoutTherapistInput>
  }

  export type TherapistCertificateScalarWhereInput = {
    AND?: TherapistCertificateScalarWhereInput | TherapistCertificateScalarWhereInput[]
    OR?: TherapistCertificateScalarWhereInput[]
    NOT?: TherapistCertificateScalarWhereInput | TherapistCertificateScalarWhereInput[]
    id?: UuidFilter<"TherapistCertificate"> | string
    therapistId?: UuidFilter<"TherapistCertificate"> | string
    fileUrl?: StringFilter<"TherapistCertificate"> | string
    fileName?: StringNullableFilter<"TherapistCertificate"> | string | null
    status?: StringFilter<"TherapistCertificate"> | string
    createdAt?: DateTimeFilter<"TherapistCertificate"> | Date | string
  }

  export type TherapistMatchUpsertWithWhereUniqueWithoutTherapistInput = {
    where: TherapistMatchWhereUniqueInput
    update: XOR<TherapistMatchUpdateWithoutTherapistInput, TherapistMatchUncheckedUpdateWithoutTherapistInput>
    create: XOR<TherapistMatchCreateWithoutTherapistInput, TherapistMatchUncheckedCreateWithoutTherapistInput>
  }

  export type TherapistMatchUpdateWithWhereUniqueWithoutTherapistInput = {
    where: TherapistMatchWhereUniqueInput
    data: XOR<TherapistMatchUpdateWithoutTherapistInput, TherapistMatchUncheckedUpdateWithoutTherapistInput>
  }

  export type TherapistMatchUpdateManyWithWhereWithoutTherapistInput = {
    where: TherapistMatchScalarWhereInput
    data: XOR<TherapistMatchUpdateManyMutationInput, TherapistMatchUncheckedUpdateManyWithoutTherapistInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutTherapistInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutTherapistInput, AppointmentUncheckedUpdateWithoutTherapistInput>
    create: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutTherapistInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutTherapistInput, AppointmentUncheckedUpdateWithoutTherapistInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutTherapistInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutTherapistInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutTherapistInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTherapistInput, ReviewUncheckedUpdateWithoutTherapistInput>
    create: XOR<ReviewCreateWithoutTherapistInput, ReviewUncheckedCreateWithoutTherapistInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTherapistInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTherapistInput, ReviewUncheckedUpdateWithoutTherapistInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTherapistInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTherapistInput>
  }

  export type TherapistCreateWithoutSpecialtiesInput = {
    id?: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTherapistInput
    educations?: TherapistEducationCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentCreateNestedManyWithoutTherapistInput
    reviews?: ReviewCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutSpecialtiesInput = {
    id?: string
    userId: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    educations?: TherapistEducationUncheckedCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateUncheckedCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTherapistInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutSpecialtiesInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutSpecialtiesInput, TherapistUncheckedCreateWithoutSpecialtiesInput>
  }

  export type TherapistUpsertWithoutSpecialtiesInput = {
    update: XOR<TherapistUpdateWithoutSpecialtiesInput, TherapistUncheckedUpdateWithoutSpecialtiesInput>
    create: XOR<TherapistCreateWithoutSpecialtiesInput, TherapistUncheckedCreateWithoutSpecialtiesInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutSpecialtiesInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutSpecialtiesInput, TherapistUncheckedUpdateWithoutSpecialtiesInput>
  }

  export type TherapistUpdateWithoutSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTherapistNestedInput
    educations?: TherapistEducationUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educations?: TherapistEducationUncheckedUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUncheckedUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistCreateWithoutEducationsInput = {
    id?: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTherapistInput
    specialties?: TherapistSpecialtyCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentCreateNestedManyWithoutTherapistInput
    reviews?: ReviewCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutEducationsInput = {
    id?: string
    userId: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialties?: TherapistSpecialtyUncheckedCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateUncheckedCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTherapistInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutEducationsInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutEducationsInput, TherapistUncheckedCreateWithoutEducationsInput>
  }

  export type TherapistUpsertWithoutEducationsInput = {
    update: XOR<TherapistUpdateWithoutEducationsInput, TherapistUncheckedUpdateWithoutEducationsInput>
    create: XOR<TherapistCreateWithoutEducationsInput, TherapistUncheckedCreateWithoutEducationsInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutEducationsInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutEducationsInput, TherapistUncheckedUpdateWithoutEducationsInput>
  }

  export type TherapistUpdateWithoutEducationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTherapistNestedInput
    specialties?: TherapistSpecialtyUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutEducationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialties?: TherapistSpecialtyUncheckedUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUncheckedUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistCreateWithoutCertificatesInput = {
    id?: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTherapistInput
    specialties?: TherapistSpecialtyCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentCreateNestedManyWithoutTherapistInput
    reviews?: ReviewCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutCertificatesInput = {
    id?: string
    userId: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialties?: TherapistSpecialtyUncheckedCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationUncheckedCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTherapistInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutCertificatesInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutCertificatesInput, TherapistUncheckedCreateWithoutCertificatesInput>
  }

  export type TherapistUpsertWithoutCertificatesInput = {
    update: XOR<TherapistUpdateWithoutCertificatesInput, TherapistUncheckedUpdateWithoutCertificatesInput>
    create: XOR<TherapistCreateWithoutCertificatesInput, TherapistUncheckedCreateWithoutCertificatesInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutCertificatesInput, TherapistUncheckedUpdateWithoutCertificatesInput>
  }

  export type TherapistUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTherapistNestedInput
    specialties?: TherapistSpecialtyUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialties?: TherapistSpecialtyUncheckedUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUncheckedUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type TestAnswerCreateWithoutQuestionInput = {
    id?: string
    answerText: string
    sortOrder?: number
  }

  export type TestAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    answerText: string
    sortOrder?: number
  }

  export type TestAnswerCreateOrConnectWithoutQuestionInput = {
    where: TestAnswerWhereUniqueInput
    create: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type TestAnswerCreateManyQuestionInputEnvelope = {
    data: TestAnswerCreateManyQuestionInput | TestAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type TestAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: TestAnswerWhereUniqueInput
    update: XOR<TestAnswerUpdateWithoutQuestionInput, TestAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type TestAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: TestAnswerWhereUniqueInput
    data: XOR<TestAnswerUpdateWithoutQuestionInput, TestAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type TestAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: TestAnswerScalarWhereInput
    data: XOR<TestAnswerUpdateManyMutationInput, TestAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type TestAnswerScalarWhereInput = {
    AND?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
    OR?: TestAnswerScalarWhereInput[]
    NOT?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
    id?: UuidFilter<"TestAnswer"> | string
    questionId?: UuidFilter<"TestAnswer"> | string
    answerText?: StringFilter<"TestAnswer"> | string
    sortOrder?: IntFilter<"TestAnswer"> | number
  }

  export type TestQuestionCreateWithoutAnswersInput = {
    id?: string
    questionText: string
    dimension?: string | null
    sortOrder?: number
    isActive?: boolean
  }

  export type TestQuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    questionText: string
    dimension?: string | null
    sortOrder?: number
    isActive?: boolean
  }

  export type TestQuestionCreateOrConnectWithoutAnswersInput = {
    where: TestQuestionWhereUniqueInput
    create: XOR<TestQuestionCreateWithoutAnswersInput, TestQuestionUncheckedCreateWithoutAnswersInput>
  }

  export type TestQuestionUpsertWithoutAnswersInput = {
    update: XOR<TestQuestionUpdateWithoutAnswersInput, TestQuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<TestQuestionCreateWithoutAnswersInput, TestQuestionUncheckedCreateWithoutAnswersInput>
    where?: TestQuestionWhereInput
  }

  export type TestQuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: TestQuestionWhereInput
    data: XOR<TestQuestionUpdateWithoutAnswersInput, TestQuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type TestQuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    dimension?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TestQuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    dimension?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutTestResultsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistCreateNestedOneWithoutUserInput
    matches?: TherapistMatchCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutClientInput
    reviews?: ReviewCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutTestResultsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistUncheckedCreateNestedOneWithoutUserInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutTestResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
  }

  export type UserUpsertWithoutTestResultsInput = {
    update: XOR<UserUpdateWithoutTestResultsInput, UserUncheckedUpdateWithoutTestResultsInput>
    create: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestResultsInput, UserUncheckedUpdateWithoutTestResultsInput>
  }

  export type UserUpdateWithoutTestResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneWithoutUserNestedInput
    matches?: TherapistMatchUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutClientNestedInput
    reviews?: ReviewUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutTestResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUncheckedUpdateOneWithoutUserNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutMatchesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistCreateNestedOneWithoutUserInput
    testResults?: ClientTestResultCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutClientInput
    reviews?: ReviewCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutMatchesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistUncheckedCreateNestedOneWithoutUserInput
    testResults?: ClientTestResultUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
  }

  export type TherapistCreateWithoutMatchesInput = {
    id?: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTherapistInput
    specialties?: TherapistSpecialtyCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentCreateNestedManyWithoutTherapistInput
    reviews?: ReviewCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutMatchesInput = {
    id?: string
    userId: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialties?: TherapistSpecialtyUncheckedCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationUncheckedCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateUncheckedCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTherapistInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutMatchesInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutMatchesInput, TherapistUncheckedCreateWithoutMatchesInput>
  }

  export type UserUpsertWithoutMatchesInput = {
    update: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type UserUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneWithoutUserNestedInput
    testResults?: ClientTestResultUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutClientNestedInput
    reviews?: ReviewUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUncheckedUpdateOneWithoutUserNestedInput
    testResults?: ClientTestResultUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TherapistUpsertWithoutMatchesInput = {
    update: XOR<TherapistUpdateWithoutMatchesInput, TherapistUncheckedUpdateWithoutMatchesInput>
    create: XOR<TherapistCreateWithoutMatchesInput, TherapistUncheckedCreateWithoutMatchesInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutMatchesInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutMatchesInput, TherapistUncheckedUpdateWithoutMatchesInput>
  }

  export type TherapistUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTherapistNestedInput
    specialties?: TherapistSpecialtyUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialties?: TherapistSpecialtyUncheckedUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUncheckedUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUncheckedUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type UserCreateWithoutAppointmentsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistCreateNestedOneWithoutUserInput
    testResults?: ClientTestResultCreateNestedManyWithoutUserInput
    matches?: TherapistMatchCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistUncheckedCreateNestedOneWithoutUserInput
    testResults?: ClientTestResultUncheckedCreateNestedManyWithoutUserInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type TherapistCreateWithoutAppointmentsInput = {
    id?: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTherapistInput
    specialties?: TherapistSpecialtyCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchCreateNestedManyWithoutTherapistInput
    reviews?: ReviewCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialties?: TherapistSpecialtyUncheckedCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationUncheckedCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateUncheckedCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutTherapistInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutAppointmentsInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutAppointmentsInput, TherapistUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneWithoutUserNestedInput
    testResults?: ClientTestResultUpdateManyWithoutUserNestedInput
    matches?: TherapistMatchUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUncheckedUpdateOneWithoutUserNestedInput
    testResults?: ClientTestResultUncheckedUpdateManyWithoutUserNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TherapistUpsertWithoutAppointmentsInput = {
    update: XOR<TherapistUpdateWithoutAppointmentsInput, TherapistUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<TherapistCreateWithoutAppointmentsInput, TherapistUncheckedCreateWithoutAppointmentsInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutAppointmentsInput, TherapistUncheckedUpdateWithoutAppointmentsInput>
  }

  export type TherapistUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTherapistNestedInput
    specialties?: TherapistSpecialtyUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialties?: TherapistSpecialtyUncheckedUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUncheckedUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUncheckedUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutTherapistNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistCreateNestedOneWithoutUserInput
    testResults?: ClientTestResultCreateNestedManyWithoutUserInput
    matches?: TherapistMatchCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistUncheckedCreateNestedOneWithoutUserInput
    testResults?: ClientTestResultUncheckedCreateNestedManyWithoutUserInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type TherapistCreateWithoutReviewsInput = {
    id?: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTherapistInput
    specialties?: TherapistSpecialtyCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    title?: string | null
    about?: string | null
    experienceYears?: number
    sessionPrice?: number
    isVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialties?: TherapistSpecialtyUncheckedCreateNestedManyWithoutTherapistInput
    educations?: TherapistEducationUncheckedCreateNestedManyWithoutTherapistInput
    certificates?: TherapistCertificateUncheckedCreateNestedManyWithoutTherapistInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutReviewsInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutReviewsInput, TherapistUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneWithoutUserNestedInput
    testResults?: ClientTestResultUpdateManyWithoutUserNestedInput
    matches?: TherapistMatchUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUncheckedUpdateOneWithoutUserNestedInput
    testResults?: ClientTestResultUncheckedUpdateManyWithoutUserNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TherapistUpsertWithoutReviewsInput = {
    update: XOR<TherapistUpdateWithoutReviewsInput, TherapistUncheckedUpdateWithoutReviewsInput>
    create: XOR<TherapistCreateWithoutReviewsInput, TherapistUncheckedCreateWithoutReviewsInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutReviewsInput, TherapistUncheckedUpdateWithoutReviewsInput>
  }

  export type TherapistUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTherapistNestedInput
    specialties?: TherapistSpecialtyUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: IntFieldUpdateOperationsInput | number
    sessionPrice?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialties?: TherapistSpecialtyUncheckedUpdateManyWithoutTherapistNestedInput
    educations?: TherapistEducationUncheckedUpdateManyWithoutTherapistNestedInput
    certificates?: TherapistCertificateUncheckedUpdateManyWithoutTherapistNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type UserCreateWithoutBlogPostsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistCreateNestedOneWithoutUserInput
    testResults?: ClientTestResultCreateNestedManyWithoutUserInput
    matches?: TherapistMatchCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutClientInput
    reviews?: ReviewCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutBlogPostsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist?: TherapistUncheckedCreateNestedOneWithoutUserInput
    testResults?: ClientTestResultUncheckedCreateNestedManyWithoutUserInput
    matches?: TherapistMatchUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutBlogPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
  }

  export type UserUpsertWithoutBlogPostsInput = {
    update: XOR<UserUpdateWithoutBlogPostsInput, UserUncheckedUpdateWithoutBlogPostsInput>
    create: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogPostsInput, UserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type UserUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneWithoutUserNestedInput
    testResults?: ClientTestResultUpdateManyWithoutUserNestedInput
    matches?: TherapistMatchUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutClientNestedInput
    reviews?: ReviewUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUncheckedUpdateOneWithoutUserNestedInput
    testResults?: ClientTestResultUncheckedUpdateManyWithoutUserNestedInput
    matches?: TherapistMatchUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientTestResultCreateManyUserInput = {
    id?: string
    answers: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TherapistMatchCreateManyUserInput = {
    id?: string
    therapistId: string
    matchScore?: number
    createdAt?: Date | string
  }

  export type AppointmentCreateManyClientInput = {
    id?: string
    therapistId: string
    startTime: Date | string
    endTime: Date | string
    status?: string
    notes?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyClientInput = {
    id?: string
    therapistId: string
    rating: number
    comment?: string | null
    isAnonymous?: boolean
    createdAt?: Date | string
  }

  export type BlogPostCreateManyAuthorInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    coverImage?: string | null
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientTestResultUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTestResultUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTestResultUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: JsonNullValueInput | InputJsonValue
    preferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistMatchUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type TherapistMatchUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistMatchUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistSpecialtyCreateManyTherapistInput = {
    specialty: string
  }

  export type TherapistEducationCreateManyTherapistInput = {
    id?: string
    title: string
    school?: string | null
    year?: number | null
    createdAt?: Date | string
  }

  export type TherapistCertificateCreateManyTherapistInput = {
    id?: string
    fileUrl: string
    fileName?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TherapistMatchCreateManyTherapistInput = {
    id?: string
    userId: string
    matchScore?: number
    createdAt?: Date | string
  }

  export type AppointmentCreateManyTherapistInput = {
    id?: string
    clientId: string
    startTime: Date | string
    endTime: Date | string
    status?: string
    notes?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyTherapistInput = {
    id?: string
    clientId: string
    rating: number
    comment?: string | null
    isAnonymous?: boolean
    createdAt?: Date | string
  }

  export type TherapistSpecialtyUpdateWithoutTherapistInput = {
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type TherapistSpecialtyUncheckedUpdateWithoutTherapistInput = {
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type TherapistSpecialtyUncheckedUpdateManyWithoutTherapistInput = {
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type TherapistEducationUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistEducationUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistEducationUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistCertificateUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistCertificateUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistCertificateUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistMatchUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type TherapistMatchUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistMatchUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAnswerCreateManyQuestionInput = {
    id?: string
    answerText: string
    sortOrder?: number
  }

  export type TestAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type TestAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type TestAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TherapistCountOutputTypeDefaultArgs instead
     */
    export type TherapistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TherapistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestQuestionCountOutputTypeDefaultArgs instead
     */
    export type TestQuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestQuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TherapistDefaultArgs instead
     */
    export type TherapistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TherapistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TherapistSpecialtyDefaultArgs instead
     */
    export type TherapistSpecialtyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TherapistSpecialtyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TherapistEducationDefaultArgs instead
     */
    export type TherapistEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TherapistEducationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TherapistCertificateDefaultArgs instead
     */
    export type TherapistCertificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TherapistCertificateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestQuestionDefaultArgs instead
     */
    export type TestQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestQuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestAnswerDefaultArgs instead
     */
    export type TestAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestAnswerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientTestResultDefaultArgs instead
     */
    export type ClientTestResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientTestResultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TherapistMatchDefaultArgs instead
     */
    export type TherapistMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TherapistMatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppointmentDefaultArgs instead
     */
    export type AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppointmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogPostDefaultArgs instead
     */
    export type BlogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BannerDefaultArgs instead
     */
    export type BannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BannerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SiteSettingDefaultArgs instead
     */
    export type SiteSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteSettingDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}