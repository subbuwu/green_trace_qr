
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Consumer
 * 
 */
export type Consumer = $Result.DefaultSelection<Prisma.$ConsumerPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model RecyclingCenter
 * 
 */
export type RecyclingCenter = $Result.DefaultSelection<Prisma.$RecyclingCenterPayload>
/**
 * Model QRCode
 * 
 */
export type QRCode = $Result.DefaultSelection<Prisma.$QRCodePayload>
/**
 * Model RecyclingHistory
 * 
 */
export type RecyclingHistory = $Result.DefaultSelection<Prisma.$RecyclingHistoryPayload>
/**
 * Model Reward
 * 
 */
export type Reward = $Result.DefaultSelection<Prisma.$RewardPayload>
/**
 * Model RewardRedemption
 * 
 */
export type RewardRedemption = $Result.DefaultSelection<Prisma.$RewardRedemptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  CONSUMER: 'CONSUMER',
  BUSINESS: 'BUSINESS'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const BusinessStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type BusinessStatus = (typeof BusinessStatus)[keyof typeof BusinessStatus]


export const WasteType: {
  PAPER: 'PAPER',
  PLASTIC: 'PLASTIC',
  GLASS: 'GLASS',
  METAL: 'METAL',
  ELECTRONICS: 'ELECTRONICS',
  ORGANIC: 'ORGANIC',
  TEXTILE: 'TEXTILE',
  HAZARDOUS: 'HAZARDOUS',
  OTHER: 'OTHER'
};

export type WasteType = (typeof WasteType)[keyof typeof WasteType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type BusinessStatus = $Enums.BusinessStatus

export const BusinessStatus: typeof $Enums.BusinessStatus

export type WasteType = $Enums.WasteType

export const WasteType: typeof $Enums.WasteType

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consumer`: Exposes CRUD operations for the **Consumer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consumers
    * const consumers = await prisma.consumer.findMany()
    * ```
    */
  get consumer(): Prisma.ConsumerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recyclingCenter`: Exposes CRUD operations for the **RecyclingCenter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecyclingCenters
    * const recyclingCenters = await prisma.recyclingCenter.findMany()
    * ```
    */
  get recyclingCenter(): Prisma.RecyclingCenterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qRCode`: Exposes CRUD operations for the **QRCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QRCodes
    * const qRCodes = await prisma.qRCode.findMany()
    * ```
    */
  get qRCode(): Prisma.QRCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recyclingHistory`: Exposes CRUD operations for the **RecyclingHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecyclingHistories
    * const recyclingHistories = await prisma.recyclingHistory.findMany()
    * ```
    */
  get recyclingHistory(): Prisma.RecyclingHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reward`: Exposes CRUD operations for the **Reward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.reward.findMany()
    * ```
    */
  get reward(): Prisma.RewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rewardRedemption`: Exposes CRUD operations for the **RewardRedemption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RewardRedemptions
    * const rewardRedemptions = await prisma.rewardRedemption.findMany()
    * ```
    */
  get rewardRedemption(): Prisma.RewardRedemptionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Session: 'Session',
    Consumer: 'Consumer',
    Business: 'Business',
    RecyclingCenter: 'RecyclingCenter',
    QRCode: 'QRCode',
    RecyclingHistory: 'RecyclingHistory',
    Reward: 'Reward',
    RewardRedemption: 'RewardRedemption'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "consumer" | "business" | "recyclingCenter" | "qRCode" | "recyclingHistory" | "reward" | "rewardRedemption"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Consumer: {
        payload: Prisma.$ConsumerPayload<ExtArgs>
        fields: Prisma.ConsumerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsumerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsumerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          findFirst: {
            args: Prisma.ConsumerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsumerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          findMany: {
            args: Prisma.ConsumerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>[]
          }
          create: {
            args: Prisma.ConsumerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          createMany: {
            args: Prisma.ConsumerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsumerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>[]
          }
          delete: {
            args: Prisma.ConsumerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          update: {
            args: Prisma.ConsumerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          deleteMany: {
            args: Prisma.ConsumerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsumerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsumerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>[]
          }
          upsert: {
            args: Prisma.ConsumerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          aggregate: {
            args: Prisma.ConsumerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsumer>
          }
          groupBy: {
            args: Prisma.ConsumerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsumerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsumerCountArgs<ExtArgs>
            result: $Utils.Optional<ConsumerCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      RecyclingCenter: {
        payload: Prisma.$RecyclingCenterPayload<ExtArgs>
        fields: Prisma.RecyclingCenterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecyclingCenterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecyclingCenterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload>
          }
          findFirst: {
            args: Prisma.RecyclingCenterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecyclingCenterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload>
          }
          findMany: {
            args: Prisma.RecyclingCenterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload>[]
          }
          create: {
            args: Prisma.RecyclingCenterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload>
          }
          createMany: {
            args: Prisma.RecyclingCenterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecyclingCenterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload>[]
          }
          delete: {
            args: Prisma.RecyclingCenterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload>
          }
          update: {
            args: Prisma.RecyclingCenterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload>
          }
          deleteMany: {
            args: Prisma.RecyclingCenterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecyclingCenterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecyclingCenterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload>[]
          }
          upsert: {
            args: Prisma.RecyclingCenterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingCenterPayload>
          }
          aggregate: {
            args: Prisma.RecyclingCenterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecyclingCenter>
          }
          groupBy: {
            args: Prisma.RecyclingCenterGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecyclingCenterGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecyclingCenterCountArgs<ExtArgs>
            result: $Utils.Optional<RecyclingCenterCountAggregateOutputType> | number
          }
        }
      }
      QRCode: {
        payload: Prisma.$QRCodePayload<ExtArgs>
        fields: Prisma.QRCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QRCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QRCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findFirst: {
            args: Prisma.QRCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QRCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findMany: {
            args: Prisma.QRCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          create: {
            args: Prisma.QRCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          createMany: {
            args: Prisma.QRCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QRCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          delete: {
            args: Prisma.QRCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          update: {
            args: Prisma.QRCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          deleteMany: {
            args: Prisma.QRCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QRCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QRCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          upsert: {
            args: Prisma.QRCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          aggregate: {
            args: Prisma.QRCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQRCode>
          }
          groupBy: {
            args: Prisma.QRCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QRCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QRCodeCountArgs<ExtArgs>
            result: $Utils.Optional<QRCodeCountAggregateOutputType> | number
          }
        }
      }
      RecyclingHistory: {
        payload: Prisma.$RecyclingHistoryPayload<ExtArgs>
        fields: Prisma.RecyclingHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecyclingHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecyclingHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload>
          }
          findFirst: {
            args: Prisma.RecyclingHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecyclingHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload>
          }
          findMany: {
            args: Prisma.RecyclingHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload>[]
          }
          create: {
            args: Prisma.RecyclingHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload>
          }
          createMany: {
            args: Prisma.RecyclingHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecyclingHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload>[]
          }
          delete: {
            args: Prisma.RecyclingHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload>
          }
          update: {
            args: Prisma.RecyclingHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RecyclingHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecyclingHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecyclingHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload>[]
          }
          upsert: {
            args: Prisma.RecyclingHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecyclingHistoryPayload>
          }
          aggregate: {
            args: Prisma.RecyclingHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecyclingHistory>
          }
          groupBy: {
            args: Prisma.RecyclingHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecyclingHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecyclingHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RecyclingHistoryCountAggregateOutputType> | number
          }
        }
      }
      Reward: {
        payload: Prisma.$RewardPayload<ExtArgs>
        fields: Prisma.RewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findFirst: {
            args: Prisma.RewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findMany: {
            args: Prisma.RewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          create: {
            args: Prisma.RewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          createMany: {
            args: Prisma.RewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          delete: {
            args: Prisma.RewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          update: {
            args: Prisma.RewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          deleteMany: {
            args: Prisma.RewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          upsert: {
            args: Prisma.RewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          aggregate: {
            args: Prisma.RewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReward>
          }
          groupBy: {
            args: Prisma.RewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardCountArgs<ExtArgs>
            result: $Utils.Optional<RewardCountAggregateOutputType> | number
          }
        }
      }
      RewardRedemption: {
        payload: Prisma.$RewardRedemptionPayload<ExtArgs>
        fields: Prisma.RewardRedemptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardRedemptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardRedemptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          findFirst: {
            args: Prisma.RewardRedemptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardRedemptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          findMany: {
            args: Prisma.RewardRedemptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[]
          }
          create: {
            args: Prisma.RewardRedemptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          createMany: {
            args: Prisma.RewardRedemptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardRedemptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[]
          }
          delete: {
            args: Prisma.RewardRedemptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          update: {
            args: Prisma.RewardRedemptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          deleteMany: {
            args: Prisma.RewardRedemptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardRedemptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardRedemptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[]
          }
          upsert: {
            args: Prisma.RewardRedemptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          aggregate: {
            args: Prisma.RewardRedemptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewardRedemption>
          }
          groupBy: {
            args: Prisma.RewardRedemptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardRedemptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardRedemptionCountArgs<ExtArgs>
            result: $Utils.Optional<RewardRedemptionCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    consumer?: ConsumerOmit
    business?: BusinessOmit
    recyclingCenter?: RecyclingCenterOmit
    qRCode?: QRCodeOmit
    recyclingHistory?: RecyclingHistoryOmit
    reward?: RewardOmit
    rewardRedemption?: RewardRedemptionOmit
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
    | 'updateManyAndReturn'
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
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type ConsumerCountOutputType
   */

  export type ConsumerCountOutputType = {
    qrCodes: number
    recyclingHistory: number
    rewards: number
  }

  export type ConsumerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCodes?: boolean | ConsumerCountOutputTypeCountQrCodesArgs
    recyclingHistory?: boolean | ConsumerCountOutputTypeCountRecyclingHistoryArgs
    rewards?: boolean | ConsumerCountOutputTypeCountRewardsArgs
  }

  // Custom InputTypes
  /**
   * ConsumerCountOutputType without action
   */
  export type ConsumerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumerCountOutputType
     */
    select?: ConsumerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsumerCountOutputType without action
   */
  export type ConsumerCountOutputTypeCountQrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
  }

  /**
   * ConsumerCountOutputType without action
   */
  export type ConsumerCountOutputTypeCountRecyclingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecyclingHistoryWhereInput
  }

  /**
   * ConsumerCountOutputType without action
   */
  export type ConsumerCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardRedemptionWhereInput
  }


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    recyclingCenters: number
    verifiedQrCodes: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recyclingCenters?: boolean | BusinessCountOutputTypeCountRecyclingCentersArgs
    verifiedQrCodes?: boolean | BusinessCountOutputTypeCountVerifiedQrCodesArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountRecyclingCentersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecyclingCenterWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountVerifiedQrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecyclingHistoryWhereInput
  }


  /**
   * Count Type RecyclingCenterCountOutputType
   */

  export type RecyclingCenterCountOutputType = {
    recyclingHistory: number
  }

  export type RecyclingCenterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recyclingHistory?: boolean | RecyclingCenterCountOutputTypeCountRecyclingHistoryArgs
  }

  // Custom InputTypes
  /**
   * RecyclingCenterCountOutputType without action
   */
  export type RecyclingCenterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenterCountOutputType
     */
    select?: RecyclingCenterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecyclingCenterCountOutputType without action
   */
  export type RecyclingCenterCountOutputTypeCountRecyclingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecyclingHistoryWhereInput
  }


  /**
   * Count Type RewardCountOutputType
   */

  export type RewardCountOutputType = {
    redemptions: number
  }

  export type RewardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemptions?: boolean | RewardCountOutputTypeCountRedemptionsArgs
  }

  // Custom InputTypes
  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardCountOutputType
     */
    select?: RewardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeCountRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardRedemptionWhereInput
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
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    avatar: string | null
    userType: $Enums.UserType | null
    verified: boolean | null
    verificationToken: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    avatar: string | null
    userType: $Enums.UserType | null
    verified: boolean | null
    verificationToken: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    name: number
    phone: number
    avatar: number
    userType: number
    verified: number
    verificationToken: number
    resetPasswordToken: number
    resetPasswordExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    avatar?: true
    userType?: true
    verified?: true
    verificationToken?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    avatar?: true
    userType?: true
    verified?: true
    verificationToken?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    avatar?: true
    userType?: true
    verified?: true
    verificationToken?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
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
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    name: string
    phone: string | null
    avatar: string | null
    userType: $Enums.UserType
    verified: boolean
    verificationToken: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
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
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    avatar?: boolean
    userType?: boolean
    verified?: boolean
    verificationToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    consumer?: boolean | User$consumerArgs<ExtArgs>
    business?: boolean | User$businessArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    avatar?: boolean
    userType?: boolean
    verified?: boolean
    verificationToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    avatar?: boolean
    userType?: boolean
    verified?: boolean
    verificationToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    avatar?: boolean
    userType?: boolean
    verified?: boolean
    verificationToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "password" | "name" | "phone" | "avatar" | "userType" | "verified" | "verificationToken" | "resetPasswordToken" | "resetPasswordExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumer?: boolean | User$consumerArgs<ExtArgs>
    business?: boolean | User$businessArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      consumer: Prisma.$ConsumerPayload<ExtArgs> | null
      business: Prisma.$BusinessPayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      password: string
      name: string
      phone: string | null
      avatar: string | null
      userType: $Enums.UserType
      verified: boolean
      verificationToken: string | null
      resetPasswordToken: string | null
      resetPasswordExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consumer<T extends User$consumerArgs<ExtArgs> = {}>(args?: Subset<T, User$consumerArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    business<T extends User$businessArgs<ExtArgs> = {}>(args?: Subset<T, User$businessArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordExpires: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.consumer
   */
  export type User$consumerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    where?: ConsumerWhereInput
  }

  /**
   * User.business
   */
  export type User$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    token: number
    userId: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    token?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    token?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    token?: true
    userId?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    token: string
    userId: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "token" | "userId" | "expiresAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      token: string
      userId: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Consumer
   */

  export type AggregateConsumer = {
    _count: ConsumerCountAggregateOutputType | null
    _avg: ConsumerAvgAggregateOutputType | null
    _sum: ConsumerSumAggregateOutputType | null
    _min: ConsumerMinAggregateOutputType | null
    _max: ConsumerMaxAggregateOutputType | null
  }

  export type ConsumerAvgAggregateOutputType = {
    points: number | null
  }

  export type ConsumerSumAggregateOutputType = {
    points: number | null
  }

  export type ConsumerMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    location: string | null
    points: number | null
    receiveUpdates: boolean | null
  }

  export type ConsumerMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    location: string | null
    points: number | null
    receiveUpdates: boolean | null
  }

  export type ConsumerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    location: number
    points: number
    receiveUpdates: number
    _all: number
  }


  export type ConsumerAvgAggregateInputType = {
    points?: true
  }

  export type ConsumerSumAggregateInputType = {
    points?: true
  }

  export type ConsumerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    location?: true
    points?: true
    receiveUpdates?: true
  }

  export type ConsumerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    location?: true
    points?: true
    receiveUpdates?: true
  }

  export type ConsumerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    location?: true
    points?: true
    receiveUpdates?: true
    _all?: true
  }

  export type ConsumerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consumer to aggregate.
     */
    where?: ConsumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumers to fetch.
     */
    orderBy?: ConsumerOrderByWithRelationInput | ConsumerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consumers
    **/
    _count?: true | ConsumerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsumerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsumerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsumerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsumerMaxAggregateInputType
  }

  export type GetConsumerAggregateType<T extends ConsumerAggregateArgs> = {
        [P in keyof T & keyof AggregateConsumer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsumer[P]>
      : GetScalarType<T[P], AggregateConsumer[P]>
  }




  export type ConsumerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsumerWhereInput
    orderBy?: ConsumerOrderByWithAggregationInput | ConsumerOrderByWithAggregationInput[]
    by: ConsumerScalarFieldEnum[] | ConsumerScalarFieldEnum
    having?: ConsumerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsumerCountAggregateInputType | true
    _avg?: ConsumerAvgAggregateInputType
    _sum?: ConsumerSumAggregateInputType
    _min?: ConsumerMinAggregateInputType
    _max?: ConsumerMaxAggregateInputType
  }

  export type ConsumerGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    location: string | null
    points: number
    receiveUpdates: boolean
    _count: ConsumerCountAggregateOutputType | null
    _avg: ConsumerAvgAggregateOutputType | null
    _sum: ConsumerSumAggregateOutputType | null
    _min: ConsumerMinAggregateOutputType | null
    _max: ConsumerMaxAggregateOutputType | null
  }

  type GetConsumerGroupByPayload<T extends ConsumerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsumerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsumerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsumerGroupByOutputType[P]>
            : GetScalarType<T[P], ConsumerGroupByOutputType[P]>
        }
      >
    >


  export type ConsumerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    location?: boolean
    points?: boolean
    receiveUpdates?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    qrCodes?: boolean | Consumer$qrCodesArgs<ExtArgs>
    recyclingHistory?: boolean | Consumer$recyclingHistoryArgs<ExtArgs>
    rewards?: boolean | Consumer$rewardsArgs<ExtArgs>
    _count?: boolean | ConsumerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumer"]>

  export type ConsumerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    location?: boolean
    points?: boolean
    receiveUpdates?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumer"]>

  export type ConsumerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    location?: boolean
    points?: boolean
    receiveUpdates?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumer"]>

  export type ConsumerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    location?: boolean
    points?: boolean
    receiveUpdates?: boolean
  }

  export type ConsumerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "location" | "points" | "receiveUpdates", ExtArgs["result"]["consumer"]>
  export type ConsumerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    qrCodes?: boolean | Consumer$qrCodesArgs<ExtArgs>
    recyclingHistory?: boolean | Consumer$recyclingHistoryArgs<ExtArgs>
    rewards?: boolean | Consumer$rewardsArgs<ExtArgs>
    _count?: boolean | ConsumerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsumerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConsumerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConsumerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consumer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      qrCodes: Prisma.$QRCodePayload<ExtArgs>[]
      recyclingHistory: Prisma.$RecyclingHistoryPayload<ExtArgs>[]
      rewards: Prisma.$RewardRedemptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      location: string | null
      points: number
      receiveUpdates: boolean
    }, ExtArgs["result"]["consumer"]>
    composites: {}
  }

  type ConsumerGetPayload<S extends boolean | null | undefined | ConsumerDefaultArgs> = $Result.GetResult<Prisma.$ConsumerPayload, S>

  type ConsumerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsumerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsumerCountAggregateInputType | true
    }

  export interface ConsumerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consumer'], meta: { name: 'Consumer' } }
    /**
     * Find zero or one Consumer that matches the filter.
     * @param {ConsumerFindUniqueArgs} args - Arguments to find a Consumer
     * @example
     * // Get one Consumer
     * const consumer = await prisma.consumer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsumerFindUniqueArgs>(args: SelectSubset<T, ConsumerFindUniqueArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consumer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsumerFindUniqueOrThrowArgs} args - Arguments to find a Consumer
     * @example
     * // Get one Consumer
     * const consumer = await prisma.consumer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsumerFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsumerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consumer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerFindFirstArgs} args - Arguments to find a Consumer
     * @example
     * // Get one Consumer
     * const consumer = await prisma.consumer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsumerFindFirstArgs>(args?: SelectSubset<T, ConsumerFindFirstArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consumer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerFindFirstOrThrowArgs} args - Arguments to find a Consumer
     * @example
     * // Get one Consumer
     * const consumer = await prisma.consumer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsumerFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsumerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consumers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consumers
     * const consumers = await prisma.consumer.findMany()
     * 
     * // Get first 10 Consumers
     * const consumers = await prisma.consumer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consumerWithIdOnly = await prisma.consumer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsumerFindManyArgs>(args?: SelectSubset<T, ConsumerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consumer.
     * @param {ConsumerCreateArgs} args - Arguments to create a Consumer.
     * @example
     * // Create one Consumer
     * const Consumer = await prisma.consumer.create({
     *   data: {
     *     // ... data to create a Consumer
     *   }
     * })
     * 
     */
    create<T extends ConsumerCreateArgs>(args: SelectSubset<T, ConsumerCreateArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consumers.
     * @param {ConsumerCreateManyArgs} args - Arguments to create many Consumers.
     * @example
     * // Create many Consumers
     * const consumer = await prisma.consumer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsumerCreateManyArgs>(args?: SelectSubset<T, ConsumerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consumers and returns the data saved in the database.
     * @param {ConsumerCreateManyAndReturnArgs} args - Arguments to create many Consumers.
     * @example
     * // Create many Consumers
     * const consumer = await prisma.consumer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consumers and only return the `id`
     * const consumerWithIdOnly = await prisma.consumer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsumerCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsumerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consumer.
     * @param {ConsumerDeleteArgs} args - Arguments to delete one Consumer.
     * @example
     * // Delete one Consumer
     * const Consumer = await prisma.consumer.delete({
     *   where: {
     *     // ... filter to delete one Consumer
     *   }
     * })
     * 
     */
    delete<T extends ConsumerDeleteArgs>(args: SelectSubset<T, ConsumerDeleteArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consumer.
     * @param {ConsumerUpdateArgs} args - Arguments to update one Consumer.
     * @example
     * // Update one Consumer
     * const consumer = await prisma.consumer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsumerUpdateArgs>(args: SelectSubset<T, ConsumerUpdateArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consumers.
     * @param {ConsumerDeleteManyArgs} args - Arguments to filter Consumers to delete.
     * @example
     * // Delete a few Consumers
     * const { count } = await prisma.consumer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsumerDeleteManyArgs>(args?: SelectSubset<T, ConsumerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consumers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consumers
     * const consumer = await prisma.consumer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsumerUpdateManyArgs>(args: SelectSubset<T, ConsumerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consumers and returns the data updated in the database.
     * @param {ConsumerUpdateManyAndReturnArgs} args - Arguments to update many Consumers.
     * @example
     * // Update many Consumers
     * const consumer = await prisma.consumer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consumers and only return the `id`
     * const consumerWithIdOnly = await prisma.consumer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsumerUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsumerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consumer.
     * @param {ConsumerUpsertArgs} args - Arguments to update or create a Consumer.
     * @example
     * // Update or create a Consumer
     * const consumer = await prisma.consumer.upsert({
     *   create: {
     *     // ... data to create a Consumer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consumer we want to update
     *   }
     * })
     */
    upsert<T extends ConsumerUpsertArgs>(args: SelectSubset<T, ConsumerUpsertArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consumers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerCountArgs} args - Arguments to filter Consumers to count.
     * @example
     * // Count the number of Consumers
     * const count = await prisma.consumer.count({
     *   where: {
     *     // ... the filter for the Consumers we want to count
     *   }
     * })
    **/
    count<T extends ConsumerCountArgs>(
      args?: Subset<T, ConsumerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsumerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consumer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsumerAggregateArgs>(args: Subset<T, ConsumerAggregateArgs>): Prisma.PrismaPromise<GetConsumerAggregateType<T>>

    /**
     * Group by Consumer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerGroupByArgs} args - Group by arguments.
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
      T extends ConsumerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsumerGroupByArgs['orderBy'] }
        : { orderBy?: ConsumerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsumerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsumerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consumer model
   */
  readonly fields: ConsumerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consumer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsumerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qrCodes<T extends Consumer$qrCodesArgs<ExtArgs> = {}>(args?: Subset<T, Consumer$qrCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recyclingHistory<T extends Consumer$recyclingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Consumer$recyclingHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rewards<T extends Consumer$rewardsArgs<ExtArgs> = {}>(args?: Subset<T, Consumer$rewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Consumer model
   */
  interface ConsumerFieldRefs {
    readonly id: FieldRef<"Consumer", 'String'>
    readonly createdAt: FieldRef<"Consumer", 'DateTime'>
    readonly updatedAt: FieldRef<"Consumer", 'DateTime'>
    readonly userId: FieldRef<"Consumer", 'String'>
    readonly location: FieldRef<"Consumer", 'String'>
    readonly points: FieldRef<"Consumer", 'Int'>
    readonly receiveUpdates: FieldRef<"Consumer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Consumer findUnique
   */
  export type ConsumerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter, which Consumer to fetch.
     */
    where: ConsumerWhereUniqueInput
  }

  /**
   * Consumer findUniqueOrThrow
   */
  export type ConsumerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter, which Consumer to fetch.
     */
    where: ConsumerWhereUniqueInput
  }

  /**
   * Consumer findFirst
   */
  export type ConsumerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter, which Consumer to fetch.
     */
    where?: ConsumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumers to fetch.
     */
    orderBy?: ConsumerOrderByWithRelationInput | ConsumerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consumers.
     */
    cursor?: ConsumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consumers.
     */
    distinct?: ConsumerScalarFieldEnum | ConsumerScalarFieldEnum[]
  }

  /**
   * Consumer findFirstOrThrow
   */
  export type ConsumerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter, which Consumer to fetch.
     */
    where?: ConsumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumers to fetch.
     */
    orderBy?: ConsumerOrderByWithRelationInput | ConsumerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consumers.
     */
    cursor?: ConsumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consumers.
     */
    distinct?: ConsumerScalarFieldEnum | ConsumerScalarFieldEnum[]
  }

  /**
   * Consumer findMany
   */
  export type ConsumerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter, which Consumers to fetch.
     */
    where?: ConsumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumers to fetch.
     */
    orderBy?: ConsumerOrderByWithRelationInput | ConsumerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consumers.
     */
    cursor?: ConsumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumers.
     */
    skip?: number
    distinct?: ConsumerScalarFieldEnum | ConsumerScalarFieldEnum[]
  }

  /**
   * Consumer create
   */
  export type ConsumerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * The data needed to create a Consumer.
     */
    data: XOR<ConsumerCreateInput, ConsumerUncheckedCreateInput>
  }

  /**
   * Consumer createMany
   */
  export type ConsumerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consumers.
     */
    data: ConsumerCreateManyInput | ConsumerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consumer createManyAndReturn
   */
  export type ConsumerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * The data used to create many Consumers.
     */
    data: ConsumerCreateManyInput | ConsumerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consumer update
   */
  export type ConsumerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * The data needed to update a Consumer.
     */
    data: XOR<ConsumerUpdateInput, ConsumerUncheckedUpdateInput>
    /**
     * Choose, which Consumer to update.
     */
    where: ConsumerWhereUniqueInput
  }

  /**
   * Consumer updateMany
   */
  export type ConsumerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consumers.
     */
    data: XOR<ConsumerUpdateManyMutationInput, ConsumerUncheckedUpdateManyInput>
    /**
     * Filter which Consumers to update
     */
    where?: ConsumerWhereInput
    /**
     * Limit how many Consumers to update.
     */
    limit?: number
  }

  /**
   * Consumer updateManyAndReturn
   */
  export type ConsumerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * The data used to update Consumers.
     */
    data: XOR<ConsumerUpdateManyMutationInput, ConsumerUncheckedUpdateManyInput>
    /**
     * Filter which Consumers to update
     */
    where?: ConsumerWhereInput
    /**
     * Limit how many Consumers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consumer upsert
   */
  export type ConsumerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * The filter to search for the Consumer to update in case it exists.
     */
    where: ConsumerWhereUniqueInput
    /**
     * In case the Consumer found by the `where` argument doesn't exist, create a new Consumer with this data.
     */
    create: XOR<ConsumerCreateInput, ConsumerUncheckedCreateInput>
    /**
     * In case the Consumer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsumerUpdateInput, ConsumerUncheckedUpdateInput>
  }

  /**
   * Consumer delete
   */
  export type ConsumerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter which Consumer to delete.
     */
    where: ConsumerWhereUniqueInput
  }

  /**
   * Consumer deleteMany
   */
  export type ConsumerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consumers to delete
     */
    where?: ConsumerWhereInput
    /**
     * Limit how many Consumers to delete.
     */
    limit?: number
  }

  /**
   * Consumer.qrCodes
   */
  export type Consumer$qrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    cursor?: QRCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * Consumer.recyclingHistory
   */
  export type Consumer$recyclingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    where?: RecyclingHistoryWhereInput
    orderBy?: RecyclingHistoryOrderByWithRelationInput | RecyclingHistoryOrderByWithRelationInput[]
    cursor?: RecyclingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecyclingHistoryScalarFieldEnum | RecyclingHistoryScalarFieldEnum[]
  }

  /**
   * Consumer.rewards
   */
  export type Consumer$rewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    where?: RewardRedemptionWhereInput
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    cursor?: RewardRedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * Consumer without action
   */
  export type ConsumerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessAvgAggregateOutputType = {
    points: number | null
  }

  export type BusinessSumAggregateOutputType = {
    points: number | null
  }

  export type BusinessMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    businessName: string | null
    businessAddress: string | null
    businessType: string | null
    description: string | null
    logo: string | null
    coverImage: string | null
    website: string | null
    status: $Enums.BusinessStatus | null
    verificationDocument: string | null
    points: number | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    businessName: string | null
    businessAddress: string | null
    businessType: string | null
    description: string | null
    logo: string | null
    coverImage: string | null
    website: string | null
    status: $Enums.BusinessStatus | null
    verificationDocument: string | null
    points: number | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    businessName: number
    businessAddress: number
    businessType: number
    description: number
    logo: number
    coverImage: number
    website: number
    socialLinks: number
    status: number
    verificationDocument: number
    points: number
    _all: number
  }


  export type BusinessAvgAggregateInputType = {
    points?: true
  }

  export type BusinessSumAggregateInputType = {
    points?: true
  }

  export type BusinessMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    businessName?: true
    businessAddress?: true
    businessType?: true
    description?: true
    logo?: true
    coverImage?: true
    website?: true
    status?: true
    verificationDocument?: true
    points?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    businessName?: true
    businessAddress?: true
    businessType?: true
    description?: true
    logo?: true
    coverImage?: true
    website?: true
    status?: true
    verificationDocument?: true
    points?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    businessName?: true
    businessAddress?: true
    businessType?: true
    description?: true
    logo?: true
    coverImage?: true
    website?: true
    socialLinks?: true
    status?: true
    verificationDocument?: true
    points?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _avg?: BusinessAvgAggregateInputType
    _sum?: BusinessSumAggregateInputType
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    businessName: string
    businessAddress: string
    businessType: string
    description: string | null
    logo: string | null
    coverImage: string | null
    website: string | null
    socialLinks: JsonValue | null
    status: $Enums.BusinessStatus
    verificationDocument: string | null
    points: number
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    businessName?: boolean
    businessAddress?: boolean
    businessType?: boolean
    description?: boolean
    logo?: boolean
    coverImage?: boolean
    website?: boolean
    socialLinks?: boolean
    status?: boolean
    verificationDocument?: boolean
    points?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recyclingCenters?: boolean | Business$recyclingCentersArgs<ExtArgs>
    verifiedQrCodes?: boolean | Business$verifiedQrCodesArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    businessName?: boolean
    businessAddress?: boolean
    businessType?: boolean
    description?: boolean
    logo?: boolean
    coverImage?: boolean
    website?: boolean
    socialLinks?: boolean
    status?: boolean
    verificationDocument?: boolean
    points?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    businessName?: boolean
    businessAddress?: boolean
    businessType?: boolean
    description?: boolean
    logo?: boolean
    coverImage?: boolean
    website?: boolean
    socialLinks?: boolean
    status?: boolean
    verificationDocument?: boolean
    points?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    businessName?: boolean
    businessAddress?: boolean
    businessType?: boolean
    description?: boolean
    logo?: boolean
    coverImage?: boolean
    website?: boolean
    socialLinks?: boolean
    status?: boolean
    verificationDocument?: boolean
    points?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "businessName" | "businessAddress" | "businessType" | "description" | "logo" | "coverImage" | "website" | "socialLinks" | "status" | "verificationDocument" | "points", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recyclingCenters?: boolean | Business$recyclingCentersArgs<ExtArgs>
    verifiedQrCodes?: boolean | Business$verifiedQrCodesArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recyclingCenters: Prisma.$RecyclingCenterPayload<ExtArgs>[]
      verifiedQrCodes: Prisma.$RecyclingHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      businessName: string
      businessAddress: string
      businessType: string
      description: string | null
      logo: string | null
      coverImage: string | null
      website: string | null
      socialLinks: Prisma.JsonValue | null
      status: $Enums.BusinessStatus
      verificationDocument: string | null
      points: number
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
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
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recyclingCenters<T extends Business$recyclingCentersArgs<ExtArgs> = {}>(args?: Subset<T, Business$recyclingCentersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifiedQrCodes<T extends Business$verifiedQrCodesArgs<ExtArgs> = {}>(args?: Subset<T, Business$verifiedQrCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
    readonly userId: FieldRef<"Business", 'String'>
    readonly businessName: FieldRef<"Business", 'String'>
    readonly businessAddress: FieldRef<"Business", 'String'>
    readonly businessType: FieldRef<"Business", 'String'>
    readonly description: FieldRef<"Business", 'String'>
    readonly logo: FieldRef<"Business", 'String'>
    readonly coverImage: FieldRef<"Business", 'String'>
    readonly website: FieldRef<"Business", 'String'>
    readonly socialLinks: FieldRef<"Business", 'Json'>
    readonly status: FieldRef<"Business", 'BusinessStatus'>
    readonly verificationDocument: FieldRef<"Business", 'String'>
    readonly points: FieldRef<"Business", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business updateManyAndReturn
   */
  export type BusinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.recyclingCenters
   */
  export type Business$recyclingCentersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
    where?: RecyclingCenterWhereInput
    orderBy?: RecyclingCenterOrderByWithRelationInput | RecyclingCenterOrderByWithRelationInput[]
    cursor?: RecyclingCenterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecyclingCenterScalarFieldEnum | RecyclingCenterScalarFieldEnum[]
  }

  /**
   * Business.verifiedQrCodes
   */
  export type Business$verifiedQrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    where?: RecyclingHistoryWhereInput
    orderBy?: RecyclingHistoryOrderByWithRelationInput | RecyclingHistoryOrderByWithRelationInput[]
    cursor?: RecyclingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecyclingHistoryScalarFieldEnum | RecyclingHistoryScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model RecyclingCenter
   */

  export type AggregateRecyclingCenter = {
    _count: RecyclingCenterCountAggregateOutputType | null
    _avg: RecyclingCenterAvgAggregateOutputType | null
    _sum: RecyclingCenterSumAggregateOutputType | null
    _min: RecyclingCenterMinAggregateOutputType | null
    _max: RecyclingCenterMaxAggregateOutputType | null
  }

  export type RecyclingCenterAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type RecyclingCenterSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type RecyclingCenterMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    businessId: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
    email: string | null
    website: string | null
    image: string | null
    description: string | null
    isActive: boolean | null
  }

  export type RecyclingCenterMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    businessId: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
    email: string | null
    website: string | null
    image: string | null
    description: string | null
    isActive: boolean | null
  }

  export type RecyclingCenterCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    businessId: number
    name: number
    address: number
    latitude: number
    longitude: number
    operatingHours: number
    phone: number
    email: number
    website: number
    image: number
    description: number
    acceptedWasteTypes: number
    pointsPerWasteType: number
    isActive: number
    _all: number
  }


  export type RecyclingCenterAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type RecyclingCenterSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type RecyclingCenterMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    businessId?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    website?: true
    image?: true
    description?: true
    isActive?: true
  }

  export type RecyclingCenterMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    businessId?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    website?: true
    image?: true
    description?: true
    isActive?: true
  }

  export type RecyclingCenterCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    businessId?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    operatingHours?: true
    phone?: true
    email?: true
    website?: true
    image?: true
    description?: true
    acceptedWasteTypes?: true
    pointsPerWasteType?: true
    isActive?: true
    _all?: true
  }

  export type RecyclingCenterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecyclingCenter to aggregate.
     */
    where?: RecyclingCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingCenters to fetch.
     */
    orderBy?: RecyclingCenterOrderByWithRelationInput | RecyclingCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecyclingCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecyclingCenters
    **/
    _count?: true | RecyclingCenterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecyclingCenterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecyclingCenterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecyclingCenterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecyclingCenterMaxAggregateInputType
  }

  export type GetRecyclingCenterAggregateType<T extends RecyclingCenterAggregateArgs> = {
        [P in keyof T & keyof AggregateRecyclingCenter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecyclingCenter[P]>
      : GetScalarType<T[P], AggregateRecyclingCenter[P]>
  }




  export type RecyclingCenterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecyclingCenterWhereInput
    orderBy?: RecyclingCenterOrderByWithAggregationInput | RecyclingCenterOrderByWithAggregationInput[]
    by: RecyclingCenterScalarFieldEnum[] | RecyclingCenterScalarFieldEnum
    having?: RecyclingCenterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecyclingCenterCountAggregateInputType | true
    _avg?: RecyclingCenterAvgAggregateInputType
    _sum?: RecyclingCenterSumAggregateInputType
    _min?: RecyclingCenterMinAggregateInputType
    _max?: RecyclingCenterMaxAggregateInputType
  }

  export type RecyclingCenterGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    businessId: string
    name: string
    address: string
    latitude: number | null
    longitude: number | null
    operatingHours: JsonValue | null
    phone: string | null
    email: string | null
    website: string | null
    image: string | null
    description: string | null
    acceptedWasteTypes: $Enums.WasteType[]
    pointsPerWasteType: JsonValue | null
    isActive: boolean
    _count: RecyclingCenterCountAggregateOutputType | null
    _avg: RecyclingCenterAvgAggregateOutputType | null
    _sum: RecyclingCenterSumAggregateOutputType | null
    _min: RecyclingCenterMinAggregateOutputType | null
    _max: RecyclingCenterMaxAggregateOutputType | null
  }

  type GetRecyclingCenterGroupByPayload<T extends RecyclingCenterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecyclingCenterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecyclingCenterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecyclingCenterGroupByOutputType[P]>
            : GetScalarType<T[P], RecyclingCenterGroupByOutputType[P]>
        }
      >
    >


  export type RecyclingCenterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessId?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    operatingHours?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    image?: boolean
    description?: boolean
    acceptedWasteTypes?: boolean
    pointsPerWasteType?: boolean
    isActive?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    recyclingHistory?: boolean | RecyclingCenter$recyclingHistoryArgs<ExtArgs>
    _count?: boolean | RecyclingCenterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recyclingCenter"]>

  export type RecyclingCenterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessId?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    operatingHours?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    image?: boolean
    description?: boolean
    acceptedWasteTypes?: boolean
    pointsPerWasteType?: boolean
    isActive?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recyclingCenter"]>

  export type RecyclingCenterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessId?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    operatingHours?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    image?: boolean
    description?: boolean
    acceptedWasteTypes?: boolean
    pointsPerWasteType?: boolean
    isActive?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recyclingCenter"]>

  export type RecyclingCenterSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessId?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    operatingHours?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    image?: boolean
    description?: boolean
    acceptedWasteTypes?: boolean
    pointsPerWasteType?: boolean
    isActive?: boolean
  }

  export type RecyclingCenterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "businessId" | "name" | "address" | "latitude" | "longitude" | "operatingHours" | "phone" | "email" | "website" | "image" | "description" | "acceptedWasteTypes" | "pointsPerWasteType" | "isActive", ExtArgs["result"]["recyclingCenter"]>
  export type RecyclingCenterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    recyclingHistory?: boolean | RecyclingCenter$recyclingHistoryArgs<ExtArgs>
    _count?: boolean | RecyclingCenterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecyclingCenterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type RecyclingCenterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $RecyclingCenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecyclingCenter"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      recyclingHistory: Prisma.$RecyclingHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      businessId: string
      name: string
      address: string
      latitude: number | null
      longitude: number | null
      operatingHours: Prisma.JsonValue | null
      phone: string | null
      email: string | null
      website: string | null
      image: string | null
      description: string | null
      acceptedWasteTypes: $Enums.WasteType[]
      pointsPerWasteType: Prisma.JsonValue | null
      isActive: boolean
    }, ExtArgs["result"]["recyclingCenter"]>
    composites: {}
  }

  type RecyclingCenterGetPayload<S extends boolean | null | undefined | RecyclingCenterDefaultArgs> = $Result.GetResult<Prisma.$RecyclingCenterPayload, S>

  type RecyclingCenterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecyclingCenterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecyclingCenterCountAggregateInputType | true
    }

  export interface RecyclingCenterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecyclingCenter'], meta: { name: 'RecyclingCenter' } }
    /**
     * Find zero or one RecyclingCenter that matches the filter.
     * @param {RecyclingCenterFindUniqueArgs} args - Arguments to find a RecyclingCenter
     * @example
     * // Get one RecyclingCenter
     * const recyclingCenter = await prisma.recyclingCenter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecyclingCenterFindUniqueArgs>(args: SelectSubset<T, RecyclingCenterFindUniqueArgs<ExtArgs>>): Prisma__RecyclingCenterClient<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecyclingCenter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecyclingCenterFindUniqueOrThrowArgs} args - Arguments to find a RecyclingCenter
     * @example
     * // Get one RecyclingCenter
     * const recyclingCenter = await prisma.recyclingCenter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecyclingCenterFindUniqueOrThrowArgs>(args: SelectSubset<T, RecyclingCenterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecyclingCenterClient<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecyclingCenter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingCenterFindFirstArgs} args - Arguments to find a RecyclingCenter
     * @example
     * // Get one RecyclingCenter
     * const recyclingCenter = await prisma.recyclingCenter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecyclingCenterFindFirstArgs>(args?: SelectSubset<T, RecyclingCenterFindFirstArgs<ExtArgs>>): Prisma__RecyclingCenterClient<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecyclingCenter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingCenterFindFirstOrThrowArgs} args - Arguments to find a RecyclingCenter
     * @example
     * // Get one RecyclingCenter
     * const recyclingCenter = await prisma.recyclingCenter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecyclingCenterFindFirstOrThrowArgs>(args?: SelectSubset<T, RecyclingCenterFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecyclingCenterClient<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecyclingCenters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingCenterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecyclingCenters
     * const recyclingCenters = await prisma.recyclingCenter.findMany()
     * 
     * // Get first 10 RecyclingCenters
     * const recyclingCenters = await prisma.recyclingCenter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recyclingCenterWithIdOnly = await prisma.recyclingCenter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecyclingCenterFindManyArgs>(args?: SelectSubset<T, RecyclingCenterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecyclingCenter.
     * @param {RecyclingCenterCreateArgs} args - Arguments to create a RecyclingCenter.
     * @example
     * // Create one RecyclingCenter
     * const RecyclingCenter = await prisma.recyclingCenter.create({
     *   data: {
     *     // ... data to create a RecyclingCenter
     *   }
     * })
     * 
     */
    create<T extends RecyclingCenterCreateArgs>(args: SelectSubset<T, RecyclingCenterCreateArgs<ExtArgs>>): Prisma__RecyclingCenterClient<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecyclingCenters.
     * @param {RecyclingCenterCreateManyArgs} args - Arguments to create many RecyclingCenters.
     * @example
     * // Create many RecyclingCenters
     * const recyclingCenter = await prisma.recyclingCenter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecyclingCenterCreateManyArgs>(args?: SelectSubset<T, RecyclingCenterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecyclingCenters and returns the data saved in the database.
     * @param {RecyclingCenterCreateManyAndReturnArgs} args - Arguments to create many RecyclingCenters.
     * @example
     * // Create many RecyclingCenters
     * const recyclingCenter = await prisma.recyclingCenter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecyclingCenters and only return the `id`
     * const recyclingCenterWithIdOnly = await prisma.recyclingCenter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecyclingCenterCreateManyAndReturnArgs>(args?: SelectSubset<T, RecyclingCenterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecyclingCenter.
     * @param {RecyclingCenterDeleteArgs} args - Arguments to delete one RecyclingCenter.
     * @example
     * // Delete one RecyclingCenter
     * const RecyclingCenter = await prisma.recyclingCenter.delete({
     *   where: {
     *     // ... filter to delete one RecyclingCenter
     *   }
     * })
     * 
     */
    delete<T extends RecyclingCenterDeleteArgs>(args: SelectSubset<T, RecyclingCenterDeleteArgs<ExtArgs>>): Prisma__RecyclingCenterClient<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecyclingCenter.
     * @param {RecyclingCenterUpdateArgs} args - Arguments to update one RecyclingCenter.
     * @example
     * // Update one RecyclingCenter
     * const recyclingCenter = await prisma.recyclingCenter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecyclingCenterUpdateArgs>(args: SelectSubset<T, RecyclingCenterUpdateArgs<ExtArgs>>): Prisma__RecyclingCenterClient<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecyclingCenters.
     * @param {RecyclingCenterDeleteManyArgs} args - Arguments to filter RecyclingCenters to delete.
     * @example
     * // Delete a few RecyclingCenters
     * const { count } = await prisma.recyclingCenter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecyclingCenterDeleteManyArgs>(args?: SelectSubset<T, RecyclingCenterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecyclingCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingCenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecyclingCenters
     * const recyclingCenter = await prisma.recyclingCenter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecyclingCenterUpdateManyArgs>(args: SelectSubset<T, RecyclingCenterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecyclingCenters and returns the data updated in the database.
     * @param {RecyclingCenterUpdateManyAndReturnArgs} args - Arguments to update many RecyclingCenters.
     * @example
     * // Update many RecyclingCenters
     * const recyclingCenter = await prisma.recyclingCenter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecyclingCenters and only return the `id`
     * const recyclingCenterWithIdOnly = await prisma.recyclingCenter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecyclingCenterUpdateManyAndReturnArgs>(args: SelectSubset<T, RecyclingCenterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecyclingCenter.
     * @param {RecyclingCenterUpsertArgs} args - Arguments to update or create a RecyclingCenter.
     * @example
     * // Update or create a RecyclingCenter
     * const recyclingCenter = await prisma.recyclingCenter.upsert({
     *   create: {
     *     // ... data to create a RecyclingCenter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecyclingCenter we want to update
     *   }
     * })
     */
    upsert<T extends RecyclingCenterUpsertArgs>(args: SelectSubset<T, RecyclingCenterUpsertArgs<ExtArgs>>): Prisma__RecyclingCenterClient<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecyclingCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingCenterCountArgs} args - Arguments to filter RecyclingCenters to count.
     * @example
     * // Count the number of RecyclingCenters
     * const count = await prisma.recyclingCenter.count({
     *   where: {
     *     // ... the filter for the RecyclingCenters we want to count
     *   }
     * })
    **/
    count<T extends RecyclingCenterCountArgs>(
      args?: Subset<T, RecyclingCenterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecyclingCenterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecyclingCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingCenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecyclingCenterAggregateArgs>(args: Subset<T, RecyclingCenterAggregateArgs>): Prisma.PrismaPromise<GetRecyclingCenterAggregateType<T>>

    /**
     * Group by RecyclingCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingCenterGroupByArgs} args - Group by arguments.
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
      T extends RecyclingCenterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecyclingCenterGroupByArgs['orderBy'] }
        : { orderBy?: RecyclingCenterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecyclingCenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecyclingCenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecyclingCenter model
   */
  readonly fields: RecyclingCenterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecyclingCenter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecyclingCenterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recyclingHistory<T extends RecyclingCenter$recyclingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, RecyclingCenter$recyclingHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RecyclingCenter model
   */
  interface RecyclingCenterFieldRefs {
    readonly id: FieldRef<"RecyclingCenter", 'String'>
    readonly createdAt: FieldRef<"RecyclingCenter", 'DateTime'>
    readonly updatedAt: FieldRef<"RecyclingCenter", 'DateTime'>
    readonly businessId: FieldRef<"RecyclingCenter", 'String'>
    readonly name: FieldRef<"RecyclingCenter", 'String'>
    readonly address: FieldRef<"RecyclingCenter", 'String'>
    readonly latitude: FieldRef<"RecyclingCenter", 'Float'>
    readonly longitude: FieldRef<"RecyclingCenter", 'Float'>
    readonly operatingHours: FieldRef<"RecyclingCenter", 'Json'>
    readonly phone: FieldRef<"RecyclingCenter", 'String'>
    readonly email: FieldRef<"RecyclingCenter", 'String'>
    readonly website: FieldRef<"RecyclingCenter", 'String'>
    readonly image: FieldRef<"RecyclingCenter", 'String'>
    readonly description: FieldRef<"RecyclingCenter", 'String'>
    readonly acceptedWasteTypes: FieldRef<"RecyclingCenter", 'WasteType[]'>
    readonly pointsPerWasteType: FieldRef<"RecyclingCenter", 'Json'>
    readonly isActive: FieldRef<"RecyclingCenter", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RecyclingCenter findUnique
   */
  export type RecyclingCenterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingCenter to fetch.
     */
    where: RecyclingCenterWhereUniqueInput
  }

  /**
   * RecyclingCenter findUniqueOrThrow
   */
  export type RecyclingCenterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingCenter to fetch.
     */
    where: RecyclingCenterWhereUniqueInput
  }

  /**
   * RecyclingCenter findFirst
   */
  export type RecyclingCenterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingCenter to fetch.
     */
    where?: RecyclingCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingCenters to fetch.
     */
    orderBy?: RecyclingCenterOrderByWithRelationInput | RecyclingCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecyclingCenters.
     */
    cursor?: RecyclingCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecyclingCenters.
     */
    distinct?: RecyclingCenterScalarFieldEnum | RecyclingCenterScalarFieldEnum[]
  }

  /**
   * RecyclingCenter findFirstOrThrow
   */
  export type RecyclingCenterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingCenter to fetch.
     */
    where?: RecyclingCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingCenters to fetch.
     */
    orderBy?: RecyclingCenterOrderByWithRelationInput | RecyclingCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecyclingCenters.
     */
    cursor?: RecyclingCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecyclingCenters.
     */
    distinct?: RecyclingCenterScalarFieldEnum | RecyclingCenterScalarFieldEnum[]
  }

  /**
   * RecyclingCenter findMany
   */
  export type RecyclingCenterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingCenters to fetch.
     */
    where?: RecyclingCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingCenters to fetch.
     */
    orderBy?: RecyclingCenterOrderByWithRelationInput | RecyclingCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecyclingCenters.
     */
    cursor?: RecyclingCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingCenters.
     */
    skip?: number
    distinct?: RecyclingCenterScalarFieldEnum | RecyclingCenterScalarFieldEnum[]
  }

  /**
   * RecyclingCenter create
   */
  export type RecyclingCenterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
    /**
     * The data needed to create a RecyclingCenter.
     */
    data: XOR<RecyclingCenterCreateInput, RecyclingCenterUncheckedCreateInput>
  }

  /**
   * RecyclingCenter createMany
   */
  export type RecyclingCenterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecyclingCenters.
     */
    data: RecyclingCenterCreateManyInput | RecyclingCenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecyclingCenter createManyAndReturn
   */
  export type RecyclingCenterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * The data used to create many RecyclingCenters.
     */
    data: RecyclingCenterCreateManyInput | RecyclingCenterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecyclingCenter update
   */
  export type RecyclingCenterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
    /**
     * The data needed to update a RecyclingCenter.
     */
    data: XOR<RecyclingCenterUpdateInput, RecyclingCenterUncheckedUpdateInput>
    /**
     * Choose, which RecyclingCenter to update.
     */
    where: RecyclingCenterWhereUniqueInput
  }

  /**
   * RecyclingCenter updateMany
   */
  export type RecyclingCenterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecyclingCenters.
     */
    data: XOR<RecyclingCenterUpdateManyMutationInput, RecyclingCenterUncheckedUpdateManyInput>
    /**
     * Filter which RecyclingCenters to update
     */
    where?: RecyclingCenterWhereInput
    /**
     * Limit how many RecyclingCenters to update.
     */
    limit?: number
  }

  /**
   * RecyclingCenter updateManyAndReturn
   */
  export type RecyclingCenterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * The data used to update RecyclingCenters.
     */
    data: XOR<RecyclingCenterUpdateManyMutationInput, RecyclingCenterUncheckedUpdateManyInput>
    /**
     * Filter which RecyclingCenters to update
     */
    where?: RecyclingCenterWhereInput
    /**
     * Limit how many RecyclingCenters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecyclingCenter upsert
   */
  export type RecyclingCenterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
    /**
     * The filter to search for the RecyclingCenter to update in case it exists.
     */
    where: RecyclingCenterWhereUniqueInput
    /**
     * In case the RecyclingCenter found by the `where` argument doesn't exist, create a new RecyclingCenter with this data.
     */
    create: XOR<RecyclingCenterCreateInput, RecyclingCenterUncheckedCreateInput>
    /**
     * In case the RecyclingCenter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecyclingCenterUpdateInput, RecyclingCenterUncheckedUpdateInput>
  }

  /**
   * RecyclingCenter delete
   */
  export type RecyclingCenterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
    /**
     * Filter which RecyclingCenter to delete.
     */
    where: RecyclingCenterWhereUniqueInput
  }

  /**
   * RecyclingCenter deleteMany
   */
  export type RecyclingCenterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecyclingCenters to delete
     */
    where?: RecyclingCenterWhereInput
    /**
     * Limit how many RecyclingCenters to delete.
     */
    limit?: number
  }

  /**
   * RecyclingCenter.recyclingHistory
   */
  export type RecyclingCenter$recyclingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    where?: RecyclingHistoryWhereInput
    orderBy?: RecyclingHistoryOrderByWithRelationInput | RecyclingHistoryOrderByWithRelationInput[]
    cursor?: RecyclingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecyclingHistoryScalarFieldEnum | RecyclingHistoryScalarFieldEnum[]
  }

  /**
   * RecyclingCenter without action
   */
  export type RecyclingCenterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingCenter
     */
    select?: RecyclingCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingCenter
     */
    omit?: RecyclingCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingCenterInclude<ExtArgs> | null
  }


  /**
   * Model QRCode
   */

  export type AggregateQRCode = {
    _count: QRCodeCountAggregateOutputType | null
    _avg: QRCodeAvgAggregateOutputType | null
    _sum: QRCodeSumAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  export type QRCodeAvgAggregateOutputType = {
    quantity: number | null
  }

  export type QRCodeSumAggregateOutputType = {
    quantity: number | null
  }

  export type QRCodeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    consumerId: string | null
    wasteType: $Enums.WasteType | null
    quantity: number | null
    unit: string | null
    description: string | null
    qrCodeUrl: string | null
    isVerified: boolean | null
  }

  export type QRCodeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    consumerId: string | null
    wasteType: $Enums.WasteType | null
    quantity: number | null
    unit: string | null
    description: string | null
    qrCodeUrl: string | null
    isVerified: boolean | null
  }

  export type QRCodeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    consumerId: number
    wasteType: number
    quantity: number
    unit: number
    description: number
    photos: number
    qrCodeUrl: number
    isVerified: number
    _all: number
  }


  export type QRCodeAvgAggregateInputType = {
    quantity?: true
  }

  export type QRCodeSumAggregateInputType = {
    quantity?: true
  }

  export type QRCodeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    consumerId?: true
    wasteType?: true
    quantity?: true
    unit?: true
    description?: true
    qrCodeUrl?: true
    isVerified?: true
  }

  export type QRCodeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    consumerId?: true
    wasteType?: true
    quantity?: true
    unit?: true
    description?: true
    qrCodeUrl?: true
    isVerified?: true
  }

  export type QRCodeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    consumerId?: true
    wasteType?: true
    quantity?: true
    unit?: true
    description?: true
    photos?: true
    qrCodeUrl?: true
    isVerified?: true
    _all?: true
  }

  export type QRCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCode to aggregate.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QRCodes
    **/
    _count?: true | QRCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QRCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QRCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QRCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QRCodeMaxAggregateInputType
  }

  export type GetQRCodeAggregateType<T extends QRCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateQRCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQRCode[P]>
      : GetScalarType<T[P], AggregateQRCode[P]>
  }




  export type QRCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithAggregationInput | QRCodeOrderByWithAggregationInput[]
    by: QRCodeScalarFieldEnum[] | QRCodeScalarFieldEnum
    having?: QRCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QRCodeCountAggregateInputType | true
    _avg?: QRCodeAvgAggregateInputType
    _sum?: QRCodeSumAggregateInputType
    _min?: QRCodeMinAggregateInputType
    _max?: QRCodeMaxAggregateInputType
  }

  export type QRCodeGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    consumerId: string
    wasteType: $Enums.WasteType
    quantity: number
    unit: string
    description: string | null
    photos: string[]
    qrCodeUrl: string
    isVerified: boolean
    _count: QRCodeCountAggregateOutputType | null
    _avg: QRCodeAvgAggregateOutputType | null
    _sum: QRCodeSumAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  type GetQRCodeGroupByPayload<T extends QRCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QRCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QRCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
            : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
        }
      >
    >


  export type QRCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consumerId?: boolean
    wasteType?: boolean
    quantity?: boolean
    unit?: boolean
    description?: boolean
    photos?: boolean
    qrCodeUrl?: boolean
    isVerified?: boolean
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    recyclingHistory?: boolean | QRCode$recyclingHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consumerId?: boolean
    wasteType?: boolean
    quantity?: boolean
    unit?: boolean
    description?: boolean
    photos?: boolean
    qrCodeUrl?: boolean
    isVerified?: boolean
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consumerId?: boolean
    wasteType?: boolean
    quantity?: boolean
    unit?: boolean
    description?: boolean
    photos?: boolean
    qrCodeUrl?: boolean
    isVerified?: boolean
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consumerId?: boolean
    wasteType?: boolean
    quantity?: boolean
    unit?: boolean
    description?: boolean
    photos?: boolean
    qrCodeUrl?: boolean
    isVerified?: boolean
  }

  export type QRCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "consumerId" | "wasteType" | "quantity" | "unit" | "description" | "photos" | "qrCodeUrl" | "isVerified", ExtArgs["result"]["qRCode"]>
  export type QRCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    recyclingHistory?: boolean | QRCode$recyclingHistoryArgs<ExtArgs>
  }
  export type QRCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
  }
  export type QRCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
  }

  export type $QRCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QRCode"
    objects: {
      consumer: Prisma.$ConsumerPayload<ExtArgs>
      recyclingHistory: Prisma.$RecyclingHistoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      consumerId: string
      wasteType: $Enums.WasteType
      quantity: number
      unit: string
      description: string | null
      photos: string[]
      qrCodeUrl: string
      isVerified: boolean
    }, ExtArgs["result"]["qRCode"]>
    composites: {}
  }

  type QRCodeGetPayload<S extends boolean | null | undefined | QRCodeDefaultArgs> = $Result.GetResult<Prisma.$QRCodePayload, S>

  type QRCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QRCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QRCodeCountAggregateInputType | true
    }

  export interface QRCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QRCode'], meta: { name: 'QRCode' } }
    /**
     * Find zero or one QRCode that matches the filter.
     * @param {QRCodeFindUniqueArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QRCodeFindUniqueArgs>(args: SelectSubset<T, QRCodeFindUniqueArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QRCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QRCodeFindUniqueOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QRCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, QRCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QRCodeFindFirstArgs>(args?: SelectSubset<T, QRCodeFindFirstArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QRCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, QRCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QRCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QRCodes
     * const qRCodes = await prisma.qRCode.findMany()
     * 
     * // Get first 10 QRCodes
     * const qRCodes = await prisma.qRCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qRCodeWithIdOnly = await prisma.qRCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QRCodeFindManyArgs>(args?: SelectSubset<T, QRCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QRCode.
     * @param {QRCodeCreateArgs} args - Arguments to create a QRCode.
     * @example
     * // Create one QRCode
     * const QRCode = await prisma.qRCode.create({
     *   data: {
     *     // ... data to create a QRCode
     *   }
     * })
     * 
     */
    create<T extends QRCodeCreateArgs>(args: SelectSubset<T, QRCodeCreateArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QRCodes.
     * @param {QRCodeCreateManyArgs} args - Arguments to create many QRCodes.
     * @example
     * // Create many QRCodes
     * const qRCode = await prisma.qRCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QRCodeCreateManyArgs>(args?: SelectSubset<T, QRCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QRCodes and returns the data saved in the database.
     * @param {QRCodeCreateManyAndReturnArgs} args - Arguments to create many QRCodes.
     * @example
     * // Create many QRCodes
     * const qRCode = await prisma.qRCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QRCodes and only return the `id`
     * const qRCodeWithIdOnly = await prisma.qRCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QRCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, QRCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QRCode.
     * @param {QRCodeDeleteArgs} args - Arguments to delete one QRCode.
     * @example
     * // Delete one QRCode
     * const QRCode = await prisma.qRCode.delete({
     *   where: {
     *     // ... filter to delete one QRCode
     *   }
     * })
     * 
     */
    delete<T extends QRCodeDeleteArgs>(args: SelectSubset<T, QRCodeDeleteArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QRCode.
     * @param {QRCodeUpdateArgs} args - Arguments to update one QRCode.
     * @example
     * // Update one QRCode
     * const qRCode = await prisma.qRCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QRCodeUpdateArgs>(args: SelectSubset<T, QRCodeUpdateArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QRCodes.
     * @param {QRCodeDeleteManyArgs} args - Arguments to filter QRCodes to delete.
     * @example
     * // Delete a few QRCodes
     * const { count } = await prisma.qRCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QRCodeDeleteManyArgs>(args?: SelectSubset<T, QRCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QRCodes
     * const qRCode = await prisma.qRCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QRCodeUpdateManyArgs>(args: SelectSubset<T, QRCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRCodes and returns the data updated in the database.
     * @param {QRCodeUpdateManyAndReturnArgs} args - Arguments to update many QRCodes.
     * @example
     * // Update many QRCodes
     * const qRCode = await prisma.qRCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QRCodes and only return the `id`
     * const qRCodeWithIdOnly = await prisma.qRCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QRCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, QRCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QRCode.
     * @param {QRCodeUpsertArgs} args - Arguments to update or create a QRCode.
     * @example
     * // Update or create a QRCode
     * const qRCode = await prisma.qRCode.upsert({
     *   create: {
     *     // ... data to create a QRCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QRCode we want to update
     *   }
     * })
     */
    upsert<T extends QRCodeUpsertArgs>(args: SelectSubset<T, QRCodeUpsertArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeCountArgs} args - Arguments to filter QRCodes to count.
     * @example
     * // Count the number of QRCodes
     * const count = await prisma.qRCode.count({
     *   where: {
     *     // ... the filter for the QRCodes we want to count
     *   }
     * })
    **/
    count<T extends QRCodeCountArgs>(
      args?: Subset<T, QRCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QRCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QRCodeAggregateArgs>(args: Subset<T, QRCodeAggregateArgs>): Prisma.PrismaPromise<GetQRCodeAggregateType<T>>

    /**
     * Group by QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeGroupByArgs} args - Group by arguments.
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
      T extends QRCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QRCodeGroupByArgs['orderBy'] }
        : { orderBy?: QRCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QRCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQRCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QRCode model
   */
  readonly fields: QRCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QRCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QRCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consumer<T extends ConsumerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsumerDefaultArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recyclingHistory<T extends QRCode$recyclingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, QRCode$recyclingHistoryArgs<ExtArgs>>): Prisma__RecyclingHistoryClient<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QRCode model
   */
  interface QRCodeFieldRefs {
    readonly id: FieldRef<"QRCode", 'String'>
    readonly createdAt: FieldRef<"QRCode", 'DateTime'>
    readonly updatedAt: FieldRef<"QRCode", 'DateTime'>
    readonly consumerId: FieldRef<"QRCode", 'String'>
    readonly wasteType: FieldRef<"QRCode", 'WasteType'>
    readonly quantity: FieldRef<"QRCode", 'Float'>
    readonly unit: FieldRef<"QRCode", 'String'>
    readonly description: FieldRef<"QRCode", 'String'>
    readonly photos: FieldRef<"QRCode", 'String[]'>
    readonly qrCodeUrl: FieldRef<"QRCode", 'String'>
    readonly isVerified: FieldRef<"QRCode", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * QRCode findUnique
   */
  export type QRCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode findUniqueOrThrow
   */
  export type QRCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode findFirst
   */
  export type QRCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode findFirstOrThrow
   */
  export type QRCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode findMany
   */
  export type QRCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCodes to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode create
   */
  export type QRCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a QRCode.
     */
    data: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
  }

  /**
   * QRCode createMany
   */
  export type QRCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QRCodes.
     */
    data: QRCodeCreateManyInput | QRCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QRCode createManyAndReturn
   */
  export type QRCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * The data used to create many QRCodes.
     */
    data: QRCodeCreateManyInput | QRCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QRCode update
   */
  export type QRCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a QRCode.
     */
    data: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
    /**
     * Choose, which QRCode to update.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode updateMany
   */
  export type QRCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QRCodes.
     */
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyInput>
    /**
     * Filter which QRCodes to update
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to update.
     */
    limit?: number
  }

  /**
   * QRCode updateManyAndReturn
   */
  export type QRCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * The data used to update QRCodes.
     */
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyInput>
    /**
     * Filter which QRCodes to update
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QRCode upsert
   */
  export type QRCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the QRCode to update in case it exists.
     */
    where: QRCodeWhereUniqueInput
    /**
     * In case the QRCode found by the `where` argument doesn't exist, create a new QRCode with this data.
     */
    create: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
    /**
     * In case the QRCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
  }

  /**
   * QRCode delete
   */
  export type QRCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter which QRCode to delete.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode deleteMany
   */
  export type QRCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCodes to delete
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to delete.
     */
    limit?: number
  }

  /**
   * QRCode.recyclingHistory
   */
  export type QRCode$recyclingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    where?: RecyclingHistoryWhereInput
  }

  /**
   * QRCode without action
   */
  export type QRCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
  }


  /**
   * Model RecyclingHistory
   */

  export type AggregateRecyclingHistory = {
    _count: RecyclingHistoryCountAggregateOutputType | null
    _avg: RecyclingHistoryAvgAggregateOutputType | null
    _sum: RecyclingHistorySumAggregateOutputType | null
    _min: RecyclingHistoryMinAggregateOutputType | null
    _max: RecyclingHistoryMaxAggregateOutputType | null
  }

  export type RecyclingHistoryAvgAggregateOutputType = {
    pointsEarned: number | null
  }

  export type RecyclingHistorySumAggregateOutputType = {
    pointsEarned: number | null
  }

  export type RecyclingHistoryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    qrCodeId: string | null
    consumerId: string | null
    businessId: string | null
    recyclingCenterId: string | null
    pointsEarned: number | null
    verifiedAt: Date | null
    notes: string | null
    staffName: string | null
    photo: string | null
  }

  export type RecyclingHistoryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    qrCodeId: string | null
    consumerId: string | null
    businessId: string | null
    recyclingCenterId: string | null
    pointsEarned: number | null
    verifiedAt: Date | null
    notes: string | null
    staffName: string | null
    photo: string | null
  }

  export type RecyclingHistoryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    qrCodeId: number
    consumerId: number
    businessId: number
    recyclingCenterId: number
    pointsEarned: number
    verifiedAt: number
    notes: number
    staffName: number
    photo: number
    _all: number
  }


  export type RecyclingHistoryAvgAggregateInputType = {
    pointsEarned?: true
  }

  export type RecyclingHistorySumAggregateInputType = {
    pointsEarned?: true
  }

  export type RecyclingHistoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    qrCodeId?: true
    consumerId?: true
    businessId?: true
    recyclingCenterId?: true
    pointsEarned?: true
    verifiedAt?: true
    notes?: true
    staffName?: true
    photo?: true
  }

  export type RecyclingHistoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    qrCodeId?: true
    consumerId?: true
    businessId?: true
    recyclingCenterId?: true
    pointsEarned?: true
    verifiedAt?: true
    notes?: true
    staffName?: true
    photo?: true
  }

  export type RecyclingHistoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    qrCodeId?: true
    consumerId?: true
    businessId?: true
    recyclingCenterId?: true
    pointsEarned?: true
    verifiedAt?: true
    notes?: true
    staffName?: true
    photo?: true
    _all?: true
  }

  export type RecyclingHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecyclingHistory to aggregate.
     */
    where?: RecyclingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingHistories to fetch.
     */
    orderBy?: RecyclingHistoryOrderByWithRelationInput | RecyclingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecyclingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecyclingHistories
    **/
    _count?: true | RecyclingHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecyclingHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecyclingHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecyclingHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecyclingHistoryMaxAggregateInputType
  }

  export type GetRecyclingHistoryAggregateType<T extends RecyclingHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRecyclingHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecyclingHistory[P]>
      : GetScalarType<T[P], AggregateRecyclingHistory[P]>
  }




  export type RecyclingHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecyclingHistoryWhereInput
    orderBy?: RecyclingHistoryOrderByWithAggregationInput | RecyclingHistoryOrderByWithAggregationInput[]
    by: RecyclingHistoryScalarFieldEnum[] | RecyclingHistoryScalarFieldEnum
    having?: RecyclingHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecyclingHistoryCountAggregateInputType | true
    _avg?: RecyclingHistoryAvgAggregateInputType
    _sum?: RecyclingHistorySumAggregateInputType
    _min?: RecyclingHistoryMinAggregateInputType
    _max?: RecyclingHistoryMaxAggregateInputType
  }

  export type RecyclingHistoryGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    qrCodeId: string
    consumerId: string
    businessId: string
    recyclingCenterId: string
    pointsEarned: number
    verifiedAt: Date
    notes: string | null
    staffName: string | null
    photo: string | null
    _count: RecyclingHistoryCountAggregateOutputType | null
    _avg: RecyclingHistoryAvgAggregateOutputType | null
    _sum: RecyclingHistorySumAggregateOutputType | null
    _min: RecyclingHistoryMinAggregateOutputType | null
    _max: RecyclingHistoryMaxAggregateOutputType | null
  }

  type GetRecyclingHistoryGroupByPayload<T extends RecyclingHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecyclingHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecyclingHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecyclingHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RecyclingHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RecyclingHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodeId?: boolean
    consumerId?: boolean
    businessId?: boolean
    recyclingCenterId?: boolean
    pointsEarned?: boolean
    verifiedAt?: boolean
    notes?: boolean
    staffName?: boolean
    photo?: boolean
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    recyclingCenter?: boolean | RecyclingCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recyclingHistory"]>

  export type RecyclingHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodeId?: boolean
    consumerId?: boolean
    businessId?: boolean
    recyclingCenterId?: boolean
    pointsEarned?: boolean
    verifiedAt?: boolean
    notes?: boolean
    staffName?: boolean
    photo?: boolean
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    recyclingCenter?: boolean | RecyclingCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recyclingHistory"]>

  export type RecyclingHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodeId?: boolean
    consumerId?: boolean
    businessId?: boolean
    recyclingCenterId?: boolean
    pointsEarned?: boolean
    verifiedAt?: boolean
    notes?: boolean
    staffName?: boolean
    photo?: boolean
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    recyclingCenter?: boolean | RecyclingCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recyclingHistory"]>

  export type RecyclingHistorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodeId?: boolean
    consumerId?: boolean
    businessId?: boolean
    recyclingCenterId?: boolean
    pointsEarned?: boolean
    verifiedAt?: boolean
    notes?: boolean
    staffName?: boolean
    photo?: boolean
  }

  export type RecyclingHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "qrCodeId" | "consumerId" | "businessId" | "recyclingCenterId" | "pointsEarned" | "verifiedAt" | "notes" | "staffName" | "photo", ExtArgs["result"]["recyclingHistory"]>
  export type RecyclingHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    recyclingCenter?: boolean | RecyclingCenterDefaultArgs<ExtArgs>
  }
  export type RecyclingHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    recyclingCenter?: boolean | RecyclingCenterDefaultArgs<ExtArgs>
  }
  export type RecyclingHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    recyclingCenter?: boolean | RecyclingCenterDefaultArgs<ExtArgs>
  }

  export type $RecyclingHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecyclingHistory"
    objects: {
      qrCode: Prisma.$QRCodePayload<ExtArgs>
      consumer: Prisma.$ConsumerPayload<ExtArgs>
      business: Prisma.$BusinessPayload<ExtArgs>
      recyclingCenter: Prisma.$RecyclingCenterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      qrCodeId: string
      consumerId: string
      businessId: string
      recyclingCenterId: string
      pointsEarned: number
      verifiedAt: Date
      notes: string | null
      staffName: string | null
      photo: string | null
    }, ExtArgs["result"]["recyclingHistory"]>
    composites: {}
  }

  type RecyclingHistoryGetPayload<S extends boolean | null | undefined | RecyclingHistoryDefaultArgs> = $Result.GetResult<Prisma.$RecyclingHistoryPayload, S>

  type RecyclingHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecyclingHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecyclingHistoryCountAggregateInputType | true
    }

  export interface RecyclingHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecyclingHistory'], meta: { name: 'RecyclingHistory' } }
    /**
     * Find zero or one RecyclingHistory that matches the filter.
     * @param {RecyclingHistoryFindUniqueArgs} args - Arguments to find a RecyclingHistory
     * @example
     * // Get one RecyclingHistory
     * const recyclingHistory = await prisma.recyclingHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecyclingHistoryFindUniqueArgs>(args: SelectSubset<T, RecyclingHistoryFindUniqueArgs<ExtArgs>>): Prisma__RecyclingHistoryClient<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecyclingHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecyclingHistoryFindUniqueOrThrowArgs} args - Arguments to find a RecyclingHistory
     * @example
     * // Get one RecyclingHistory
     * const recyclingHistory = await prisma.recyclingHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecyclingHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RecyclingHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecyclingHistoryClient<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecyclingHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingHistoryFindFirstArgs} args - Arguments to find a RecyclingHistory
     * @example
     * // Get one RecyclingHistory
     * const recyclingHistory = await prisma.recyclingHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecyclingHistoryFindFirstArgs>(args?: SelectSubset<T, RecyclingHistoryFindFirstArgs<ExtArgs>>): Prisma__RecyclingHistoryClient<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecyclingHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingHistoryFindFirstOrThrowArgs} args - Arguments to find a RecyclingHistory
     * @example
     * // Get one RecyclingHistory
     * const recyclingHistory = await prisma.recyclingHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecyclingHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RecyclingHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecyclingHistoryClient<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecyclingHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecyclingHistories
     * const recyclingHistories = await prisma.recyclingHistory.findMany()
     * 
     * // Get first 10 RecyclingHistories
     * const recyclingHistories = await prisma.recyclingHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recyclingHistoryWithIdOnly = await prisma.recyclingHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecyclingHistoryFindManyArgs>(args?: SelectSubset<T, RecyclingHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecyclingHistory.
     * @param {RecyclingHistoryCreateArgs} args - Arguments to create a RecyclingHistory.
     * @example
     * // Create one RecyclingHistory
     * const RecyclingHistory = await prisma.recyclingHistory.create({
     *   data: {
     *     // ... data to create a RecyclingHistory
     *   }
     * })
     * 
     */
    create<T extends RecyclingHistoryCreateArgs>(args: SelectSubset<T, RecyclingHistoryCreateArgs<ExtArgs>>): Prisma__RecyclingHistoryClient<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecyclingHistories.
     * @param {RecyclingHistoryCreateManyArgs} args - Arguments to create many RecyclingHistories.
     * @example
     * // Create many RecyclingHistories
     * const recyclingHistory = await prisma.recyclingHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecyclingHistoryCreateManyArgs>(args?: SelectSubset<T, RecyclingHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecyclingHistories and returns the data saved in the database.
     * @param {RecyclingHistoryCreateManyAndReturnArgs} args - Arguments to create many RecyclingHistories.
     * @example
     * // Create many RecyclingHistories
     * const recyclingHistory = await prisma.recyclingHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecyclingHistories and only return the `id`
     * const recyclingHistoryWithIdOnly = await prisma.recyclingHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecyclingHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RecyclingHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecyclingHistory.
     * @param {RecyclingHistoryDeleteArgs} args - Arguments to delete one RecyclingHistory.
     * @example
     * // Delete one RecyclingHistory
     * const RecyclingHistory = await prisma.recyclingHistory.delete({
     *   where: {
     *     // ... filter to delete one RecyclingHistory
     *   }
     * })
     * 
     */
    delete<T extends RecyclingHistoryDeleteArgs>(args: SelectSubset<T, RecyclingHistoryDeleteArgs<ExtArgs>>): Prisma__RecyclingHistoryClient<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecyclingHistory.
     * @param {RecyclingHistoryUpdateArgs} args - Arguments to update one RecyclingHistory.
     * @example
     * // Update one RecyclingHistory
     * const recyclingHistory = await prisma.recyclingHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecyclingHistoryUpdateArgs>(args: SelectSubset<T, RecyclingHistoryUpdateArgs<ExtArgs>>): Prisma__RecyclingHistoryClient<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecyclingHistories.
     * @param {RecyclingHistoryDeleteManyArgs} args - Arguments to filter RecyclingHistories to delete.
     * @example
     * // Delete a few RecyclingHistories
     * const { count } = await prisma.recyclingHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecyclingHistoryDeleteManyArgs>(args?: SelectSubset<T, RecyclingHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecyclingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecyclingHistories
     * const recyclingHistory = await prisma.recyclingHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecyclingHistoryUpdateManyArgs>(args: SelectSubset<T, RecyclingHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecyclingHistories and returns the data updated in the database.
     * @param {RecyclingHistoryUpdateManyAndReturnArgs} args - Arguments to update many RecyclingHistories.
     * @example
     * // Update many RecyclingHistories
     * const recyclingHistory = await prisma.recyclingHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecyclingHistories and only return the `id`
     * const recyclingHistoryWithIdOnly = await prisma.recyclingHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecyclingHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RecyclingHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecyclingHistory.
     * @param {RecyclingHistoryUpsertArgs} args - Arguments to update or create a RecyclingHistory.
     * @example
     * // Update or create a RecyclingHistory
     * const recyclingHistory = await prisma.recyclingHistory.upsert({
     *   create: {
     *     // ... data to create a RecyclingHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecyclingHistory we want to update
     *   }
     * })
     */
    upsert<T extends RecyclingHistoryUpsertArgs>(args: SelectSubset<T, RecyclingHistoryUpsertArgs<ExtArgs>>): Prisma__RecyclingHistoryClient<$Result.GetResult<Prisma.$RecyclingHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecyclingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingHistoryCountArgs} args - Arguments to filter RecyclingHistories to count.
     * @example
     * // Count the number of RecyclingHistories
     * const count = await prisma.recyclingHistory.count({
     *   where: {
     *     // ... the filter for the RecyclingHistories we want to count
     *   }
     * })
    **/
    count<T extends RecyclingHistoryCountArgs>(
      args?: Subset<T, RecyclingHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecyclingHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecyclingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecyclingHistoryAggregateArgs>(args: Subset<T, RecyclingHistoryAggregateArgs>): Prisma.PrismaPromise<GetRecyclingHistoryAggregateType<T>>

    /**
     * Group by RecyclingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecyclingHistoryGroupByArgs} args - Group by arguments.
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
      T extends RecyclingHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecyclingHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RecyclingHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecyclingHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecyclingHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecyclingHistory model
   */
  readonly fields: RecyclingHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecyclingHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecyclingHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qrCode<T extends QRCodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QRCodeDefaultArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consumer<T extends ConsumerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsumerDefaultArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recyclingCenter<T extends RecyclingCenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecyclingCenterDefaultArgs<ExtArgs>>): Prisma__RecyclingCenterClient<$Result.GetResult<Prisma.$RecyclingCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecyclingHistory model
   */
  interface RecyclingHistoryFieldRefs {
    readonly id: FieldRef<"RecyclingHistory", 'String'>
    readonly createdAt: FieldRef<"RecyclingHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"RecyclingHistory", 'DateTime'>
    readonly qrCodeId: FieldRef<"RecyclingHistory", 'String'>
    readonly consumerId: FieldRef<"RecyclingHistory", 'String'>
    readonly businessId: FieldRef<"RecyclingHistory", 'String'>
    readonly recyclingCenterId: FieldRef<"RecyclingHistory", 'String'>
    readonly pointsEarned: FieldRef<"RecyclingHistory", 'Int'>
    readonly verifiedAt: FieldRef<"RecyclingHistory", 'DateTime'>
    readonly notes: FieldRef<"RecyclingHistory", 'String'>
    readonly staffName: FieldRef<"RecyclingHistory", 'String'>
    readonly photo: FieldRef<"RecyclingHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecyclingHistory findUnique
   */
  export type RecyclingHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingHistory to fetch.
     */
    where: RecyclingHistoryWhereUniqueInput
  }

  /**
   * RecyclingHistory findUniqueOrThrow
   */
  export type RecyclingHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingHistory to fetch.
     */
    where: RecyclingHistoryWhereUniqueInput
  }

  /**
   * RecyclingHistory findFirst
   */
  export type RecyclingHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingHistory to fetch.
     */
    where?: RecyclingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingHistories to fetch.
     */
    orderBy?: RecyclingHistoryOrderByWithRelationInput | RecyclingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecyclingHistories.
     */
    cursor?: RecyclingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecyclingHistories.
     */
    distinct?: RecyclingHistoryScalarFieldEnum | RecyclingHistoryScalarFieldEnum[]
  }

  /**
   * RecyclingHistory findFirstOrThrow
   */
  export type RecyclingHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingHistory to fetch.
     */
    where?: RecyclingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingHistories to fetch.
     */
    orderBy?: RecyclingHistoryOrderByWithRelationInput | RecyclingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecyclingHistories.
     */
    cursor?: RecyclingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecyclingHistories.
     */
    distinct?: RecyclingHistoryScalarFieldEnum | RecyclingHistoryScalarFieldEnum[]
  }

  /**
   * RecyclingHistory findMany
   */
  export type RecyclingHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RecyclingHistories to fetch.
     */
    where?: RecyclingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecyclingHistories to fetch.
     */
    orderBy?: RecyclingHistoryOrderByWithRelationInput | RecyclingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecyclingHistories.
     */
    cursor?: RecyclingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecyclingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecyclingHistories.
     */
    skip?: number
    distinct?: RecyclingHistoryScalarFieldEnum | RecyclingHistoryScalarFieldEnum[]
  }

  /**
   * RecyclingHistory create
   */
  export type RecyclingHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RecyclingHistory.
     */
    data: XOR<RecyclingHistoryCreateInput, RecyclingHistoryUncheckedCreateInput>
  }

  /**
   * RecyclingHistory createMany
   */
  export type RecyclingHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecyclingHistories.
     */
    data: RecyclingHistoryCreateManyInput | RecyclingHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecyclingHistory createManyAndReturn
   */
  export type RecyclingHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many RecyclingHistories.
     */
    data: RecyclingHistoryCreateManyInput | RecyclingHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecyclingHistory update
   */
  export type RecyclingHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RecyclingHistory.
     */
    data: XOR<RecyclingHistoryUpdateInput, RecyclingHistoryUncheckedUpdateInput>
    /**
     * Choose, which RecyclingHistory to update.
     */
    where: RecyclingHistoryWhereUniqueInput
  }

  /**
   * RecyclingHistory updateMany
   */
  export type RecyclingHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecyclingHistories.
     */
    data: XOR<RecyclingHistoryUpdateManyMutationInput, RecyclingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RecyclingHistories to update
     */
    where?: RecyclingHistoryWhereInput
    /**
     * Limit how many RecyclingHistories to update.
     */
    limit?: number
  }

  /**
   * RecyclingHistory updateManyAndReturn
   */
  export type RecyclingHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * The data used to update RecyclingHistories.
     */
    data: XOR<RecyclingHistoryUpdateManyMutationInput, RecyclingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RecyclingHistories to update
     */
    where?: RecyclingHistoryWhereInput
    /**
     * Limit how many RecyclingHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecyclingHistory upsert
   */
  export type RecyclingHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RecyclingHistory to update in case it exists.
     */
    where: RecyclingHistoryWhereUniqueInput
    /**
     * In case the RecyclingHistory found by the `where` argument doesn't exist, create a new RecyclingHistory with this data.
     */
    create: XOR<RecyclingHistoryCreateInput, RecyclingHistoryUncheckedCreateInput>
    /**
     * In case the RecyclingHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecyclingHistoryUpdateInput, RecyclingHistoryUncheckedUpdateInput>
  }

  /**
   * RecyclingHistory delete
   */
  export type RecyclingHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
    /**
     * Filter which RecyclingHistory to delete.
     */
    where: RecyclingHistoryWhereUniqueInput
  }

  /**
   * RecyclingHistory deleteMany
   */
  export type RecyclingHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecyclingHistories to delete
     */
    where?: RecyclingHistoryWhereInput
    /**
     * Limit how many RecyclingHistories to delete.
     */
    limit?: number
  }

  /**
   * RecyclingHistory without action
   */
  export type RecyclingHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecyclingHistory
     */
    select?: RecyclingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecyclingHistory
     */
    omit?: RecyclingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecyclingHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Reward
   */

  export type AggregateReward = {
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  export type RewardAvgAggregateOutputType = {
    pointsCost: number | null
    quantity: number | null
  }

  export type RewardSumAggregateOutputType = {
    pointsCost: number | null
    quantity: number | null
  }

  export type RewardMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    pointsCost: number | null
    image: string | null
    isActive: boolean | null
    quantity: number | null
  }

  export type RewardMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    pointsCost: number | null
    image: string | null
    isActive: boolean | null
    quantity: number | null
  }

  export type RewardCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    pointsCost: number
    image: number
    isActive: number
    quantity: number
    _all: number
  }


  export type RewardAvgAggregateInputType = {
    pointsCost?: true
    quantity?: true
  }

  export type RewardSumAggregateInputType = {
    pointsCost?: true
    quantity?: true
  }

  export type RewardMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    pointsCost?: true
    image?: true
    isActive?: true
    quantity?: true
  }

  export type RewardMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    pointsCost?: true
    image?: true
    isActive?: true
    quantity?: true
  }

  export type RewardCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    pointsCost?: true
    image?: true
    isActive?: true
    quantity?: true
    _all?: true
  }

  export type RewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reward to aggregate.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardMaxAggregateInputType
  }

  export type GetRewardAggregateType<T extends RewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReward[P]>
      : GetScalarType<T[P], AggregateReward[P]>
  }




  export type RewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithAggregationInput | RewardOrderByWithAggregationInput[]
    by: RewardScalarFieldEnum[] | RewardScalarFieldEnum
    having?: RewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardCountAggregateInputType | true
    _avg?: RewardAvgAggregateInputType
    _sum?: RewardSumAggregateInputType
    _min?: RewardMinAggregateInputType
    _max?: RewardMaxAggregateInputType
  }

  export type RewardGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string
    pointsCost: number
    image: string | null
    isActive: boolean
    quantity: number | null
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  type GetRewardGroupByPayload<T extends RewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardGroupByOutputType[P]>
            : GetScalarType<T[P], RewardGroupByOutputType[P]>
        }
      >
    >


  export type RewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    pointsCost?: boolean
    image?: boolean
    isActive?: boolean
    quantity?: boolean
    redemptions?: boolean | Reward$redemptionsArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    pointsCost?: boolean
    image?: boolean
    isActive?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    pointsCost?: boolean
    image?: boolean
    isActive?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    pointsCost?: boolean
    image?: boolean
    isActive?: boolean
    quantity?: boolean
  }

  export type RewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "description" | "pointsCost" | "image" | "isActive" | "quantity", ExtArgs["result"]["reward"]>
  export type RewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemptions?: boolean | Reward$redemptionsArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reward"
    objects: {
      redemptions: Prisma.$RewardRedemptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      description: string
      pointsCost: number
      image: string | null
      isActive: boolean
      quantity: number | null
    }, ExtArgs["result"]["reward"]>
    composites: {}
  }

  type RewardGetPayload<S extends boolean | null | undefined | RewardDefaultArgs> = $Result.GetResult<Prisma.$RewardPayload, S>

  type RewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardCountAggregateInputType | true
    }

  export interface RewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reward'], meta: { name: 'Reward' } }
    /**
     * Find zero or one Reward that matches the filter.
     * @param {RewardFindUniqueArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardFindUniqueArgs>(args: SelectSubset<T, RewardFindUniqueArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardFindUniqueOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardFindFirstArgs>(args?: SelectSubset<T, RewardFindFirstArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.reward.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.reward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardWithIdOnly = await prisma.reward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardFindManyArgs>(args?: SelectSubset<T, RewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reward.
     * @param {RewardCreateArgs} args - Arguments to create a Reward.
     * @example
     * // Create one Reward
     * const Reward = await prisma.reward.create({
     *   data: {
     *     // ... data to create a Reward
     *   }
     * })
     * 
     */
    create<T extends RewardCreateArgs>(args: SelectSubset<T, RewardCreateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rewards.
     * @param {RewardCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardCreateManyArgs>(args?: SelectSubset<T, RewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rewards and returns the data saved in the database.
     * @param {RewardCreateManyAndReturnArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reward.
     * @param {RewardDeleteArgs} args - Arguments to delete one Reward.
     * @example
     * // Delete one Reward
     * const Reward = await prisma.reward.delete({
     *   where: {
     *     // ... filter to delete one Reward
     *   }
     * })
     * 
     */
    delete<T extends RewardDeleteArgs>(args: SelectSubset<T, RewardDeleteArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reward.
     * @param {RewardUpdateArgs} args - Arguments to update one Reward.
     * @example
     * // Update one Reward
     * const reward = await prisma.reward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardUpdateArgs>(args: SelectSubset<T, RewardUpdateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rewards.
     * @param {RewardDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.reward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardDeleteManyArgs>(args?: SelectSubset<T, RewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardUpdateManyArgs>(args: SelectSubset<T, RewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards and returns the data updated in the database.
     * @param {RewardUpdateManyAndReturnArgs} args - Arguments to update many Rewards.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RewardUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reward.
     * @param {RewardUpsertArgs} args - Arguments to update or create a Reward.
     * @example
     * // Update or create a Reward
     * const reward = await prisma.reward.upsert({
     *   create: {
     *     // ... data to create a Reward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reward we want to update
     *   }
     * })
     */
    upsert<T extends RewardUpsertArgs>(args: SelectSubset<T, RewardUpsertArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.reward.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardCountArgs>(
      args?: Subset<T, RewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardAggregateArgs>(args: Subset<T, RewardAggregateArgs>): Prisma.PrismaPromise<GetRewardAggregateType<T>>

    /**
     * Group by Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardGroupByArgs} args - Group by arguments.
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
      T extends RewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardGroupByArgs['orderBy'] }
        : { orderBy?: RewardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reward model
   */
  readonly fields: RewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    redemptions<T extends Reward$redemptionsArgs<ExtArgs> = {}>(args?: Subset<T, Reward$redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reward model
   */
  interface RewardFieldRefs {
    readonly id: FieldRef<"Reward", 'String'>
    readonly createdAt: FieldRef<"Reward", 'DateTime'>
    readonly updatedAt: FieldRef<"Reward", 'DateTime'>
    readonly name: FieldRef<"Reward", 'String'>
    readonly description: FieldRef<"Reward", 'String'>
    readonly pointsCost: FieldRef<"Reward", 'Int'>
    readonly image: FieldRef<"Reward", 'String'>
    readonly isActive: FieldRef<"Reward", 'Boolean'>
    readonly quantity: FieldRef<"Reward", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reward findUnique
   */
  export type RewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findUniqueOrThrow
   */
  export type RewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findFirst
   */
  export type RewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findFirstOrThrow
   */
  export type RewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findMany
   */
  export type RewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward create
   */
  export type RewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to create a Reward.
     */
    data: XOR<RewardCreateInput, RewardUncheckedCreateInput>
  }

  /**
   * Reward createMany
   */
  export type RewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward createManyAndReturn
   */
  export type RewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward update
   */
  export type RewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to update a Reward.
     */
    data: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
    /**
     * Choose, which Reward to update.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward updateMany
   */
  export type RewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward updateManyAndReturn
   */
  export type RewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward upsert
   */
  export type RewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The filter to search for the Reward to update in case it exists.
     */
    where: RewardWhereUniqueInput
    /**
     * In case the Reward found by the `where` argument doesn't exist, create a new Reward with this data.
     */
    create: XOR<RewardCreateInput, RewardUncheckedCreateInput>
    /**
     * In case the Reward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
  }

  /**
   * Reward delete
   */
  export type RewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter which Reward to delete.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward deleteMany
   */
  export type RewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to delete.
     */
    limit?: number
  }

  /**
   * Reward.redemptions
   */
  export type Reward$redemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    where?: RewardRedemptionWhereInput
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    cursor?: RewardRedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * Reward without action
   */
  export type RewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
  }


  /**
   * Model RewardRedemption
   */

  export type AggregateRewardRedemption = {
    _count: RewardRedemptionCountAggregateOutputType | null
    _avg: RewardRedemptionAvgAggregateOutputType | null
    _sum: RewardRedemptionSumAggregateOutputType | null
    _min: RewardRedemptionMinAggregateOutputType | null
    _max: RewardRedemptionMaxAggregateOutputType | null
  }

  export type RewardRedemptionAvgAggregateOutputType = {
    pointsSpent: number | null
  }

  export type RewardRedemptionSumAggregateOutputType = {
    pointsSpent: number | null
  }

  export type RewardRedemptionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    consumerId: string | null
    rewardId: string | null
    pointsSpent: number | null
    status: string | null
    redeemedAt: Date | null
  }

  export type RewardRedemptionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    consumerId: string | null
    rewardId: string | null
    pointsSpent: number | null
    status: string | null
    redeemedAt: Date | null
  }

  export type RewardRedemptionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    consumerId: number
    rewardId: number
    pointsSpent: number
    status: number
    redeemedAt: number
    _all: number
  }


  export type RewardRedemptionAvgAggregateInputType = {
    pointsSpent?: true
  }

  export type RewardRedemptionSumAggregateInputType = {
    pointsSpent?: true
  }

  export type RewardRedemptionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    consumerId?: true
    rewardId?: true
    pointsSpent?: true
    status?: true
    redeemedAt?: true
  }

  export type RewardRedemptionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    consumerId?: true
    rewardId?: true
    pointsSpent?: true
    status?: true
    redeemedAt?: true
  }

  export type RewardRedemptionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    consumerId?: true
    rewardId?: true
    pointsSpent?: true
    status?: true
    redeemedAt?: true
    _all?: true
  }

  export type RewardRedemptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardRedemption to aggregate.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RewardRedemptions
    **/
    _count?: true | RewardRedemptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardRedemptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardRedemptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardRedemptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardRedemptionMaxAggregateInputType
  }

  export type GetRewardRedemptionAggregateType<T extends RewardRedemptionAggregateArgs> = {
        [P in keyof T & keyof AggregateRewardRedemption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewardRedemption[P]>
      : GetScalarType<T[P], AggregateRewardRedemption[P]>
  }




  export type RewardRedemptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardRedemptionWhereInput
    orderBy?: RewardRedemptionOrderByWithAggregationInput | RewardRedemptionOrderByWithAggregationInput[]
    by: RewardRedemptionScalarFieldEnum[] | RewardRedemptionScalarFieldEnum
    having?: RewardRedemptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardRedemptionCountAggregateInputType | true
    _avg?: RewardRedemptionAvgAggregateInputType
    _sum?: RewardRedemptionSumAggregateInputType
    _min?: RewardRedemptionMinAggregateInputType
    _max?: RewardRedemptionMaxAggregateInputType
  }

  export type RewardRedemptionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    consumerId: string
    rewardId: string
    pointsSpent: number
    status: string
    redeemedAt: Date | null
    _count: RewardRedemptionCountAggregateOutputType | null
    _avg: RewardRedemptionAvgAggregateOutputType | null
    _sum: RewardRedemptionSumAggregateOutputType | null
    _min: RewardRedemptionMinAggregateOutputType | null
    _max: RewardRedemptionMaxAggregateOutputType | null
  }

  type GetRewardRedemptionGroupByPayload<T extends RewardRedemptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardRedemptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardRedemptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardRedemptionGroupByOutputType[P]>
            : GetScalarType<T[P], RewardRedemptionGroupByOutputType[P]>
        }
      >
    >


  export type RewardRedemptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consumerId?: boolean
    rewardId?: boolean
    pointsSpent?: boolean
    status?: boolean
    redeemedAt?: boolean
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardRedemption"]>

  export type RewardRedemptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consumerId?: boolean
    rewardId?: boolean
    pointsSpent?: boolean
    status?: boolean
    redeemedAt?: boolean
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardRedemption"]>

  export type RewardRedemptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consumerId?: boolean
    rewardId?: boolean
    pointsSpent?: boolean
    status?: boolean
    redeemedAt?: boolean
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardRedemption"]>

  export type RewardRedemptionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consumerId?: boolean
    rewardId?: boolean
    pointsSpent?: boolean
    status?: boolean
    redeemedAt?: boolean
  }

  export type RewardRedemptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "consumerId" | "rewardId" | "pointsSpent" | "status" | "redeemedAt", ExtArgs["result"]["rewardRedemption"]>
  export type RewardRedemptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }
  export type RewardRedemptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }
  export type RewardRedemptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }

  export type $RewardRedemptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RewardRedemption"
    objects: {
      consumer: Prisma.$ConsumerPayload<ExtArgs>
      reward: Prisma.$RewardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      consumerId: string
      rewardId: string
      pointsSpent: number
      status: string
      redeemedAt: Date | null
    }, ExtArgs["result"]["rewardRedemption"]>
    composites: {}
  }

  type RewardRedemptionGetPayload<S extends boolean | null | undefined | RewardRedemptionDefaultArgs> = $Result.GetResult<Prisma.$RewardRedemptionPayload, S>

  type RewardRedemptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardRedemptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardRedemptionCountAggregateInputType | true
    }

  export interface RewardRedemptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RewardRedemption'], meta: { name: 'RewardRedemption' } }
    /**
     * Find zero or one RewardRedemption that matches the filter.
     * @param {RewardRedemptionFindUniqueArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardRedemptionFindUniqueArgs>(args: SelectSubset<T, RewardRedemptionFindUniqueArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RewardRedemption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardRedemptionFindUniqueOrThrowArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardRedemptionFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardRedemptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardRedemption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionFindFirstArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardRedemptionFindFirstArgs>(args?: SelectSubset<T, RewardRedemptionFindFirstArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardRedemption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionFindFirstOrThrowArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardRedemptionFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardRedemptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RewardRedemptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RewardRedemptions
     * const rewardRedemptions = await prisma.rewardRedemption.findMany()
     * 
     * // Get first 10 RewardRedemptions
     * const rewardRedemptions = await prisma.rewardRedemption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardRedemptionWithIdOnly = await prisma.rewardRedemption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardRedemptionFindManyArgs>(args?: SelectSubset<T, RewardRedemptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RewardRedemption.
     * @param {RewardRedemptionCreateArgs} args - Arguments to create a RewardRedemption.
     * @example
     * // Create one RewardRedemption
     * const RewardRedemption = await prisma.rewardRedemption.create({
     *   data: {
     *     // ... data to create a RewardRedemption
     *   }
     * })
     * 
     */
    create<T extends RewardRedemptionCreateArgs>(args: SelectSubset<T, RewardRedemptionCreateArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RewardRedemptions.
     * @param {RewardRedemptionCreateManyArgs} args - Arguments to create many RewardRedemptions.
     * @example
     * // Create many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardRedemptionCreateManyArgs>(args?: SelectSubset<T, RewardRedemptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RewardRedemptions and returns the data saved in the database.
     * @param {RewardRedemptionCreateManyAndReturnArgs} args - Arguments to create many RewardRedemptions.
     * @example
     * // Create many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RewardRedemptions and only return the `id`
     * const rewardRedemptionWithIdOnly = await prisma.rewardRedemption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardRedemptionCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardRedemptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RewardRedemption.
     * @param {RewardRedemptionDeleteArgs} args - Arguments to delete one RewardRedemption.
     * @example
     * // Delete one RewardRedemption
     * const RewardRedemption = await prisma.rewardRedemption.delete({
     *   where: {
     *     // ... filter to delete one RewardRedemption
     *   }
     * })
     * 
     */
    delete<T extends RewardRedemptionDeleteArgs>(args: SelectSubset<T, RewardRedemptionDeleteArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RewardRedemption.
     * @param {RewardRedemptionUpdateArgs} args - Arguments to update one RewardRedemption.
     * @example
     * // Update one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardRedemptionUpdateArgs>(args: SelectSubset<T, RewardRedemptionUpdateArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RewardRedemptions.
     * @param {RewardRedemptionDeleteManyArgs} args - Arguments to filter RewardRedemptions to delete.
     * @example
     * // Delete a few RewardRedemptions
     * const { count } = await prisma.rewardRedemption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardRedemptionDeleteManyArgs>(args?: SelectSubset<T, RewardRedemptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardRedemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardRedemptionUpdateManyArgs>(args: SelectSubset<T, RewardRedemptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardRedemptions and returns the data updated in the database.
     * @param {RewardRedemptionUpdateManyAndReturnArgs} args - Arguments to update many RewardRedemptions.
     * @example
     * // Update many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RewardRedemptions and only return the `id`
     * const rewardRedemptionWithIdOnly = await prisma.rewardRedemption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RewardRedemptionUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardRedemptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RewardRedemption.
     * @param {RewardRedemptionUpsertArgs} args - Arguments to update or create a RewardRedemption.
     * @example
     * // Update or create a RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.upsert({
     *   create: {
     *     // ... data to create a RewardRedemption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RewardRedemption we want to update
     *   }
     * })
     */
    upsert<T extends RewardRedemptionUpsertArgs>(args: SelectSubset<T, RewardRedemptionUpsertArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RewardRedemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionCountArgs} args - Arguments to filter RewardRedemptions to count.
     * @example
     * // Count the number of RewardRedemptions
     * const count = await prisma.rewardRedemption.count({
     *   where: {
     *     // ... the filter for the RewardRedemptions we want to count
     *   }
     * })
    **/
    count<T extends RewardRedemptionCountArgs>(
      args?: Subset<T, RewardRedemptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardRedemptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RewardRedemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardRedemptionAggregateArgs>(args: Subset<T, RewardRedemptionAggregateArgs>): Prisma.PrismaPromise<GetRewardRedemptionAggregateType<T>>

    /**
     * Group by RewardRedemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionGroupByArgs} args - Group by arguments.
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
      T extends RewardRedemptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardRedemptionGroupByArgs['orderBy'] }
        : { orderBy?: RewardRedemptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardRedemptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardRedemptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RewardRedemption model
   */
  readonly fields: RewardRedemptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RewardRedemption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardRedemptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consumer<T extends ConsumerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsumerDefaultArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reward<T extends RewardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RewardDefaultArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RewardRedemption model
   */
  interface RewardRedemptionFieldRefs {
    readonly id: FieldRef<"RewardRedemption", 'String'>
    readonly createdAt: FieldRef<"RewardRedemption", 'DateTime'>
    readonly updatedAt: FieldRef<"RewardRedemption", 'DateTime'>
    readonly consumerId: FieldRef<"RewardRedemption", 'String'>
    readonly rewardId: FieldRef<"RewardRedemption", 'String'>
    readonly pointsSpent: FieldRef<"RewardRedemption", 'Int'>
    readonly status: FieldRef<"RewardRedemption", 'String'>
    readonly redeemedAt: FieldRef<"RewardRedemption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RewardRedemption findUnique
   */
  export type RewardRedemptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption findUniqueOrThrow
   */
  export type RewardRedemptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption findFirst
   */
  export type RewardRedemptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardRedemptions.
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardRedemptions.
     */
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * RewardRedemption findFirstOrThrow
   */
  export type RewardRedemptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardRedemptions.
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardRedemptions.
     */
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * RewardRedemption findMany
   */
  export type RewardRedemptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemptions to fetch.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RewardRedemptions.
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * RewardRedemption create
   */
  export type RewardRedemptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * The data needed to create a RewardRedemption.
     */
    data: XOR<RewardRedemptionCreateInput, RewardRedemptionUncheckedCreateInput>
  }

  /**
   * RewardRedemption createMany
   */
  export type RewardRedemptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RewardRedemptions.
     */
    data: RewardRedemptionCreateManyInput | RewardRedemptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RewardRedemption createManyAndReturn
   */
  export type RewardRedemptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * The data used to create many RewardRedemptions.
     */
    data: RewardRedemptionCreateManyInput | RewardRedemptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardRedemption update
   */
  export type RewardRedemptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * The data needed to update a RewardRedemption.
     */
    data: XOR<RewardRedemptionUpdateInput, RewardRedemptionUncheckedUpdateInput>
    /**
     * Choose, which RewardRedemption to update.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption updateMany
   */
  export type RewardRedemptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RewardRedemptions.
     */
    data: XOR<RewardRedemptionUpdateManyMutationInput, RewardRedemptionUncheckedUpdateManyInput>
    /**
     * Filter which RewardRedemptions to update
     */
    where?: RewardRedemptionWhereInput
    /**
     * Limit how many RewardRedemptions to update.
     */
    limit?: number
  }

  /**
   * RewardRedemption updateManyAndReturn
   */
  export type RewardRedemptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * The data used to update RewardRedemptions.
     */
    data: XOR<RewardRedemptionUpdateManyMutationInput, RewardRedemptionUncheckedUpdateManyInput>
    /**
     * Filter which RewardRedemptions to update
     */
    where?: RewardRedemptionWhereInput
    /**
     * Limit how many RewardRedemptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardRedemption upsert
   */
  export type RewardRedemptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * The filter to search for the RewardRedemption to update in case it exists.
     */
    where: RewardRedemptionWhereUniqueInput
    /**
     * In case the RewardRedemption found by the `where` argument doesn't exist, create a new RewardRedemption with this data.
     */
    create: XOR<RewardRedemptionCreateInput, RewardRedemptionUncheckedCreateInput>
    /**
     * In case the RewardRedemption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardRedemptionUpdateInput, RewardRedemptionUncheckedUpdateInput>
  }

  /**
   * RewardRedemption delete
   */
  export type RewardRedemptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter which RewardRedemption to delete.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption deleteMany
   */
  export type RewardRedemptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardRedemptions to delete
     */
    where?: RewardRedemptionWhereInput
    /**
     * Limit how many RewardRedemptions to delete.
     */
    limit?: number
  }

  /**
   * RewardRedemption without action
   */
  export type RewardRedemptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardRedemption
     */
    omit?: RewardRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password',
    name: 'name',
    phone: 'phone',
    avatar: 'avatar',
    userType: 'userType',
    verified: 'verified',
    verificationToken: 'verificationToken',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordExpires: 'resetPasswordExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ConsumerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    location: 'location',
    points: 'points',
    receiveUpdates: 'receiveUpdates'
  };

  export type ConsumerScalarFieldEnum = (typeof ConsumerScalarFieldEnum)[keyof typeof ConsumerScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    businessName: 'businessName',
    businessAddress: 'businessAddress',
    businessType: 'businessType',
    description: 'description',
    logo: 'logo',
    coverImage: 'coverImage',
    website: 'website',
    socialLinks: 'socialLinks',
    status: 'status',
    verificationDocument: 'verificationDocument',
    points: 'points'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const RecyclingCenterScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    businessId: 'businessId',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    operatingHours: 'operatingHours',
    phone: 'phone',
    email: 'email',
    website: 'website',
    image: 'image',
    description: 'description',
    acceptedWasteTypes: 'acceptedWasteTypes',
    pointsPerWasteType: 'pointsPerWasteType',
    isActive: 'isActive'
  };

  export type RecyclingCenterScalarFieldEnum = (typeof RecyclingCenterScalarFieldEnum)[keyof typeof RecyclingCenterScalarFieldEnum]


  export const QRCodeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    consumerId: 'consumerId',
    wasteType: 'wasteType',
    quantity: 'quantity',
    unit: 'unit',
    description: 'description',
    photos: 'photos',
    qrCodeUrl: 'qrCodeUrl',
    isVerified: 'isVerified'
  };

  export type QRCodeScalarFieldEnum = (typeof QRCodeScalarFieldEnum)[keyof typeof QRCodeScalarFieldEnum]


  export const RecyclingHistoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    qrCodeId: 'qrCodeId',
    consumerId: 'consumerId',
    businessId: 'businessId',
    recyclingCenterId: 'recyclingCenterId',
    pointsEarned: 'pointsEarned',
    verifiedAt: 'verifiedAt',
    notes: 'notes',
    staffName: 'staffName',
    photo: 'photo'
  };

  export type RecyclingHistoryScalarFieldEnum = (typeof RecyclingHistoryScalarFieldEnum)[keyof typeof RecyclingHistoryScalarFieldEnum]


  export const RewardScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    pointsCost: 'pointsCost',
    image: 'image',
    isActive: 'isActive',
    quantity: 'quantity'
  };

  export type RewardScalarFieldEnum = (typeof RewardScalarFieldEnum)[keyof typeof RewardScalarFieldEnum]


  export const RewardRedemptionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    consumerId: 'consumerId',
    rewardId: 'rewardId',
    pointsSpent: 'pointsSpent',
    status: 'status',
    redeemedAt: 'redeemedAt'
  };

  export type RewardRedemptionScalarFieldEnum = (typeof RewardRedemptionScalarFieldEnum)[keyof typeof RewardRedemptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BusinessStatus'
   */
  export type EnumBusinessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessStatus'>
    


  /**
   * Reference to a field of type 'BusinessStatus[]'
   */
  export type ListEnumBusinessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'WasteType[]'
   */
  export type ListEnumWasteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WasteType[]'>
    


  /**
   * Reference to a field of type 'WasteType'
   */
  export type EnumWasteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WasteType'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    verified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    consumer?: XOR<ConsumerNullableScalarRelationFilter, ConsumerWhereInput> | null
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    userType?: SortOrder
    verified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    consumer?: ConsumerOrderByWithRelationInput
    business?: BusinessOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    verified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    consumer?: XOR<ConsumerNullableScalarRelationFilter, ConsumerWhereInput> | null
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    userType?: SortOrder
    verified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type ConsumerWhereInput = {
    AND?: ConsumerWhereInput | ConsumerWhereInput[]
    OR?: ConsumerWhereInput[]
    NOT?: ConsumerWhereInput | ConsumerWhereInput[]
    id?: StringFilter<"Consumer"> | string
    createdAt?: DateTimeFilter<"Consumer"> | Date | string
    updatedAt?: DateTimeFilter<"Consumer"> | Date | string
    userId?: StringFilter<"Consumer"> | string
    location?: StringNullableFilter<"Consumer"> | string | null
    points?: IntFilter<"Consumer"> | number
    receiveUpdates?: BoolFilter<"Consumer"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    qrCodes?: QRCodeListRelationFilter
    recyclingHistory?: RecyclingHistoryListRelationFilter
    rewards?: RewardRedemptionListRelationFilter
  }

  export type ConsumerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    location?: SortOrderInput | SortOrder
    points?: SortOrder
    receiveUpdates?: SortOrder
    user?: UserOrderByWithRelationInput
    qrCodes?: QRCodeOrderByRelationAggregateInput
    recyclingHistory?: RecyclingHistoryOrderByRelationAggregateInput
    rewards?: RewardRedemptionOrderByRelationAggregateInput
  }

  export type ConsumerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ConsumerWhereInput | ConsumerWhereInput[]
    OR?: ConsumerWhereInput[]
    NOT?: ConsumerWhereInput | ConsumerWhereInput[]
    createdAt?: DateTimeFilter<"Consumer"> | Date | string
    updatedAt?: DateTimeFilter<"Consumer"> | Date | string
    location?: StringNullableFilter<"Consumer"> | string | null
    points?: IntFilter<"Consumer"> | number
    receiveUpdates?: BoolFilter<"Consumer"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    qrCodes?: QRCodeListRelationFilter
    recyclingHistory?: RecyclingHistoryListRelationFilter
    rewards?: RewardRedemptionListRelationFilter
  }, "id" | "userId">

  export type ConsumerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    location?: SortOrderInput | SortOrder
    points?: SortOrder
    receiveUpdates?: SortOrder
    _count?: ConsumerCountOrderByAggregateInput
    _avg?: ConsumerAvgOrderByAggregateInput
    _max?: ConsumerMaxOrderByAggregateInput
    _min?: ConsumerMinOrderByAggregateInput
    _sum?: ConsumerSumOrderByAggregateInput
  }

  export type ConsumerScalarWhereWithAggregatesInput = {
    AND?: ConsumerScalarWhereWithAggregatesInput | ConsumerScalarWhereWithAggregatesInput[]
    OR?: ConsumerScalarWhereWithAggregatesInput[]
    NOT?: ConsumerScalarWhereWithAggregatesInput | ConsumerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consumer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Consumer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Consumer"> | Date | string
    userId?: StringWithAggregatesFilter<"Consumer"> | string
    location?: StringNullableWithAggregatesFilter<"Consumer"> | string | null
    points?: IntWithAggregatesFilter<"Consumer"> | number
    receiveUpdates?: BoolWithAggregatesFilter<"Consumer"> | boolean
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    userId?: StringFilter<"Business"> | string
    businessName?: StringFilter<"Business"> | string
    businessAddress?: StringFilter<"Business"> | string
    businessType?: StringFilter<"Business"> | string
    description?: StringNullableFilter<"Business"> | string | null
    logo?: StringNullableFilter<"Business"> | string | null
    coverImage?: StringNullableFilter<"Business"> | string | null
    website?: StringNullableFilter<"Business"> | string | null
    socialLinks?: JsonNullableFilter<"Business">
    status?: EnumBusinessStatusFilter<"Business"> | $Enums.BusinessStatus
    verificationDocument?: StringNullableFilter<"Business"> | string | null
    points?: IntFilter<"Business"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recyclingCenters?: RecyclingCenterListRelationFilter
    verifiedQrCodes?: RecyclingHistoryListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessAddress?: SortOrder
    businessType?: SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    status?: SortOrder
    verificationDocument?: SortOrderInput | SortOrder
    points?: SortOrder
    user?: UserOrderByWithRelationInput
    recyclingCenters?: RecyclingCenterOrderByRelationAggregateInput
    verifiedQrCodes?: RecyclingHistoryOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    businessName?: StringFilter<"Business"> | string
    businessAddress?: StringFilter<"Business"> | string
    businessType?: StringFilter<"Business"> | string
    description?: StringNullableFilter<"Business"> | string | null
    logo?: StringNullableFilter<"Business"> | string | null
    coverImage?: StringNullableFilter<"Business"> | string | null
    website?: StringNullableFilter<"Business"> | string | null
    socialLinks?: JsonNullableFilter<"Business">
    status?: EnumBusinessStatusFilter<"Business"> | $Enums.BusinessStatus
    verificationDocument?: StringNullableFilter<"Business"> | string | null
    points?: IntFilter<"Business"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recyclingCenters?: RecyclingCenterListRelationFilter
    verifiedQrCodes?: RecyclingHistoryListRelationFilter
  }, "id" | "userId">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessAddress?: SortOrder
    businessType?: SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    status?: SortOrder
    verificationDocument?: SortOrderInput | SortOrder
    points?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _avg?: BusinessAvgOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
    _sum?: BusinessSumOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Business"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    userId?: StringWithAggregatesFilter<"Business"> | string
    businessName?: StringWithAggregatesFilter<"Business"> | string
    businessAddress?: StringWithAggregatesFilter<"Business"> | string
    businessType?: StringWithAggregatesFilter<"Business"> | string
    description?: StringNullableWithAggregatesFilter<"Business"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Business"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Business"> | string | null
    website?: StringNullableWithAggregatesFilter<"Business"> | string | null
    socialLinks?: JsonNullableWithAggregatesFilter<"Business">
    status?: EnumBusinessStatusWithAggregatesFilter<"Business"> | $Enums.BusinessStatus
    verificationDocument?: StringNullableWithAggregatesFilter<"Business"> | string | null
    points?: IntWithAggregatesFilter<"Business"> | number
  }

  export type RecyclingCenterWhereInput = {
    AND?: RecyclingCenterWhereInput | RecyclingCenterWhereInput[]
    OR?: RecyclingCenterWhereInput[]
    NOT?: RecyclingCenterWhereInput | RecyclingCenterWhereInput[]
    id?: StringFilter<"RecyclingCenter"> | string
    createdAt?: DateTimeFilter<"RecyclingCenter"> | Date | string
    updatedAt?: DateTimeFilter<"RecyclingCenter"> | Date | string
    businessId?: StringFilter<"RecyclingCenter"> | string
    name?: StringFilter<"RecyclingCenter"> | string
    address?: StringFilter<"RecyclingCenter"> | string
    latitude?: FloatNullableFilter<"RecyclingCenter"> | number | null
    longitude?: FloatNullableFilter<"RecyclingCenter"> | number | null
    operatingHours?: JsonNullableFilter<"RecyclingCenter">
    phone?: StringNullableFilter<"RecyclingCenter"> | string | null
    email?: StringNullableFilter<"RecyclingCenter"> | string | null
    website?: StringNullableFilter<"RecyclingCenter"> | string | null
    image?: StringNullableFilter<"RecyclingCenter"> | string | null
    description?: StringNullableFilter<"RecyclingCenter"> | string | null
    acceptedWasteTypes?: EnumWasteTypeNullableListFilter<"RecyclingCenter">
    pointsPerWasteType?: JsonNullableFilter<"RecyclingCenter">
    isActive?: BoolFilter<"RecyclingCenter"> | boolean
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    recyclingHistory?: RecyclingHistoryListRelationFilter
  }

  export type RecyclingCenterOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    operatingHours?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    acceptedWasteTypes?: SortOrder
    pointsPerWasteType?: SortOrderInput | SortOrder
    isActive?: SortOrder
    business?: BusinessOrderByWithRelationInput
    recyclingHistory?: RecyclingHistoryOrderByRelationAggregateInput
  }

  export type RecyclingCenterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecyclingCenterWhereInput | RecyclingCenterWhereInput[]
    OR?: RecyclingCenterWhereInput[]
    NOT?: RecyclingCenterWhereInput | RecyclingCenterWhereInput[]
    createdAt?: DateTimeFilter<"RecyclingCenter"> | Date | string
    updatedAt?: DateTimeFilter<"RecyclingCenter"> | Date | string
    businessId?: StringFilter<"RecyclingCenter"> | string
    name?: StringFilter<"RecyclingCenter"> | string
    address?: StringFilter<"RecyclingCenter"> | string
    latitude?: FloatNullableFilter<"RecyclingCenter"> | number | null
    longitude?: FloatNullableFilter<"RecyclingCenter"> | number | null
    operatingHours?: JsonNullableFilter<"RecyclingCenter">
    phone?: StringNullableFilter<"RecyclingCenter"> | string | null
    email?: StringNullableFilter<"RecyclingCenter"> | string | null
    website?: StringNullableFilter<"RecyclingCenter"> | string | null
    image?: StringNullableFilter<"RecyclingCenter"> | string | null
    description?: StringNullableFilter<"RecyclingCenter"> | string | null
    acceptedWasteTypes?: EnumWasteTypeNullableListFilter<"RecyclingCenter">
    pointsPerWasteType?: JsonNullableFilter<"RecyclingCenter">
    isActive?: BoolFilter<"RecyclingCenter"> | boolean
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    recyclingHistory?: RecyclingHistoryListRelationFilter
  }, "id">

  export type RecyclingCenterOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    operatingHours?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    acceptedWasteTypes?: SortOrder
    pointsPerWasteType?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: RecyclingCenterCountOrderByAggregateInput
    _avg?: RecyclingCenterAvgOrderByAggregateInput
    _max?: RecyclingCenterMaxOrderByAggregateInput
    _min?: RecyclingCenterMinOrderByAggregateInput
    _sum?: RecyclingCenterSumOrderByAggregateInput
  }

  export type RecyclingCenterScalarWhereWithAggregatesInput = {
    AND?: RecyclingCenterScalarWhereWithAggregatesInput | RecyclingCenterScalarWhereWithAggregatesInput[]
    OR?: RecyclingCenterScalarWhereWithAggregatesInput[]
    NOT?: RecyclingCenterScalarWhereWithAggregatesInput | RecyclingCenterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecyclingCenter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RecyclingCenter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecyclingCenter"> | Date | string
    businessId?: StringWithAggregatesFilter<"RecyclingCenter"> | string
    name?: StringWithAggregatesFilter<"RecyclingCenter"> | string
    address?: StringWithAggregatesFilter<"RecyclingCenter"> | string
    latitude?: FloatNullableWithAggregatesFilter<"RecyclingCenter"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"RecyclingCenter"> | number | null
    operatingHours?: JsonNullableWithAggregatesFilter<"RecyclingCenter">
    phone?: StringNullableWithAggregatesFilter<"RecyclingCenter"> | string | null
    email?: StringNullableWithAggregatesFilter<"RecyclingCenter"> | string | null
    website?: StringNullableWithAggregatesFilter<"RecyclingCenter"> | string | null
    image?: StringNullableWithAggregatesFilter<"RecyclingCenter"> | string | null
    description?: StringNullableWithAggregatesFilter<"RecyclingCenter"> | string | null
    acceptedWasteTypes?: EnumWasteTypeNullableListFilter<"RecyclingCenter">
    pointsPerWasteType?: JsonNullableWithAggregatesFilter<"RecyclingCenter">
    isActive?: BoolWithAggregatesFilter<"RecyclingCenter"> | boolean
  }

  export type QRCodeWhereInput = {
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    id?: StringFilter<"QRCode"> | string
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    consumerId?: StringFilter<"QRCode"> | string
    wasteType?: EnumWasteTypeFilter<"QRCode"> | $Enums.WasteType
    quantity?: FloatFilter<"QRCode"> | number
    unit?: StringFilter<"QRCode"> | string
    description?: StringNullableFilter<"QRCode"> | string | null
    photos?: StringNullableListFilter<"QRCode">
    qrCodeUrl?: StringFilter<"QRCode"> | string
    isVerified?: BoolFilter<"QRCode"> | boolean
    consumer?: XOR<ConsumerScalarRelationFilter, ConsumerWhereInput>
    recyclingHistory?: XOR<RecyclingHistoryNullableScalarRelationFilter, RecyclingHistoryWhereInput> | null
  }

  export type QRCodeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consumerId?: SortOrder
    wasteType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    description?: SortOrderInput | SortOrder
    photos?: SortOrder
    qrCodeUrl?: SortOrder
    isVerified?: SortOrder
    consumer?: ConsumerOrderByWithRelationInput
    recyclingHistory?: RecyclingHistoryOrderByWithRelationInput
  }

  export type QRCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    consumerId?: StringFilter<"QRCode"> | string
    wasteType?: EnumWasteTypeFilter<"QRCode"> | $Enums.WasteType
    quantity?: FloatFilter<"QRCode"> | number
    unit?: StringFilter<"QRCode"> | string
    description?: StringNullableFilter<"QRCode"> | string | null
    photos?: StringNullableListFilter<"QRCode">
    qrCodeUrl?: StringFilter<"QRCode"> | string
    isVerified?: BoolFilter<"QRCode"> | boolean
    consumer?: XOR<ConsumerScalarRelationFilter, ConsumerWhereInput>
    recyclingHistory?: XOR<RecyclingHistoryNullableScalarRelationFilter, RecyclingHistoryWhereInput> | null
  }, "id">

  export type QRCodeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consumerId?: SortOrder
    wasteType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    description?: SortOrderInput | SortOrder
    photos?: SortOrder
    qrCodeUrl?: SortOrder
    isVerified?: SortOrder
    _count?: QRCodeCountOrderByAggregateInput
    _avg?: QRCodeAvgOrderByAggregateInput
    _max?: QRCodeMaxOrderByAggregateInput
    _min?: QRCodeMinOrderByAggregateInput
    _sum?: QRCodeSumOrderByAggregateInput
  }

  export type QRCodeScalarWhereWithAggregatesInput = {
    AND?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    OR?: QRCodeScalarWhereWithAggregatesInput[]
    NOT?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QRCode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
    consumerId?: StringWithAggregatesFilter<"QRCode"> | string
    wasteType?: EnumWasteTypeWithAggregatesFilter<"QRCode"> | $Enums.WasteType
    quantity?: FloatWithAggregatesFilter<"QRCode"> | number
    unit?: StringWithAggregatesFilter<"QRCode"> | string
    description?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
    photos?: StringNullableListFilter<"QRCode">
    qrCodeUrl?: StringWithAggregatesFilter<"QRCode"> | string
    isVerified?: BoolWithAggregatesFilter<"QRCode"> | boolean
  }

  export type RecyclingHistoryWhereInput = {
    AND?: RecyclingHistoryWhereInput | RecyclingHistoryWhereInput[]
    OR?: RecyclingHistoryWhereInput[]
    NOT?: RecyclingHistoryWhereInput | RecyclingHistoryWhereInput[]
    id?: StringFilter<"RecyclingHistory"> | string
    createdAt?: DateTimeFilter<"RecyclingHistory"> | Date | string
    updatedAt?: DateTimeFilter<"RecyclingHistory"> | Date | string
    qrCodeId?: StringFilter<"RecyclingHistory"> | string
    consumerId?: StringFilter<"RecyclingHistory"> | string
    businessId?: StringFilter<"RecyclingHistory"> | string
    recyclingCenterId?: StringFilter<"RecyclingHistory"> | string
    pointsEarned?: IntFilter<"RecyclingHistory"> | number
    verifiedAt?: DateTimeFilter<"RecyclingHistory"> | Date | string
    notes?: StringNullableFilter<"RecyclingHistory"> | string | null
    staffName?: StringNullableFilter<"RecyclingHistory"> | string | null
    photo?: StringNullableFilter<"RecyclingHistory"> | string | null
    qrCode?: XOR<QRCodeScalarRelationFilter, QRCodeWhereInput>
    consumer?: XOR<ConsumerScalarRelationFilter, ConsumerWhereInput>
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    recyclingCenter?: XOR<RecyclingCenterScalarRelationFilter, RecyclingCenterWhereInput>
  }

  export type RecyclingHistoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodeId?: SortOrder
    consumerId?: SortOrder
    businessId?: SortOrder
    recyclingCenterId?: SortOrder
    pointsEarned?: SortOrder
    verifiedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    staffName?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    qrCode?: QRCodeOrderByWithRelationInput
    consumer?: ConsumerOrderByWithRelationInput
    business?: BusinessOrderByWithRelationInput
    recyclingCenter?: RecyclingCenterOrderByWithRelationInput
  }

  export type RecyclingHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qrCodeId?: string
    AND?: RecyclingHistoryWhereInput | RecyclingHistoryWhereInput[]
    OR?: RecyclingHistoryWhereInput[]
    NOT?: RecyclingHistoryWhereInput | RecyclingHistoryWhereInput[]
    createdAt?: DateTimeFilter<"RecyclingHistory"> | Date | string
    updatedAt?: DateTimeFilter<"RecyclingHistory"> | Date | string
    consumerId?: StringFilter<"RecyclingHistory"> | string
    businessId?: StringFilter<"RecyclingHistory"> | string
    recyclingCenterId?: StringFilter<"RecyclingHistory"> | string
    pointsEarned?: IntFilter<"RecyclingHistory"> | number
    verifiedAt?: DateTimeFilter<"RecyclingHistory"> | Date | string
    notes?: StringNullableFilter<"RecyclingHistory"> | string | null
    staffName?: StringNullableFilter<"RecyclingHistory"> | string | null
    photo?: StringNullableFilter<"RecyclingHistory"> | string | null
    qrCode?: XOR<QRCodeScalarRelationFilter, QRCodeWhereInput>
    consumer?: XOR<ConsumerScalarRelationFilter, ConsumerWhereInput>
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    recyclingCenter?: XOR<RecyclingCenterScalarRelationFilter, RecyclingCenterWhereInput>
  }, "id" | "qrCodeId">

  export type RecyclingHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodeId?: SortOrder
    consumerId?: SortOrder
    businessId?: SortOrder
    recyclingCenterId?: SortOrder
    pointsEarned?: SortOrder
    verifiedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    staffName?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: RecyclingHistoryCountOrderByAggregateInput
    _avg?: RecyclingHistoryAvgOrderByAggregateInput
    _max?: RecyclingHistoryMaxOrderByAggregateInput
    _min?: RecyclingHistoryMinOrderByAggregateInput
    _sum?: RecyclingHistorySumOrderByAggregateInput
  }

  export type RecyclingHistoryScalarWhereWithAggregatesInput = {
    AND?: RecyclingHistoryScalarWhereWithAggregatesInput | RecyclingHistoryScalarWhereWithAggregatesInput[]
    OR?: RecyclingHistoryScalarWhereWithAggregatesInput[]
    NOT?: RecyclingHistoryScalarWhereWithAggregatesInput | RecyclingHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecyclingHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RecyclingHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecyclingHistory"> | Date | string
    qrCodeId?: StringWithAggregatesFilter<"RecyclingHistory"> | string
    consumerId?: StringWithAggregatesFilter<"RecyclingHistory"> | string
    businessId?: StringWithAggregatesFilter<"RecyclingHistory"> | string
    recyclingCenterId?: StringWithAggregatesFilter<"RecyclingHistory"> | string
    pointsEarned?: IntWithAggregatesFilter<"RecyclingHistory"> | number
    verifiedAt?: DateTimeWithAggregatesFilter<"RecyclingHistory"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"RecyclingHistory"> | string | null
    staffName?: StringNullableWithAggregatesFilter<"RecyclingHistory"> | string | null
    photo?: StringNullableWithAggregatesFilter<"RecyclingHistory"> | string | null
  }

  export type RewardWhereInput = {
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    id?: StringFilter<"Reward"> | string
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    name?: StringFilter<"Reward"> | string
    description?: StringFilter<"Reward"> | string
    pointsCost?: IntFilter<"Reward"> | number
    image?: StringNullableFilter<"Reward"> | string | null
    isActive?: BoolFilter<"Reward"> | boolean
    quantity?: IntNullableFilter<"Reward"> | number | null
    redemptions?: RewardRedemptionListRelationFilter
  }

  export type RewardOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pointsCost?: SortOrder
    image?: SortOrderInput | SortOrder
    isActive?: SortOrder
    quantity?: SortOrderInput | SortOrder
    redemptions?: RewardRedemptionOrderByRelationAggregateInput
  }

  export type RewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    name?: StringFilter<"Reward"> | string
    description?: StringFilter<"Reward"> | string
    pointsCost?: IntFilter<"Reward"> | number
    image?: StringNullableFilter<"Reward"> | string | null
    isActive?: BoolFilter<"Reward"> | boolean
    quantity?: IntNullableFilter<"Reward"> | number | null
    redemptions?: RewardRedemptionListRelationFilter
  }, "id">

  export type RewardOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pointsCost?: SortOrder
    image?: SortOrderInput | SortOrder
    isActive?: SortOrder
    quantity?: SortOrderInput | SortOrder
    _count?: RewardCountOrderByAggregateInput
    _avg?: RewardAvgOrderByAggregateInput
    _max?: RewardMaxOrderByAggregateInput
    _min?: RewardMinOrderByAggregateInput
    _sum?: RewardSumOrderByAggregateInput
  }

  export type RewardScalarWhereWithAggregatesInput = {
    AND?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    OR?: RewardScalarWhereWithAggregatesInput[]
    NOT?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reward"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
    name?: StringWithAggregatesFilter<"Reward"> | string
    description?: StringWithAggregatesFilter<"Reward"> | string
    pointsCost?: IntWithAggregatesFilter<"Reward"> | number
    image?: StringNullableWithAggregatesFilter<"Reward"> | string | null
    isActive?: BoolWithAggregatesFilter<"Reward"> | boolean
    quantity?: IntNullableWithAggregatesFilter<"Reward"> | number | null
  }

  export type RewardRedemptionWhereInput = {
    AND?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    OR?: RewardRedemptionWhereInput[]
    NOT?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    id?: StringFilter<"RewardRedemption"> | string
    createdAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    updatedAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    consumerId?: StringFilter<"RewardRedemption"> | string
    rewardId?: StringFilter<"RewardRedemption"> | string
    pointsSpent?: IntFilter<"RewardRedemption"> | number
    status?: StringFilter<"RewardRedemption"> | string
    redeemedAt?: DateTimeNullableFilter<"RewardRedemption"> | Date | string | null
    consumer?: XOR<ConsumerScalarRelationFilter, ConsumerWhereInput>
    reward?: XOR<RewardScalarRelationFilter, RewardWhereInput>
  }

  export type RewardRedemptionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consumerId?: SortOrder
    rewardId?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    consumer?: ConsumerOrderByWithRelationInput
    reward?: RewardOrderByWithRelationInput
  }

  export type RewardRedemptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    OR?: RewardRedemptionWhereInput[]
    NOT?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    createdAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    updatedAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    consumerId?: StringFilter<"RewardRedemption"> | string
    rewardId?: StringFilter<"RewardRedemption"> | string
    pointsSpent?: IntFilter<"RewardRedemption"> | number
    status?: StringFilter<"RewardRedemption"> | string
    redeemedAt?: DateTimeNullableFilter<"RewardRedemption"> | Date | string | null
    consumer?: XOR<ConsumerScalarRelationFilter, ConsumerWhereInput>
    reward?: XOR<RewardScalarRelationFilter, RewardWhereInput>
  }, "id">

  export type RewardRedemptionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consumerId?: SortOrder
    rewardId?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    _count?: RewardRedemptionCountOrderByAggregateInput
    _avg?: RewardRedemptionAvgOrderByAggregateInput
    _max?: RewardRedemptionMaxOrderByAggregateInput
    _min?: RewardRedemptionMinOrderByAggregateInput
    _sum?: RewardRedemptionSumOrderByAggregateInput
  }

  export type RewardRedemptionScalarWhereWithAggregatesInput = {
    AND?: RewardRedemptionScalarWhereWithAggregatesInput | RewardRedemptionScalarWhereWithAggregatesInput[]
    OR?: RewardRedemptionScalarWhereWithAggregatesInput[]
    NOT?: RewardRedemptionScalarWhereWithAggregatesInput | RewardRedemptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RewardRedemption"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RewardRedemption"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RewardRedemption"> | Date | string
    consumerId?: StringWithAggregatesFilter<"RewardRedemption"> | string
    rewardId?: StringWithAggregatesFilter<"RewardRedemption"> | string
    pointsSpent?: IntWithAggregatesFilter<"RewardRedemption"> | number
    status?: StringWithAggregatesFilter<"RewardRedemption"> | string
    redeemedAt?: DateTimeNullableWithAggregatesFilter<"RewardRedemption"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name: string
    phone?: string | null
    avatar?: string | null
    userType: $Enums.UserType
    verified?: boolean
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    consumer?: ConsumerCreateNestedOneWithoutUserInput
    business?: BusinessCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name: string
    phone?: string | null
    avatar?: string | null
    userType: $Enums.UserType
    verified?: boolean
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    consumer?: ConsumerUncheckedCreateNestedOneWithoutUserInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    verified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumer?: ConsumerUpdateOneWithoutUserNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    verified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumer?: ConsumerUncheckedUpdateOneWithoutUserNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name: string
    phone?: string | null
    avatar?: string | null
    userType: $Enums.UserType
    verified?: boolean
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    verified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    verified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    userId: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    userId: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
    user: UserCreateNestedOneWithoutConsumerInput
    qrCodes?: QRCodeCreateNestedManyWithoutConsumerInput
    recyclingHistory?: RecyclingHistoryCreateNestedManyWithoutConsumerInput
    rewards?: RewardRedemptionCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutConsumerInput
    recyclingHistory?: RecyclingHistoryUncheckedCreateNestedManyWithoutConsumerInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutConsumerNestedInput
    qrCodes?: QRCodeUpdateManyWithoutConsumerNestedInput
    recyclingHistory?: RecyclingHistoryUpdateManyWithoutConsumerNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutConsumerNestedInput
  }

  export type ConsumerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
    qrCodes?: QRCodeUncheckedUpdateManyWithoutConsumerNestedInput
    recyclingHistory?: RecyclingHistoryUncheckedUpdateManyWithoutConsumerNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutConsumerNestedInput
  }

  export type ConsumerCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
  }

  export type ConsumerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConsumerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BusinessCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    businessAddress: string
    businessType: string
    description?: string | null
    logo?: string | null
    coverImage?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.BusinessStatus
    verificationDocument?: string | null
    points?: number
    user: UserCreateNestedOneWithoutBusinessInput
    recyclingCenters?: RecyclingCenterCreateNestedManyWithoutBusinessInput
    verifiedQrCodes?: RecyclingHistoryCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    businessName: string
    businessAddress: string
    businessType: string
    description?: string | null
    logo?: string | null
    coverImage?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.BusinessStatus
    verificationDocument?: string | null
    points?: number
    recyclingCenters?: RecyclingCenterUncheckedCreateNestedManyWithoutBusinessInput
    verifiedQrCodes?: RecyclingHistoryUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumBusinessStatusFieldUpdateOperationsInput | $Enums.BusinessStatus
    verificationDocument?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBusinessNestedInput
    recyclingCenters?: RecyclingCenterUpdateManyWithoutBusinessNestedInput
    verifiedQrCodes?: RecyclingHistoryUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumBusinessStatusFieldUpdateOperationsInput | $Enums.BusinessStatus
    verificationDocument?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    recyclingCenters?: RecyclingCenterUncheckedUpdateManyWithoutBusinessNestedInput
    verifiedQrCodes?: RecyclingHistoryUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    businessName: string
    businessAddress: string
    businessType: string
    description?: string | null
    logo?: string | null
    coverImage?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.BusinessStatus
    verificationDocument?: string | null
    points?: number
  }

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumBusinessStatusFieldUpdateOperationsInput | $Enums.BusinessStatus
    verificationDocument?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumBusinessStatusFieldUpdateOperationsInput | $Enums.BusinessStatus
    verificationDocument?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
  }

  export type RecyclingCenterCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: string | null
    email?: string | null
    website?: string | null
    image?: string | null
    description?: string | null
    acceptedWasteTypes?: RecyclingCenterCreateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    business: BusinessCreateNestedOneWithoutRecyclingCentersInput
    recyclingHistory?: RecyclingHistoryCreateNestedManyWithoutRecyclingCenterInput
  }

  export type RecyclingCenterUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessId: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: string | null
    email?: string | null
    website?: string | null
    image?: string | null
    description?: string | null
    acceptedWasteTypes?: RecyclingCenterCreateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    recyclingHistory?: RecyclingHistoryUncheckedCreateNestedManyWithoutRecyclingCenterInput
  }

  export type RecyclingCenterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedWasteTypes?: RecyclingCenterUpdateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    business?: BusinessUpdateOneRequiredWithoutRecyclingCentersNestedInput
    recyclingHistory?: RecyclingHistoryUpdateManyWithoutRecyclingCenterNestedInput
  }

  export type RecyclingCenterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedWasteTypes?: RecyclingCenterUpdateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    recyclingHistory?: RecyclingHistoryUncheckedUpdateManyWithoutRecyclingCenterNestedInput
  }

  export type RecyclingCenterCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessId: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: string | null
    email?: string | null
    website?: string | null
    image?: string | null
    description?: string | null
    acceptedWasteTypes?: RecyclingCenterCreateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
  }

  export type RecyclingCenterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedWasteTypes?: RecyclingCenterUpdateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecyclingCenterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedWasteTypes?: RecyclingCenterUpdateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QRCodeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wasteType: $Enums.WasteType
    quantity: number
    unit: string
    description?: string | null
    photos?: QRCodeCreatephotosInput | string[]
    qrCodeUrl: string
    isVerified?: boolean
    consumer: ConsumerCreateNestedOneWithoutQrCodesInput
    recyclingHistory?: RecyclingHistoryCreateNestedOneWithoutQrCodeInput
  }

  export type QRCodeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    consumerId: string
    wasteType: $Enums.WasteType
    quantity: number
    unit: string
    description?: string | null
    photos?: QRCodeCreatephotosInput | string[]
    qrCodeUrl: string
    isVerified?: boolean
    recyclingHistory?: RecyclingHistoryUncheckedCreateNestedOneWithoutQrCodeInput
  }

  export type QRCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wasteType?: EnumWasteTypeFieldUpdateOperationsInput | $Enums.WasteType
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: QRCodeUpdatephotosInput | string[]
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    consumer?: ConsumerUpdateOneRequiredWithoutQrCodesNestedInput
    recyclingHistory?: RecyclingHistoryUpdateOneWithoutQrCodeNestedInput
  }

  export type QRCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumerId?: StringFieldUpdateOperationsInput | string
    wasteType?: EnumWasteTypeFieldUpdateOperationsInput | $Enums.WasteType
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: QRCodeUpdatephotosInput | string[]
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    recyclingHistory?: RecyclingHistoryUncheckedUpdateOneWithoutQrCodeNestedInput
  }

  export type QRCodeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    consumerId: string
    wasteType: $Enums.WasteType
    quantity: number
    unit: string
    description?: string | null
    photos?: QRCodeCreatephotosInput | string[]
    qrCodeUrl: string
    isVerified?: boolean
  }

  export type QRCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wasteType?: EnumWasteTypeFieldUpdateOperationsInput | $Enums.WasteType
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: QRCodeUpdatephotosInput | string[]
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QRCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumerId?: StringFieldUpdateOperationsInput | string
    wasteType?: EnumWasteTypeFieldUpdateOperationsInput | $Enums.WasteType
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: QRCodeUpdatephotosInput | string[]
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecyclingHistoryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
    qrCode: QRCodeCreateNestedOneWithoutRecyclingHistoryInput
    consumer: ConsumerCreateNestedOneWithoutRecyclingHistoryInput
    business: BusinessCreateNestedOneWithoutVerifiedQrCodesInput
    recyclingCenter: RecyclingCenterCreateNestedOneWithoutRecyclingHistoryInput
  }

  export type RecyclingHistoryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
    consumerId: string
    businessId: string
    recyclingCenterId: string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
  }

  export type RecyclingHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: QRCodeUpdateOneRequiredWithoutRecyclingHistoryNestedInput
    consumer?: ConsumerUpdateOneRequiredWithoutRecyclingHistoryNestedInput
    business?: BusinessUpdateOneRequiredWithoutVerifiedQrCodesNestedInput
    recyclingCenter?: RecyclingCenterUpdateOneRequiredWithoutRecyclingHistoryNestedInput
  }

  export type RecyclingHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    consumerId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    recyclingCenterId?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecyclingHistoryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
    consumerId: string
    businessId: string
    recyclingCenterId: string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
  }

  export type RecyclingHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecyclingHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    consumerId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    recyclingCenterId?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RewardCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    pointsCost: number
    image?: string | null
    isActive?: boolean
    quantity?: number | null
    redemptions?: RewardRedemptionCreateNestedManyWithoutRewardInput
  }

  export type RewardUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    pointsCost: number
    image?: string | null
    isActive?: boolean
    quantity?: number | null
    redemptions?: RewardRedemptionUncheckedCreateNestedManyWithoutRewardInput
  }

  export type RewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    redemptions?: RewardRedemptionUpdateManyWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    redemptions?: RewardRedemptionUncheckedUpdateManyWithoutRewardNestedInput
  }

  export type RewardCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    pointsCost: number
    image?: string | null
    isActive?: boolean
    quantity?: number | null
  }

  export type RewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RewardRedemptionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pointsSpent: number
    status: string
    redeemedAt?: Date | string | null
    consumer: ConsumerCreateNestedOneWithoutRewardsInput
    reward: RewardCreateNestedOneWithoutRedemptionsInput
  }

  export type RewardRedemptionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    consumerId: string
    rewardId: string
    pointsSpent: number
    status: string
    redeemedAt?: Date | string | null
  }

  export type RewardRedemptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumer?: ConsumerUpdateOneRequiredWithoutRewardsNestedInput
    reward?: RewardUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type RewardRedemptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumerId?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RewardRedemptionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    consumerId: string
    rewardId: string
    pointsSpent: number
    status: string
    redeemedAt?: Date | string | null
  }

  export type RewardRedemptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RewardRedemptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumerId?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ConsumerNullableScalarRelationFilter = {
    is?: ConsumerWhereInput | null
    isNot?: ConsumerWhereInput | null
  }

  export type BusinessNullableScalarRelationFilter = {
    is?: BusinessWhereInput | null
    isNot?: BusinessWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    userType?: SortOrder
    verified?: SortOrder
    verificationToken?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    userType?: SortOrder
    verified?: SortOrder
    verificationToken?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    userType?: SortOrder
    verified?: SortOrder
    verificationToken?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
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

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
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

  export type QRCodeListRelationFilter = {
    every?: QRCodeWhereInput
    some?: QRCodeWhereInput
    none?: QRCodeWhereInput
  }

  export type RecyclingHistoryListRelationFilter = {
    every?: RecyclingHistoryWhereInput
    some?: RecyclingHistoryWhereInput
    none?: RecyclingHistoryWhereInput
  }

  export type RewardRedemptionListRelationFilter = {
    every?: RewardRedemptionWhereInput
    some?: RewardRedemptionWhereInput
    none?: RewardRedemptionWhereInput
  }

  export type QRCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecyclingHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardRedemptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsumerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    points?: SortOrder
    receiveUpdates?: SortOrder
  }

  export type ConsumerAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type ConsumerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    points?: SortOrder
    receiveUpdates?: SortOrder
  }

  export type ConsumerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    points?: SortOrder
    receiveUpdates?: SortOrder
  }

  export type ConsumerSumOrderByAggregateInput = {
    points?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumBusinessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessStatus | EnumBusinessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessStatus[] | ListEnumBusinessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessStatus[] | ListEnumBusinessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessStatusFilter<$PrismaModel> | $Enums.BusinessStatus
  }

  export type RecyclingCenterListRelationFilter = {
    every?: RecyclingCenterWhereInput
    some?: RecyclingCenterWhereInput
    none?: RecyclingCenterWhereInput
  }

  export type RecyclingCenterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessAddress?: SortOrder
    businessType?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    coverImage?: SortOrder
    website?: SortOrder
    socialLinks?: SortOrder
    status?: SortOrder
    verificationDocument?: SortOrder
    points?: SortOrder
  }

  export type BusinessAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessAddress?: SortOrder
    businessType?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    coverImage?: SortOrder
    website?: SortOrder
    status?: SortOrder
    verificationDocument?: SortOrder
    points?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessAddress?: SortOrder
    businessType?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    coverImage?: SortOrder
    website?: SortOrder
    status?: SortOrder
    verificationDocument?: SortOrder
    points?: SortOrder
  }

  export type BusinessSumOrderByAggregateInput = {
    points?: SortOrder
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumBusinessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessStatus | EnumBusinessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessStatus[] | ListEnumBusinessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessStatus[] | ListEnumBusinessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessStatusWithAggregatesFilter<$PrismaModel> | $Enums.BusinessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessStatusFilter<$PrismaModel>
    _max?: NestedEnumBusinessStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumWasteTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.WasteType | EnumWasteTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BusinessScalarRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type RecyclingCenterCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    operatingHours?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    image?: SortOrder
    description?: SortOrder
    acceptedWasteTypes?: SortOrder
    pointsPerWasteType?: SortOrder
    isActive?: SortOrder
  }

  export type RecyclingCenterAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type RecyclingCenterMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    image?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type RecyclingCenterMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    image?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type RecyclingCenterSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumWasteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WasteType | EnumWasteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWasteTypeFilter<$PrismaModel> | $Enums.WasteType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ConsumerScalarRelationFilter = {
    is?: ConsumerWhereInput
    isNot?: ConsumerWhereInput
  }

  export type RecyclingHistoryNullableScalarRelationFilter = {
    is?: RecyclingHistoryWhereInput | null
    isNot?: RecyclingHistoryWhereInput | null
  }

  export type QRCodeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consumerId?: SortOrder
    wasteType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    photos?: SortOrder
    qrCodeUrl?: SortOrder
    isVerified?: SortOrder
  }

  export type QRCodeAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type QRCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consumerId?: SortOrder
    wasteType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    qrCodeUrl?: SortOrder
    isVerified?: SortOrder
  }

  export type QRCodeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consumerId?: SortOrder
    wasteType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    qrCodeUrl?: SortOrder
    isVerified?: SortOrder
  }

  export type QRCodeSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumWasteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WasteType | EnumWasteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWasteTypeWithAggregatesFilter<$PrismaModel> | $Enums.WasteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWasteTypeFilter<$PrismaModel>
    _max?: NestedEnumWasteTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type QRCodeScalarRelationFilter = {
    is?: QRCodeWhereInput
    isNot?: QRCodeWhereInput
  }

  export type RecyclingCenterScalarRelationFilter = {
    is?: RecyclingCenterWhereInput
    isNot?: RecyclingCenterWhereInput
  }

  export type RecyclingHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodeId?: SortOrder
    consumerId?: SortOrder
    businessId?: SortOrder
    recyclingCenterId?: SortOrder
    pointsEarned?: SortOrder
    verifiedAt?: SortOrder
    notes?: SortOrder
    staffName?: SortOrder
    photo?: SortOrder
  }

  export type RecyclingHistoryAvgOrderByAggregateInput = {
    pointsEarned?: SortOrder
  }

  export type RecyclingHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodeId?: SortOrder
    consumerId?: SortOrder
    businessId?: SortOrder
    recyclingCenterId?: SortOrder
    pointsEarned?: SortOrder
    verifiedAt?: SortOrder
    notes?: SortOrder
    staffName?: SortOrder
    photo?: SortOrder
  }

  export type RecyclingHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodeId?: SortOrder
    consumerId?: SortOrder
    businessId?: SortOrder
    recyclingCenterId?: SortOrder
    pointsEarned?: SortOrder
    verifiedAt?: SortOrder
    notes?: SortOrder
    staffName?: SortOrder
    photo?: SortOrder
  }

  export type RecyclingHistorySumOrderByAggregateInput = {
    pointsEarned?: SortOrder
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

  export type RewardCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pointsCost?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    quantity?: SortOrder
  }

  export type RewardAvgOrderByAggregateInput = {
    pointsCost?: SortOrder
    quantity?: SortOrder
  }

  export type RewardMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pointsCost?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    quantity?: SortOrder
  }

  export type RewardMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pointsCost?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    quantity?: SortOrder
  }

  export type RewardSumOrderByAggregateInput = {
    pointsCost?: SortOrder
    quantity?: SortOrder
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

  export type RewardScalarRelationFilter = {
    is?: RewardWhereInput
    isNot?: RewardWhereInput
  }

  export type RewardRedemptionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consumerId?: SortOrder
    rewardId?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
  }

  export type RewardRedemptionAvgOrderByAggregateInput = {
    pointsSpent?: SortOrder
  }

  export type RewardRedemptionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consumerId?: SortOrder
    rewardId?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
  }

  export type RewardRedemptionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consumerId?: SortOrder
    rewardId?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
  }

  export type RewardRedemptionSumOrderByAggregateInput = {
    pointsSpent?: SortOrder
  }

  export type ConsumerCreateNestedOneWithoutUserInput = {
    create?: XOR<ConsumerCreateWithoutUserInput, ConsumerUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutUserInput
    connect?: ConsumerWhereUniqueInput
  }

  export type BusinessCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUserInput
    connect?: BusinessWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ConsumerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ConsumerCreateWithoutUserInput, ConsumerUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutUserInput
    connect?: ConsumerWhereUniqueInput
  }

  export type BusinessUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUserInput
    connect?: BusinessWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ConsumerUpdateOneWithoutUserNestedInput = {
    create?: XOR<ConsumerCreateWithoutUserInput, ConsumerUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutUserInput
    upsert?: ConsumerUpsertWithoutUserInput
    disconnect?: ConsumerWhereInput | boolean
    delete?: ConsumerWhereInput | boolean
    connect?: ConsumerWhereUniqueInput
    update?: XOR<XOR<ConsumerUpdateToOneWithWhereWithoutUserInput, ConsumerUpdateWithoutUserInput>, ConsumerUncheckedUpdateWithoutUserInput>
  }

  export type BusinessUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUserInput
    upsert?: BusinessUpsertWithoutUserInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutUserInput, BusinessUpdateWithoutUserInput>, BusinessUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ConsumerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ConsumerCreateWithoutUserInput, ConsumerUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutUserInput
    upsert?: ConsumerUpsertWithoutUserInput
    disconnect?: ConsumerWhereInput | boolean
    delete?: ConsumerWhereInput | boolean
    connect?: ConsumerWhereUniqueInput
    update?: XOR<XOR<ConsumerUpdateToOneWithWhereWithoutUserInput, ConsumerUpdateWithoutUserInput>, ConsumerUncheckedUpdateWithoutUserInput>
  }

  export type BusinessUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUserInput
    upsert?: BusinessUpsertWithoutUserInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutUserInput, BusinessUpdateWithoutUserInput>, BusinessUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutConsumerInput = {
    create?: XOR<UserCreateWithoutConsumerInput, UserUncheckedCreateWithoutConsumerInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsumerInput
    connect?: UserWhereUniqueInput
  }

  export type QRCodeCreateNestedManyWithoutConsumerInput = {
    create?: XOR<QRCodeCreateWithoutConsumerInput, QRCodeUncheckedCreateWithoutConsumerInput> | QRCodeCreateWithoutConsumerInput[] | QRCodeUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutConsumerInput | QRCodeCreateOrConnectWithoutConsumerInput[]
    createMany?: QRCodeCreateManyConsumerInputEnvelope
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
  }

  export type RecyclingHistoryCreateNestedManyWithoutConsumerInput = {
    create?: XOR<RecyclingHistoryCreateWithoutConsumerInput, RecyclingHistoryUncheckedCreateWithoutConsumerInput> | RecyclingHistoryCreateWithoutConsumerInput[] | RecyclingHistoryUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutConsumerInput | RecyclingHistoryCreateOrConnectWithoutConsumerInput[]
    createMany?: RecyclingHistoryCreateManyConsumerInputEnvelope
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
  }

  export type RewardRedemptionCreateNestedManyWithoutConsumerInput = {
    create?: XOR<RewardRedemptionCreateWithoutConsumerInput, RewardRedemptionUncheckedCreateWithoutConsumerInput> | RewardRedemptionCreateWithoutConsumerInput[] | RewardRedemptionUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutConsumerInput | RewardRedemptionCreateOrConnectWithoutConsumerInput[]
    createMany?: RewardRedemptionCreateManyConsumerInputEnvelope
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
  }

  export type QRCodeUncheckedCreateNestedManyWithoutConsumerInput = {
    create?: XOR<QRCodeCreateWithoutConsumerInput, QRCodeUncheckedCreateWithoutConsumerInput> | QRCodeCreateWithoutConsumerInput[] | QRCodeUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutConsumerInput | QRCodeCreateOrConnectWithoutConsumerInput[]
    createMany?: QRCodeCreateManyConsumerInputEnvelope
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
  }

  export type RecyclingHistoryUncheckedCreateNestedManyWithoutConsumerInput = {
    create?: XOR<RecyclingHistoryCreateWithoutConsumerInput, RecyclingHistoryUncheckedCreateWithoutConsumerInput> | RecyclingHistoryCreateWithoutConsumerInput[] | RecyclingHistoryUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutConsumerInput | RecyclingHistoryCreateOrConnectWithoutConsumerInput[]
    createMany?: RecyclingHistoryCreateManyConsumerInputEnvelope
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
  }

  export type RewardRedemptionUncheckedCreateNestedManyWithoutConsumerInput = {
    create?: XOR<RewardRedemptionCreateWithoutConsumerInput, RewardRedemptionUncheckedCreateWithoutConsumerInput> | RewardRedemptionCreateWithoutConsumerInput[] | RewardRedemptionUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutConsumerInput | RewardRedemptionCreateOrConnectWithoutConsumerInput[]
    createMany?: RewardRedemptionCreateManyConsumerInputEnvelope
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutConsumerNestedInput = {
    create?: XOR<UserCreateWithoutConsumerInput, UserUncheckedCreateWithoutConsumerInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsumerInput
    upsert?: UserUpsertWithoutConsumerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsumerInput, UserUpdateWithoutConsumerInput>, UserUncheckedUpdateWithoutConsumerInput>
  }

  export type QRCodeUpdateManyWithoutConsumerNestedInput = {
    create?: XOR<QRCodeCreateWithoutConsumerInput, QRCodeUncheckedCreateWithoutConsumerInput> | QRCodeCreateWithoutConsumerInput[] | QRCodeUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutConsumerInput | QRCodeCreateOrConnectWithoutConsumerInput[]
    upsert?: QRCodeUpsertWithWhereUniqueWithoutConsumerInput | QRCodeUpsertWithWhereUniqueWithoutConsumerInput[]
    createMany?: QRCodeCreateManyConsumerInputEnvelope
    set?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    disconnect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    delete?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    update?: QRCodeUpdateWithWhereUniqueWithoutConsumerInput | QRCodeUpdateWithWhereUniqueWithoutConsumerInput[]
    updateMany?: QRCodeUpdateManyWithWhereWithoutConsumerInput | QRCodeUpdateManyWithWhereWithoutConsumerInput[]
    deleteMany?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
  }

  export type RecyclingHistoryUpdateManyWithoutConsumerNestedInput = {
    create?: XOR<RecyclingHistoryCreateWithoutConsumerInput, RecyclingHistoryUncheckedCreateWithoutConsumerInput> | RecyclingHistoryCreateWithoutConsumerInput[] | RecyclingHistoryUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutConsumerInput | RecyclingHistoryCreateOrConnectWithoutConsumerInput[]
    upsert?: RecyclingHistoryUpsertWithWhereUniqueWithoutConsumerInput | RecyclingHistoryUpsertWithWhereUniqueWithoutConsumerInput[]
    createMany?: RecyclingHistoryCreateManyConsumerInputEnvelope
    set?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    disconnect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    delete?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    update?: RecyclingHistoryUpdateWithWhereUniqueWithoutConsumerInput | RecyclingHistoryUpdateWithWhereUniqueWithoutConsumerInput[]
    updateMany?: RecyclingHistoryUpdateManyWithWhereWithoutConsumerInput | RecyclingHistoryUpdateManyWithWhereWithoutConsumerInput[]
    deleteMany?: RecyclingHistoryScalarWhereInput | RecyclingHistoryScalarWhereInput[]
  }

  export type RewardRedemptionUpdateManyWithoutConsumerNestedInput = {
    create?: XOR<RewardRedemptionCreateWithoutConsumerInput, RewardRedemptionUncheckedCreateWithoutConsumerInput> | RewardRedemptionCreateWithoutConsumerInput[] | RewardRedemptionUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutConsumerInput | RewardRedemptionCreateOrConnectWithoutConsumerInput[]
    upsert?: RewardRedemptionUpsertWithWhereUniqueWithoutConsumerInput | RewardRedemptionUpsertWithWhereUniqueWithoutConsumerInput[]
    createMany?: RewardRedemptionCreateManyConsumerInputEnvelope
    set?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    disconnect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    delete?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    update?: RewardRedemptionUpdateWithWhereUniqueWithoutConsumerInput | RewardRedemptionUpdateWithWhereUniqueWithoutConsumerInput[]
    updateMany?: RewardRedemptionUpdateManyWithWhereWithoutConsumerInput | RewardRedemptionUpdateManyWithWhereWithoutConsumerInput[]
    deleteMany?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
  }

  export type QRCodeUncheckedUpdateManyWithoutConsumerNestedInput = {
    create?: XOR<QRCodeCreateWithoutConsumerInput, QRCodeUncheckedCreateWithoutConsumerInput> | QRCodeCreateWithoutConsumerInput[] | QRCodeUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutConsumerInput | QRCodeCreateOrConnectWithoutConsumerInput[]
    upsert?: QRCodeUpsertWithWhereUniqueWithoutConsumerInput | QRCodeUpsertWithWhereUniqueWithoutConsumerInput[]
    createMany?: QRCodeCreateManyConsumerInputEnvelope
    set?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    disconnect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    delete?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    update?: QRCodeUpdateWithWhereUniqueWithoutConsumerInput | QRCodeUpdateWithWhereUniqueWithoutConsumerInput[]
    updateMany?: QRCodeUpdateManyWithWhereWithoutConsumerInput | QRCodeUpdateManyWithWhereWithoutConsumerInput[]
    deleteMany?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
  }

  export type RecyclingHistoryUncheckedUpdateManyWithoutConsumerNestedInput = {
    create?: XOR<RecyclingHistoryCreateWithoutConsumerInput, RecyclingHistoryUncheckedCreateWithoutConsumerInput> | RecyclingHistoryCreateWithoutConsumerInput[] | RecyclingHistoryUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutConsumerInput | RecyclingHistoryCreateOrConnectWithoutConsumerInput[]
    upsert?: RecyclingHistoryUpsertWithWhereUniqueWithoutConsumerInput | RecyclingHistoryUpsertWithWhereUniqueWithoutConsumerInput[]
    createMany?: RecyclingHistoryCreateManyConsumerInputEnvelope
    set?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    disconnect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    delete?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    update?: RecyclingHistoryUpdateWithWhereUniqueWithoutConsumerInput | RecyclingHistoryUpdateWithWhereUniqueWithoutConsumerInput[]
    updateMany?: RecyclingHistoryUpdateManyWithWhereWithoutConsumerInput | RecyclingHistoryUpdateManyWithWhereWithoutConsumerInput[]
    deleteMany?: RecyclingHistoryScalarWhereInput | RecyclingHistoryScalarWhereInput[]
  }

  export type RewardRedemptionUncheckedUpdateManyWithoutConsumerNestedInput = {
    create?: XOR<RewardRedemptionCreateWithoutConsumerInput, RewardRedemptionUncheckedCreateWithoutConsumerInput> | RewardRedemptionCreateWithoutConsumerInput[] | RewardRedemptionUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutConsumerInput | RewardRedemptionCreateOrConnectWithoutConsumerInput[]
    upsert?: RewardRedemptionUpsertWithWhereUniqueWithoutConsumerInput | RewardRedemptionUpsertWithWhereUniqueWithoutConsumerInput[]
    createMany?: RewardRedemptionCreateManyConsumerInputEnvelope
    set?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    disconnect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    delete?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    update?: RewardRedemptionUpdateWithWhereUniqueWithoutConsumerInput | RewardRedemptionUpdateWithWhereUniqueWithoutConsumerInput[]
    updateMany?: RewardRedemptionUpdateManyWithWhereWithoutConsumerInput | RewardRedemptionUpdateManyWithWhereWithoutConsumerInput[]
    deleteMany?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBusinessInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput
    connect?: UserWhereUniqueInput
  }

  export type RecyclingCenterCreateNestedManyWithoutBusinessInput = {
    create?: XOR<RecyclingCenterCreateWithoutBusinessInput, RecyclingCenterUncheckedCreateWithoutBusinessInput> | RecyclingCenterCreateWithoutBusinessInput[] | RecyclingCenterUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RecyclingCenterCreateOrConnectWithoutBusinessInput | RecyclingCenterCreateOrConnectWithoutBusinessInput[]
    createMany?: RecyclingCenterCreateManyBusinessInputEnvelope
    connect?: RecyclingCenterWhereUniqueInput | RecyclingCenterWhereUniqueInput[]
  }

  export type RecyclingHistoryCreateNestedManyWithoutBusinessInput = {
    create?: XOR<RecyclingHistoryCreateWithoutBusinessInput, RecyclingHistoryUncheckedCreateWithoutBusinessInput> | RecyclingHistoryCreateWithoutBusinessInput[] | RecyclingHistoryUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutBusinessInput | RecyclingHistoryCreateOrConnectWithoutBusinessInput[]
    createMany?: RecyclingHistoryCreateManyBusinessInputEnvelope
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
  }

  export type RecyclingCenterUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<RecyclingCenterCreateWithoutBusinessInput, RecyclingCenterUncheckedCreateWithoutBusinessInput> | RecyclingCenterCreateWithoutBusinessInput[] | RecyclingCenterUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RecyclingCenterCreateOrConnectWithoutBusinessInput | RecyclingCenterCreateOrConnectWithoutBusinessInput[]
    createMany?: RecyclingCenterCreateManyBusinessInputEnvelope
    connect?: RecyclingCenterWhereUniqueInput | RecyclingCenterWhereUniqueInput[]
  }

  export type RecyclingHistoryUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<RecyclingHistoryCreateWithoutBusinessInput, RecyclingHistoryUncheckedCreateWithoutBusinessInput> | RecyclingHistoryCreateWithoutBusinessInput[] | RecyclingHistoryUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutBusinessInput | RecyclingHistoryCreateOrConnectWithoutBusinessInput[]
    createMany?: RecyclingHistoryCreateManyBusinessInputEnvelope
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
  }

  export type EnumBusinessStatusFieldUpdateOperationsInput = {
    set?: $Enums.BusinessStatus
  }

  export type UserUpdateOneRequiredWithoutBusinessNestedInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput
    upsert?: UserUpsertWithoutBusinessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusinessInput, UserUpdateWithoutBusinessInput>, UserUncheckedUpdateWithoutBusinessInput>
  }

  export type RecyclingCenterUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<RecyclingCenterCreateWithoutBusinessInput, RecyclingCenterUncheckedCreateWithoutBusinessInput> | RecyclingCenterCreateWithoutBusinessInput[] | RecyclingCenterUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RecyclingCenterCreateOrConnectWithoutBusinessInput | RecyclingCenterCreateOrConnectWithoutBusinessInput[]
    upsert?: RecyclingCenterUpsertWithWhereUniqueWithoutBusinessInput | RecyclingCenterUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: RecyclingCenterCreateManyBusinessInputEnvelope
    set?: RecyclingCenterWhereUniqueInput | RecyclingCenterWhereUniqueInput[]
    disconnect?: RecyclingCenterWhereUniqueInput | RecyclingCenterWhereUniqueInput[]
    delete?: RecyclingCenterWhereUniqueInput | RecyclingCenterWhereUniqueInput[]
    connect?: RecyclingCenterWhereUniqueInput | RecyclingCenterWhereUniqueInput[]
    update?: RecyclingCenterUpdateWithWhereUniqueWithoutBusinessInput | RecyclingCenterUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: RecyclingCenterUpdateManyWithWhereWithoutBusinessInput | RecyclingCenterUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: RecyclingCenterScalarWhereInput | RecyclingCenterScalarWhereInput[]
  }

  export type RecyclingHistoryUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<RecyclingHistoryCreateWithoutBusinessInput, RecyclingHistoryUncheckedCreateWithoutBusinessInput> | RecyclingHistoryCreateWithoutBusinessInput[] | RecyclingHistoryUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutBusinessInput | RecyclingHistoryCreateOrConnectWithoutBusinessInput[]
    upsert?: RecyclingHistoryUpsertWithWhereUniqueWithoutBusinessInput | RecyclingHistoryUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: RecyclingHistoryCreateManyBusinessInputEnvelope
    set?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    disconnect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    delete?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    update?: RecyclingHistoryUpdateWithWhereUniqueWithoutBusinessInput | RecyclingHistoryUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: RecyclingHistoryUpdateManyWithWhereWithoutBusinessInput | RecyclingHistoryUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: RecyclingHistoryScalarWhereInput | RecyclingHistoryScalarWhereInput[]
  }

  export type RecyclingCenterUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<RecyclingCenterCreateWithoutBusinessInput, RecyclingCenterUncheckedCreateWithoutBusinessInput> | RecyclingCenterCreateWithoutBusinessInput[] | RecyclingCenterUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RecyclingCenterCreateOrConnectWithoutBusinessInput | RecyclingCenterCreateOrConnectWithoutBusinessInput[]
    upsert?: RecyclingCenterUpsertWithWhereUniqueWithoutBusinessInput | RecyclingCenterUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: RecyclingCenterCreateManyBusinessInputEnvelope
    set?: RecyclingCenterWhereUniqueInput | RecyclingCenterWhereUniqueInput[]
    disconnect?: RecyclingCenterWhereUniqueInput | RecyclingCenterWhereUniqueInput[]
    delete?: RecyclingCenterWhereUniqueInput | RecyclingCenterWhereUniqueInput[]
    connect?: RecyclingCenterWhereUniqueInput | RecyclingCenterWhereUniqueInput[]
    update?: RecyclingCenterUpdateWithWhereUniqueWithoutBusinessInput | RecyclingCenterUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: RecyclingCenterUpdateManyWithWhereWithoutBusinessInput | RecyclingCenterUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: RecyclingCenterScalarWhereInput | RecyclingCenterScalarWhereInput[]
  }

  export type RecyclingHistoryUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<RecyclingHistoryCreateWithoutBusinessInput, RecyclingHistoryUncheckedCreateWithoutBusinessInput> | RecyclingHistoryCreateWithoutBusinessInput[] | RecyclingHistoryUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutBusinessInput | RecyclingHistoryCreateOrConnectWithoutBusinessInput[]
    upsert?: RecyclingHistoryUpsertWithWhereUniqueWithoutBusinessInput | RecyclingHistoryUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: RecyclingHistoryCreateManyBusinessInputEnvelope
    set?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    disconnect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    delete?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    update?: RecyclingHistoryUpdateWithWhereUniqueWithoutBusinessInput | RecyclingHistoryUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: RecyclingHistoryUpdateManyWithWhereWithoutBusinessInput | RecyclingHistoryUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: RecyclingHistoryScalarWhereInput | RecyclingHistoryScalarWhereInput[]
  }

  export type RecyclingCenterCreateacceptedWasteTypesInput = {
    set: $Enums.WasteType[]
  }

  export type BusinessCreateNestedOneWithoutRecyclingCentersInput = {
    create?: XOR<BusinessCreateWithoutRecyclingCentersInput, BusinessUncheckedCreateWithoutRecyclingCentersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutRecyclingCentersInput
    connect?: BusinessWhereUniqueInput
  }

  export type RecyclingHistoryCreateNestedManyWithoutRecyclingCenterInput = {
    create?: XOR<RecyclingHistoryCreateWithoutRecyclingCenterInput, RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput> | RecyclingHistoryCreateWithoutRecyclingCenterInput[] | RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutRecyclingCenterInput | RecyclingHistoryCreateOrConnectWithoutRecyclingCenterInput[]
    createMany?: RecyclingHistoryCreateManyRecyclingCenterInputEnvelope
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
  }

  export type RecyclingHistoryUncheckedCreateNestedManyWithoutRecyclingCenterInput = {
    create?: XOR<RecyclingHistoryCreateWithoutRecyclingCenterInput, RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput> | RecyclingHistoryCreateWithoutRecyclingCenterInput[] | RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutRecyclingCenterInput | RecyclingHistoryCreateOrConnectWithoutRecyclingCenterInput[]
    createMany?: RecyclingHistoryCreateManyRecyclingCenterInputEnvelope
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecyclingCenterUpdateacceptedWasteTypesInput = {
    set?: $Enums.WasteType[]
    push?: $Enums.WasteType | $Enums.WasteType[]
  }

  export type BusinessUpdateOneRequiredWithoutRecyclingCentersNestedInput = {
    create?: XOR<BusinessCreateWithoutRecyclingCentersInput, BusinessUncheckedCreateWithoutRecyclingCentersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutRecyclingCentersInput
    upsert?: BusinessUpsertWithoutRecyclingCentersInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutRecyclingCentersInput, BusinessUpdateWithoutRecyclingCentersInput>, BusinessUncheckedUpdateWithoutRecyclingCentersInput>
  }

  export type RecyclingHistoryUpdateManyWithoutRecyclingCenterNestedInput = {
    create?: XOR<RecyclingHistoryCreateWithoutRecyclingCenterInput, RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput> | RecyclingHistoryCreateWithoutRecyclingCenterInput[] | RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutRecyclingCenterInput | RecyclingHistoryCreateOrConnectWithoutRecyclingCenterInput[]
    upsert?: RecyclingHistoryUpsertWithWhereUniqueWithoutRecyclingCenterInput | RecyclingHistoryUpsertWithWhereUniqueWithoutRecyclingCenterInput[]
    createMany?: RecyclingHistoryCreateManyRecyclingCenterInputEnvelope
    set?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    disconnect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    delete?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    update?: RecyclingHistoryUpdateWithWhereUniqueWithoutRecyclingCenterInput | RecyclingHistoryUpdateWithWhereUniqueWithoutRecyclingCenterInput[]
    updateMany?: RecyclingHistoryUpdateManyWithWhereWithoutRecyclingCenterInput | RecyclingHistoryUpdateManyWithWhereWithoutRecyclingCenterInput[]
    deleteMany?: RecyclingHistoryScalarWhereInput | RecyclingHistoryScalarWhereInput[]
  }

  export type RecyclingHistoryUncheckedUpdateManyWithoutRecyclingCenterNestedInput = {
    create?: XOR<RecyclingHistoryCreateWithoutRecyclingCenterInput, RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput> | RecyclingHistoryCreateWithoutRecyclingCenterInput[] | RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput[]
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutRecyclingCenterInput | RecyclingHistoryCreateOrConnectWithoutRecyclingCenterInput[]
    upsert?: RecyclingHistoryUpsertWithWhereUniqueWithoutRecyclingCenterInput | RecyclingHistoryUpsertWithWhereUniqueWithoutRecyclingCenterInput[]
    createMany?: RecyclingHistoryCreateManyRecyclingCenterInputEnvelope
    set?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    disconnect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    delete?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    connect?: RecyclingHistoryWhereUniqueInput | RecyclingHistoryWhereUniqueInput[]
    update?: RecyclingHistoryUpdateWithWhereUniqueWithoutRecyclingCenterInput | RecyclingHistoryUpdateWithWhereUniqueWithoutRecyclingCenterInput[]
    updateMany?: RecyclingHistoryUpdateManyWithWhereWithoutRecyclingCenterInput | RecyclingHistoryUpdateManyWithWhereWithoutRecyclingCenterInput[]
    deleteMany?: RecyclingHistoryScalarWhereInput | RecyclingHistoryScalarWhereInput[]
  }

  export type QRCodeCreatephotosInput = {
    set: string[]
  }

  export type ConsumerCreateNestedOneWithoutQrCodesInput = {
    create?: XOR<ConsumerCreateWithoutQrCodesInput, ConsumerUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutQrCodesInput
    connect?: ConsumerWhereUniqueInput
  }

  export type RecyclingHistoryCreateNestedOneWithoutQrCodeInput = {
    create?: XOR<RecyclingHistoryCreateWithoutQrCodeInput, RecyclingHistoryUncheckedCreateWithoutQrCodeInput>
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutQrCodeInput
    connect?: RecyclingHistoryWhereUniqueInput
  }

  export type RecyclingHistoryUncheckedCreateNestedOneWithoutQrCodeInput = {
    create?: XOR<RecyclingHistoryCreateWithoutQrCodeInput, RecyclingHistoryUncheckedCreateWithoutQrCodeInput>
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutQrCodeInput
    connect?: RecyclingHistoryWhereUniqueInput
  }

  export type EnumWasteTypeFieldUpdateOperationsInput = {
    set?: $Enums.WasteType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QRCodeUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ConsumerUpdateOneRequiredWithoutQrCodesNestedInput = {
    create?: XOR<ConsumerCreateWithoutQrCodesInput, ConsumerUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutQrCodesInput
    upsert?: ConsumerUpsertWithoutQrCodesInput
    connect?: ConsumerWhereUniqueInput
    update?: XOR<XOR<ConsumerUpdateToOneWithWhereWithoutQrCodesInput, ConsumerUpdateWithoutQrCodesInput>, ConsumerUncheckedUpdateWithoutQrCodesInput>
  }

  export type RecyclingHistoryUpdateOneWithoutQrCodeNestedInput = {
    create?: XOR<RecyclingHistoryCreateWithoutQrCodeInput, RecyclingHistoryUncheckedCreateWithoutQrCodeInput>
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutQrCodeInput
    upsert?: RecyclingHistoryUpsertWithoutQrCodeInput
    disconnect?: RecyclingHistoryWhereInput | boolean
    delete?: RecyclingHistoryWhereInput | boolean
    connect?: RecyclingHistoryWhereUniqueInput
    update?: XOR<XOR<RecyclingHistoryUpdateToOneWithWhereWithoutQrCodeInput, RecyclingHistoryUpdateWithoutQrCodeInput>, RecyclingHistoryUncheckedUpdateWithoutQrCodeInput>
  }

  export type RecyclingHistoryUncheckedUpdateOneWithoutQrCodeNestedInput = {
    create?: XOR<RecyclingHistoryCreateWithoutQrCodeInput, RecyclingHistoryUncheckedCreateWithoutQrCodeInput>
    connectOrCreate?: RecyclingHistoryCreateOrConnectWithoutQrCodeInput
    upsert?: RecyclingHistoryUpsertWithoutQrCodeInput
    disconnect?: RecyclingHistoryWhereInput | boolean
    delete?: RecyclingHistoryWhereInput | boolean
    connect?: RecyclingHistoryWhereUniqueInput
    update?: XOR<XOR<RecyclingHistoryUpdateToOneWithWhereWithoutQrCodeInput, RecyclingHistoryUpdateWithoutQrCodeInput>, RecyclingHistoryUncheckedUpdateWithoutQrCodeInput>
  }

  export type QRCodeCreateNestedOneWithoutRecyclingHistoryInput = {
    create?: XOR<QRCodeCreateWithoutRecyclingHistoryInput, QRCodeUncheckedCreateWithoutRecyclingHistoryInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutRecyclingHistoryInput
    connect?: QRCodeWhereUniqueInput
  }

  export type ConsumerCreateNestedOneWithoutRecyclingHistoryInput = {
    create?: XOR<ConsumerCreateWithoutRecyclingHistoryInput, ConsumerUncheckedCreateWithoutRecyclingHistoryInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutRecyclingHistoryInput
    connect?: ConsumerWhereUniqueInput
  }

  export type BusinessCreateNestedOneWithoutVerifiedQrCodesInput = {
    create?: XOR<BusinessCreateWithoutVerifiedQrCodesInput, BusinessUncheckedCreateWithoutVerifiedQrCodesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutVerifiedQrCodesInput
    connect?: BusinessWhereUniqueInput
  }

  export type RecyclingCenterCreateNestedOneWithoutRecyclingHistoryInput = {
    create?: XOR<RecyclingCenterCreateWithoutRecyclingHistoryInput, RecyclingCenterUncheckedCreateWithoutRecyclingHistoryInput>
    connectOrCreate?: RecyclingCenterCreateOrConnectWithoutRecyclingHistoryInput
    connect?: RecyclingCenterWhereUniqueInput
  }

  export type QRCodeUpdateOneRequiredWithoutRecyclingHistoryNestedInput = {
    create?: XOR<QRCodeCreateWithoutRecyclingHistoryInput, QRCodeUncheckedCreateWithoutRecyclingHistoryInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutRecyclingHistoryInput
    upsert?: QRCodeUpsertWithoutRecyclingHistoryInput
    connect?: QRCodeWhereUniqueInput
    update?: XOR<XOR<QRCodeUpdateToOneWithWhereWithoutRecyclingHistoryInput, QRCodeUpdateWithoutRecyclingHistoryInput>, QRCodeUncheckedUpdateWithoutRecyclingHistoryInput>
  }

  export type ConsumerUpdateOneRequiredWithoutRecyclingHistoryNestedInput = {
    create?: XOR<ConsumerCreateWithoutRecyclingHistoryInput, ConsumerUncheckedCreateWithoutRecyclingHistoryInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutRecyclingHistoryInput
    upsert?: ConsumerUpsertWithoutRecyclingHistoryInput
    connect?: ConsumerWhereUniqueInput
    update?: XOR<XOR<ConsumerUpdateToOneWithWhereWithoutRecyclingHistoryInput, ConsumerUpdateWithoutRecyclingHistoryInput>, ConsumerUncheckedUpdateWithoutRecyclingHistoryInput>
  }

  export type BusinessUpdateOneRequiredWithoutVerifiedQrCodesNestedInput = {
    create?: XOR<BusinessCreateWithoutVerifiedQrCodesInput, BusinessUncheckedCreateWithoutVerifiedQrCodesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutVerifiedQrCodesInput
    upsert?: BusinessUpsertWithoutVerifiedQrCodesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutVerifiedQrCodesInput, BusinessUpdateWithoutVerifiedQrCodesInput>, BusinessUncheckedUpdateWithoutVerifiedQrCodesInput>
  }

  export type RecyclingCenterUpdateOneRequiredWithoutRecyclingHistoryNestedInput = {
    create?: XOR<RecyclingCenterCreateWithoutRecyclingHistoryInput, RecyclingCenterUncheckedCreateWithoutRecyclingHistoryInput>
    connectOrCreate?: RecyclingCenterCreateOrConnectWithoutRecyclingHistoryInput
    upsert?: RecyclingCenterUpsertWithoutRecyclingHistoryInput
    connect?: RecyclingCenterWhereUniqueInput
    update?: XOR<XOR<RecyclingCenterUpdateToOneWithWhereWithoutRecyclingHistoryInput, RecyclingCenterUpdateWithoutRecyclingHistoryInput>, RecyclingCenterUncheckedUpdateWithoutRecyclingHistoryInput>
  }

  export type RewardRedemptionCreateNestedManyWithoutRewardInput = {
    create?: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput> | RewardRedemptionCreateWithoutRewardInput[] | RewardRedemptionUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutRewardInput | RewardRedemptionCreateOrConnectWithoutRewardInput[]
    createMany?: RewardRedemptionCreateManyRewardInputEnvelope
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
  }

  export type RewardRedemptionUncheckedCreateNestedManyWithoutRewardInput = {
    create?: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput> | RewardRedemptionCreateWithoutRewardInput[] | RewardRedemptionUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutRewardInput | RewardRedemptionCreateOrConnectWithoutRewardInput[]
    createMany?: RewardRedemptionCreateManyRewardInputEnvelope
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RewardRedemptionUpdateManyWithoutRewardNestedInput = {
    create?: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput> | RewardRedemptionCreateWithoutRewardInput[] | RewardRedemptionUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutRewardInput | RewardRedemptionCreateOrConnectWithoutRewardInput[]
    upsert?: RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput | RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: RewardRedemptionCreateManyRewardInputEnvelope
    set?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    disconnect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    delete?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    update?: RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput | RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: RewardRedemptionUpdateManyWithWhereWithoutRewardInput | RewardRedemptionUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
  }

  export type RewardRedemptionUncheckedUpdateManyWithoutRewardNestedInput = {
    create?: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput> | RewardRedemptionCreateWithoutRewardInput[] | RewardRedemptionUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutRewardInput | RewardRedemptionCreateOrConnectWithoutRewardInput[]
    upsert?: RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput | RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: RewardRedemptionCreateManyRewardInputEnvelope
    set?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    disconnect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    delete?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    update?: RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput | RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: RewardRedemptionUpdateManyWithWhereWithoutRewardInput | RewardRedemptionUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
  }

  export type ConsumerCreateNestedOneWithoutRewardsInput = {
    create?: XOR<ConsumerCreateWithoutRewardsInput, ConsumerUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutRewardsInput
    connect?: ConsumerWhereUniqueInput
  }

  export type RewardCreateNestedOneWithoutRedemptionsInput = {
    create?: XOR<RewardCreateWithoutRedemptionsInput, RewardUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: RewardCreateOrConnectWithoutRedemptionsInput
    connect?: RewardWhereUniqueInput
  }

  export type ConsumerUpdateOneRequiredWithoutRewardsNestedInput = {
    create?: XOR<ConsumerCreateWithoutRewardsInput, ConsumerUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutRewardsInput
    upsert?: ConsumerUpsertWithoutRewardsInput
    connect?: ConsumerWhereUniqueInput
    update?: XOR<XOR<ConsumerUpdateToOneWithWhereWithoutRewardsInput, ConsumerUpdateWithoutRewardsInput>, ConsumerUncheckedUpdateWithoutRewardsInput>
  }

  export type RewardUpdateOneRequiredWithoutRedemptionsNestedInput = {
    create?: XOR<RewardCreateWithoutRedemptionsInput, RewardUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: RewardCreateOrConnectWithoutRedemptionsInput
    upsert?: RewardUpsertWithoutRedemptionsInput
    connect?: RewardWhereUniqueInput
    update?: XOR<XOR<RewardUpdateToOneWithWhereWithoutRedemptionsInput, RewardUpdateWithoutRedemptionsInput>, RewardUncheckedUpdateWithoutRedemptionsInput>
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

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumBusinessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessStatus | EnumBusinessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessStatus[] | ListEnumBusinessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessStatus[] | ListEnumBusinessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessStatusFilter<$PrismaModel> | $Enums.BusinessStatus
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumBusinessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessStatus | EnumBusinessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessStatus[] | ListEnumBusinessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessStatus[] | ListEnumBusinessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessStatusWithAggregatesFilter<$PrismaModel> | $Enums.BusinessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessStatusFilter<$PrismaModel>
    _max?: NestedEnumBusinessStatusFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumWasteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WasteType | EnumWasteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWasteTypeFilter<$PrismaModel> | $Enums.WasteType
  }

  export type NestedEnumWasteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WasteType | EnumWasteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WasteType[] | ListEnumWasteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWasteTypeWithAggregatesFilter<$PrismaModel> | $Enums.WasteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWasteTypeFilter<$PrismaModel>
    _max?: NestedEnumWasteTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ConsumerCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
    qrCodes?: QRCodeCreateNestedManyWithoutConsumerInput
    recyclingHistory?: RecyclingHistoryCreateNestedManyWithoutConsumerInput
    rewards?: RewardRedemptionCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutConsumerInput
    recyclingHistory?: RecyclingHistoryUncheckedCreateNestedManyWithoutConsumerInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerCreateOrConnectWithoutUserInput = {
    where: ConsumerWhereUniqueInput
    create: XOR<ConsumerCreateWithoutUserInput, ConsumerUncheckedCreateWithoutUserInput>
  }

  export type BusinessCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    businessAddress: string
    businessType: string
    description?: string | null
    logo?: string | null
    coverImage?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.BusinessStatus
    verificationDocument?: string | null
    points?: number
    recyclingCenters?: RecyclingCenterCreateNestedManyWithoutBusinessInput
    verifiedQrCodes?: RecyclingHistoryCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    businessAddress: string
    businessType: string
    description?: string | null
    logo?: string | null
    coverImage?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.BusinessStatus
    verificationDocument?: string | null
    points?: number
    recyclingCenters?: RecyclingCenterUncheckedCreateNestedManyWithoutBusinessInput
    verifiedQrCodes?: RecyclingHistoryUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutUserInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConsumerUpsertWithoutUserInput = {
    update: XOR<ConsumerUpdateWithoutUserInput, ConsumerUncheckedUpdateWithoutUserInput>
    create: XOR<ConsumerCreateWithoutUserInput, ConsumerUncheckedCreateWithoutUserInput>
    where?: ConsumerWhereInput
  }

  export type ConsumerUpdateToOneWithWhereWithoutUserInput = {
    where?: ConsumerWhereInput
    data: XOR<ConsumerUpdateWithoutUserInput, ConsumerUncheckedUpdateWithoutUserInput>
  }

  export type ConsumerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
    qrCodes?: QRCodeUpdateManyWithoutConsumerNestedInput
    recyclingHistory?: RecyclingHistoryUpdateManyWithoutConsumerNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutConsumerNestedInput
  }

  export type ConsumerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
    qrCodes?: QRCodeUncheckedUpdateManyWithoutConsumerNestedInput
    recyclingHistory?: RecyclingHistoryUncheckedUpdateManyWithoutConsumerNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutConsumerNestedInput
  }

  export type BusinessUpsertWithoutUserInput = {
    update: XOR<BusinessUpdateWithoutUserInput, BusinessUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutUserInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutUserInput, BusinessUncheckedUpdateWithoutUserInput>
  }

  export type BusinessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumBusinessStatusFieldUpdateOperationsInput | $Enums.BusinessStatus
    verificationDocument?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    recyclingCenters?: RecyclingCenterUpdateManyWithoutBusinessNestedInput
    verifiedQrCodes?: RecyclingHistoryUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumBusinessStatusFieldUpdateOperationsInput | $Enums.BusinessStatus
    verificationDocument?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    recyclingCenters?: RecyclingCenterUncheckedUpdateManyWithoutBusinessNestedInput
    verifiedQrCodes?: RecyclingHistoryUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name: string
    phone?: string | null
    avatar?: string | null
    userType: $Enums.UserType
    verified?: boolean
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    consumer?: ConsumerCreateNestedOneWithoutUserInput
    business?: BusinessCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name: string
    phone?: string | null
    avatar?: string | null
    userType: $Enums.UserType
    verified?: boolean
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    consumer?: ConsumerUncheckedCreateNestedOneWithoutUserInput
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    verified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumer?: ConsumerUpdateOneWithoutUserNestedInput
    business?: BusinessUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    verified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumer?: ConsumerUncheckedUpdateOneWithoutUserNestedInput
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name: string
    phone?: string | null
    avatar?: string | null
    userType: $Enums.UserType
    verified?: boolean
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    business?: BusinessCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name: string
    phone?: string | null
    avatar?: string | null
    userType: $Enums.UserType
    verified?: boolean
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    business?: BusinessUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConsumerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsumerInput, UserUncheckedCreateWithoutConsumerInput>
  }

  export type QRCodeCreateWithoutConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wasteType: $Enums.WasteType
    quantity: number
    unit: string
    description?: string | null
    photos?: QRCodeCreatephotosInput | string[]
    qrCodeUrl: string
    isVerified?: boolean
    recyclingHistory?: RecyclingHistoryCreateNestedOneWithoutQrCodeInput
  }

  export type QRCodeUncheckedCreateWithoutConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wasteType: $Enums.WasteType
    quantity: number
    unit: string
    description?: string | null
    photos?: QRCodeCreatephotosInput | string[]
    qrCodeUrl: string
    isVerified?: boolean
    recyclingHistory?: RecyclingHistoryUncheckedCreateNestedOneWithoutQrCodeInput
  }

  export type QRCodeCreateOrConnectWithoutConsumerInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutConsumerInput, QRCodeUncheckedCreateWithoutConsumerInput>
  }

  export type QRCodeCreateManyConsumerInputEnvelope = {
    data: QRCodeCreateManyConsumerInput | QRCodeCreateManyConsumerInput[]
    skipDuplicates?: boolean
  }

  export type RecyclingHistoryCreateWithoutConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
    qrCode: QRCodeCreateNestedOneWithoutRecyclingHistoryInput
    business: BusinessCreateNestedOneWithoutVerifiedQrCodesInput
    recyclingCenter: RecyclingCenterCreateNestedOneWithoutRecyclingHistoryInput
  }

  export type RecyclingHistoryUncheckedCreateWithoutConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
    businessId: string
    recyclingCenterId: string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
  }

  export type RecyclingHistoryCreateOrConnectWithoutConsumerInput = {
    where: RecyclingHistoryWhereUniqueInput
    create: XOR<RecyclingHistoryCreateWithoutConsumerInput, RecyclingHistoryUncheckedCreateWithoutConsumerInput>
  }

  export type RecyclingHistoryCreateManyConsumerInputEnvelope = {
    data: RecyclingHistoryCreateManyConsumerInput | RecyclingHistoryCreateManyConsumerInput[]
    skipDuplicates?: boolean
  }

  export type RewardRedemptionCreateWithoutConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pointsSpent: number
    status: string
    redeemedAt?: Date | string | null
    reward: RewardCreateNestedOneWithoutRedemptionsInput
  }

  export type RewardRedemptionUncheckedCreateWithoutConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rewardId: string
    pointsSpent: number
    status: string
    redeemedAt?: Date | string | null
  }

  export type RewardRedemptionCreateOrConnectWithoutConsumerInput = {
    where: RewardRedemptionWhereUniqueInput
    create: XOR<RewardRedemptionCreateWithoutConsumerInput, RewardRedemptionUncheckedCreateWithoutConsumerInput>
  }

  export type RewardRedemptionCreateManyConsumerInputEnvelope = {
    data: RewardRedemptionCreateManyConsumerInput | RewardRedemptionCreateManyConsumerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConsumerInput = {
    update: XOR<UserUpdateWithoutConsumerInput, UserUncheckedUpdateWithoutConsumerInput>
    create: XOR<UserCreateWithoutConsumerInput, UserUncheckedCreateWithoutConsumerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsumerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsumerInput, UserUncheckedUpdateWithoutConsumerInput>
  }

  export type UserUpdateWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    verified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    verified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QRCodeUpsertWithWhereUniqueWithoutConsumerInput = {
    where: QRCodeWhereUniqueInput
    update: XOR<QRCodeUpdateWithoutConsumerInput, QRCodeUncheckedUpdateWithoutConsumerInput>
    create: XOR<QRCodeCreateWithoutConsumerInput, QRCodeUncheckedCreateWithoutConsumerInput>
  }

  export type QRCodeUpdateWithWhereUniqueWithoutConsumerInput = {
    where: QRCodeWhereUniqueInput
    data: XOR<QRCodeUpdateWithoutConsumerInput, QRCodeUncheckedUpdateWithoutConsumerInput>
  }

  export type QRCodeUpdateManyWithWhereWithoutConsumerInput = {
    where: QRCodeScalarWhereInput
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyWithoutConsumerInput>
  }

  export type QRCodeScalarWhereInput = {
    AND?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
    OR?: QRCodeScalarWhereInput[]
    NOT?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
    id?: StringFilter<"QRCode"> | string
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    consumerId?: StringFilter<"QRCode"> | string
    wasteType?: EnumWasteTypeFilter<"QRCode"> | $Enums.WasteType
    quantity?: FloatFilter<"QRCode"> | number
    unit?: StringFilter<"QRCode"> | string
    description?: StringNullableFilter<"QRCode"> | string | null
    photos?: StringNullableListFilter<"QRCode">
    qrCodeUrl?: StringFilter<"QRCode"> | string
    isVerified?: BoolFilter<"QRCode"> | boolean
  }

  export type RecyclingHistoryUpsertWithWhereUniqueWithoutConsumerInput = {
    where: RecyclingHistoryWhereUniqueInput
    update: XOR<RecyclingHistoryUpdateWithoutConsumerInput, RecyclingHistoryUncheckedUpdateWithoutConsumerInput>
    create: XOR<RecyclingHistoryCreateWithoutConsumerInput, RecyclingHistoryUncheckedCreateWithoutConsumerInput>
  }

  export type RecyclingHistoryUpdateWithWhereUniqueWithoutConsumerInput = {
    where: RecyclingHistoryWhereUniqueInput
    data: XOR<RecyclingHistoryUpdateWithoutConsumerInput, RecyclingHistoryUncheckedUpdateWithoutConsumerInput>
  }

  export type RecyclingHistoryUpdateManyWithWhereWithoutConsumerInput = {
    where: RecyclingHistoryScalarWhereInput
    data: XOR<RecyclingHistoryUpdateManyMutationInput, RecyclingHistoryUncheckedUpdateManyWithoutConsumerInput>
  }

  export type RecyclingHistoryScalarWhereInput = {
    AND?: RecyclingHistoryScalarWhereInput | RecyclingHistoryScalarWhereInput[]
    OR?: RecyclingHistoryScalarWhereInput[]
    NOT?: RecyclingHistoryScalarWhereInput | RecyclingHistoryScalarWhereInput[]
    id?: StringFilter<"RecyclingHistory"> | string
    createdAt?: DateTimeFilter<"RecyclingHistory"> | Date | string
    updatedAt?: DateTimeFilter<"RecyclingHistory"> | Date | string
    qrCodeId?: StringFilter<"RecyclingHistory"> | string
    consumerId?: StringFilter<"RecyclingHistory"> | string
    businessId?: StringFilter<"RecyclingHistory"> | string
    recyclingCenterId?: StringFilter<"RecyclingHistory"> | string
    pointsEarned?: IntFilter<"RecyclingHistory"> | number
    verifiedAt?: DateTimeFilter<"RecyclingHistory"> | Date | string
    notes?: StringNullableFilter<"RecyclingHistory"> | string | null
    staffName?: StringNullableFilter<"RecyclingHistory"> | string | null
    photo?: StringNullableFilter<"RecyclingHistory"> | string | null
  }

  export type RewardRedemptionUpsertWithWhereUniqueWithoutConsumerInput = {
    where: RewardRedemptionWhereUniqueInput
    update: XOR<RewardRedemptionUpdateWithoutConsumerInput, RewardRedemptionUncheckedUpdateWithoutConsumerInput>
    create: XOR<RewardRedemptionCreateWithoutConsumerInput, RewardRedemptionUncheckedCreateWithoutConsumerInput>
  }

  export type RewardRedemptionUpdateWithWhereUniqueWithoutConsumerInput = {
    where: RewardRedemptionWhereUniqueInput
    data: XOR<RewardRedemptionUpdateWithoutConsumerInput, RewardRedemptionUncheckedUpdateWithoutConsumerInput>
  }

  export type RewardRedemptionUpdateManyWithWhereWithoutConsumerInput = {
    where: RewardRedemptionScalarWhereInput
    data: XOR<RewardRedemptionUpdateManyMutationInput, RewardRedemptionUncheckedUpdateManyWithoutConsumerInput>
  }

  export type RewardRedemptionScalarWhereInput = {
    AND?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
    OR?: RewardRedemptionScalarWhereInput[]
    NOT?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
    id?: StringFilter<"RewardRedemption"> | string
    createdAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    updatedAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    consumerId?: StringFilter<"RewardRedemption"> | string
    rewardId?: StringFilter<"RewardRedemption"> | string
    pointsSpent?: IntFilter<"RewardRedemption"> | number
    status?: StringFilter<"RewardRedemption"> | string
    redeemedAt?: DateTimeNullableFilter<"RewardRedemption"> | Date | string | null
  }

  export type UserCreateWithoutBusinessInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name: string
    phone?: string | null
    avatar?: string | null
    userType: $Enums.UserType
    verified?: boolean
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    consumer?: ConsumerCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBusinessInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    name: string
    phone?: string | null
    avatar?: string | null
    userType: $Enums.UserType
    verified?: boolean
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    consumer?: ConsumerUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBusinessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
  }

  export type RecyclingCenterCreateWithoutBusinessInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: string | null
    email?: string | null
    website?: string | null
    image?: string | null
    description?: string | null
    acceptedWasteTypes?: RecyclingCenterCreateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    recyclingHistory?: RecyclingHistoryCreateNestedManyWithoutRecyclingCenterInput
  }

  export type RecyclingCenterUncheckedCreateWithoutBusinessInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: string | null
    email?: string | null
    website?: string | null
    image?: string | null
    description?: string | null
    acceptedWasteTypes?: RecyclingCenterCreateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    recyclingHistory?: RecyclingHistoryUncheckedCreateNestedManyWithoutRecyclingCenterInput
  }

  export type RecyclingCenterCreateOrConnectWithoutBusinessInput = {
    where: RecyclingCenterWhereUniqueInput
    create: XOR<RecyclingCenterCreateWithoutBusinessInput, RecyclingCenterUncheckedCreateWithoutBusinessInput>
  }

  export type RecyclingCenterCreateManyBusinessInputEnvelope = {
    data: RecyclingCenterCreateManyBusinessInput | RecyclingCenterCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type RecyclingHistoryCreateWithoutBusinessInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
    qrCode: QRCodeCreateNestedOneWithoutRecyclingHistoryInput
    consumer: ConsumerCreateNestedOneWithoutRecyclingHistoryInput
    recyclingCenter: RecyclingCenterCreateNestedOneWithoutRecyclingHistoryInput
  }

  export type RecyclingHistoryUncheckedCreateWithoutBusinessInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
    consumerId: string
    recyclingCenterId: string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
  }

  export type RecyclingHistoryCreateOrConnectWithoutBusinessInput = {
    where: RecyclingHistoryWhereUniqueInput
    create: XOR<RecyclingHistoryCreateWithoutBusinessInput, RecyclingHistoryUncheckedCreateWithoutBusinessInput>
  }

  export type RecyclingHistoryCreateManyBusinessInputEnvelope = {
    data: RecyclingHistoryCreateManyBusinessInput | RecyclingHistoryCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBusinessInput = {
    update: XOR<UserUpdateWithoutBusinessInput, UserUncheckedUpdateWithoutBusinessInput>
    create: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusinessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusinessInput, UserUncheckedUpdateWithoutBusinessInput>
  }

  export type UserUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    verified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumer?: ConsumerUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    verified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumer?: ConsumerUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecyclingCenterUpsertWithWhereUniqueWithoutBusinessInput = {
    where: RecyclingCenterWhereUniqueInput
    update: XOR<RecyclingCenterUpdateWithoutBusinessInput, RecyclingCenterUncheckedUpdateWithoutBusinessInput>
    create: XOR<RecyclingCenterCreateWithoutBusinessInput, RecyclingCenterUncheckedCreateWithoutBusinessInput>
  }

  export type RecyclingCenterUpdateWithWhereUniqueWithoutBusinessInput = {
    where: RecyclingCenterWhereUniqueInput
    data: XOR<RecyclingCenterUpdateWithoutBusinessInput, RecyclingCenterUncheckedUpdateWithoutBusinessInput>
  }

  export type RecyclingCenterUpdateManyWithWhereWithoutBusinessInput = {
    where: RecyclingCenterScalarWhereInput
    data: XOR<RecyclingCenterUpdateManyMutationInput, RecyclingCenterUncheckedUpdateManyWithoutBusinessInput>
  }

  export type RecyclingCenterScalarWhereInput = {
    AND?: RecyclingCenterScalarWhereInput | RecyclingCenterScalarWhereInput[]
    OR?: RecyclingCenterScalarWhereInput[]
    NOT?: RecyclingCenterScalarWhereInput | RecyclingCenterScalarWhereInput[]
    id?: StringFilter<"RecyclingCenter"> | string
    createdAt?: DateTimeFilter<"RecyclingCenter"> | Date | string
    updatedAt?: DateTimeFilter<"RecyclingCenter"> | Date | string
    businessId?: StringFilter<"RecyclingCenter"> | string
    name?: StringFilter<"RecyclingCenter"> | string
    address?: StringFilter<"RecyclingCenter"> | string
    latitude?: FloatNullableFilter<"RecyclingCenter"> | number | null
    longitude?: FloatNullableFilter<"RecyclingCenter"> | number | null
    operatingHours?: JsonNullableFilter<"RecyclingCenter">
    phone?: StringNullableFilter<"RecyclingCenter"> | string | null
    email?: StringNullableFilter<"RecyclingCenter"> | string | null
    website?: StringNullableFilter<"RecyclingCenter"> | string | null
    image?: StringNullableFilter<"RecyclingCenter"> | string | null
    description?: StringNullableFilter<"RecyclingCenter"> | string | null
    acceptedWasteTypes?: EnumWasteTypeNullableListFilter<"RecyclingCenter">
    pointsPerWasteType?: JsonNullableFilter<"RecyclingCenter">
    isActive?: BoolFilter<"RecyclingCenter"> | boolean
  }

  export type RecyclingHistoryUpsertWithWhereUniqueWithoutBusinessInput = {
    where: RecyclingHistoryWhereUniqueInput
    update: XOR<RecyclingHistoryUpdateWithoutBusinessInput, RecyclingHistoryUncheckedUpdateWithoutBusinessInput>
    create: XOR<RecyclingHistoryCreateWithoutBusinessInput, RecyclingHistoryUncheckedCreateWithoutBusinessInput>
  }

  export type RecyclingHistoryUpdateWithWhereUniqueWithoutBusinessInput = {
    where: RecyclingHistoryWhereUniqueInput
    data: XOR<RecyclingHistoryUpdateWithoutBusinessInput, RecyclingHistoryUncheckedUpdateWithoutBusinessInput>
  }

  export type RecyclingHistoryUpdateManyWithWhereWithoutBusinessInput = {
    where: RecyclingHistoryScalarWhereInput
    data: XOR<RecyclingHistoryUpdateManyMutationInput, RecyclingHistoryUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessCreateWithoutRecyclingCentersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    businessAddress: string
    businessType: string
    description?: string | null
    logo?: string | null
    coverImage?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.BusinessStatus
    verificationDocument?: string | null
    points?: number
    user: UserCreateNestedOneWithoutBusinessInput
    verifiedQrCodes?: RecyclingHistoryCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutRecyclingCentersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    businessName: string
    businessAddress: string
    businessType: string
    description?: string | null
    logo?: string | null
    coverImage?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.BusinessStatus
    verificationDocument?: string | null
    points?: number
    verifiedQrCodes?: RecyclingHistoryUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutRecyclingCentersInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutRecyclingCentersInput, BusinessUncheckedCreateWithoutRecyclingCentersInput>
  }

  export type RecyclingHistoryCreateWithoutRecyclingCenterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
    qrCode: QRCodeCreateNestedOneWithoutRecyclingHistoryInput
    consumer: ConsumerCreateNestedOneWithoutRecyclingHistoryInput
    business: BusinessCreateNestedOneWithoutVerifiedQrCodesInput
  }

  export type RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
    consumerId: string
    businessId: string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
  }

  export type RecyclingHistoryCreateOrConnectWithoutRecyclingCenterInput = {
    where: RecyclingHistoryWhereUniqueInput
    create: XOR<RecyclingHistoryCreateWithoutRecyclingCenterInput, RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput>
  }

  export type RecyclingHistoryCreateManyRecyclingCenterInputEnvelope = {
    data: RecyclingHistoryCreateManyRecyclingCenterInput | RecyclingHistoryCreateManyRecyclingCenterInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutRecyclingCentersInput = {
    update: XOR<BusinessUpdateWithoutRecyclingCentersInput, BusinessUncheckedUpdateWithoutRecyclingCentersInput>
    create: XOR<BusinessCreateWithoutRecyclingCentersInput, BusinessUncheckedCreateWithoutRecyclingCentersInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutRecyclingCentersInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutRecyclingCentersInput, BusinessUncheckedUpdateWithoutRecyclingCentersInput>
  }

  export type BusinessUpdateWithoutRecyclingCentersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumBusinessStatusFieldUpdateOperationsInput | $Enums.BusinessStatus
    verificationDocument?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBusinessNestedInput
    verifiedQrCodes?: RecyclingHistoryUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutRecyclingCentersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumBusinessStatusFieldUpdateOperationsInput | $Enums.BusinessStatus
    verificationDocument?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    verifiedQrCodes?: RecyclingHistoryUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type RecyclingHistoryUpsertWithWhereUniqueWithoutRecyclingCenterInput = {
    where: RecyclingHistoryWhereUniqueInput
    update: XOR<RecyclingHistoryUpdateWithoutRecyclingCenterInput, RecyclingHistoryUncheckedUpdateWithoutRecyclingCenterInput>
    create: XOR<RecyclingHistoryCreateWithoutRecyclingCenterInput, RecyclingHistoryUncheckedCreateWithoutRecyclingCenterInput>
  }

  export type RecyclingHistoryUpdateWithWhereUniqueWithoutRecyclingCenterInput = {
    where: RecyclingHistoryWhereUniqueInput
    data: XOR<RecyclingHistoryUpdateWithoutRecyclingCenterInput, RecyclingHistoryUncheckedUpdateWithoutRecyclingCenterInput>
  }

  export type RecyclingHistoryUpdateManyWithWhereWithoutRecyclingCenterInput = {
    where: RecyclingHistoryScalarWhereInput
    data: XOR<RecyclingHistoryUpdateManyMutationInput, RecyclingHistoryUncheckedUpdateManyWithoutRecyclingCenterInput>
  }

  export type ConsumerCreateWithoutQrCodesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
    user: UserCreateNestedOneWithoutConsumerInput
    recyclingHistory?: RecyclingHistoryCreateNestedManyWithoutConsumerInput
    rewards?: RewardRedemptionCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerUncheckedCreateWithoutQrCodesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
    recyclingHistory?: RecyclingHistoryUncheckedCreateNestedManyWithoutConsumerInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerCreateOrConnectWithoutQrCodesInput = {
    where: ConsumerWhereUniqueInput
    create: XOR<ConsumerCreateWithoutQrCodesInput, ConsumerUncheckedCreateWithoutQrCodesInput>
  }

  export type RecyclingHistoryCreateWithoutQrCodeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
    consumer: ConsumerCreateNestedOneWithoutRecyclingHistoryInput
    business: BusinessCreateNestedOneWithoutVerifiedQrCodesInput
    recyclingCenter: RecyclingCenterCreateNestedOneWithoutRecyclingHistoryInput
  }

  export type RecyclingHistoryUncheckedCreateWithoutQrCodeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    consumerId: string
    businessId: string
    recyclingCenterId: string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
  }

  export type RecyclingHistoryCreateOrConnectWithoutQrCodeInput = {
    where: RecyclingHistoryWhereUniqueInput
    create: XOR<RecyclingHistoryCreateWithoutQrCodeInput, RecyclingHistoryUncheckedCreateWithoutQrCodeInput>
  }

  export type ConsumerUpsertWithoutQrCodesInput = {
    update: XOR<ConsumerUpdateWithoutQrCodesInput, ConsumerUncheckedUpdateWithoutQrCodesInput>
    create: XOR<ConsumerCreateWithoutQrCodesInput, ConsumerUncheckedCreateWithoutQrCodesInput>
    where?: ConsumerWhereInput
  }

  export type ConsumerUpdateToOneWithWhereWithoutQrCodesInput = {
    where?: ConsumerWhereInput
    data: XOR<ConsumerUpdateWithoutQrCodesInput, ConsumerUncheckedUpdateWithoutQrCodesInput>
  }

  export type ConsumerUpdateWithoutQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutConsumerNestedInput
    recyclingHistory?: RecyclingHistoryUpdateManyWithoutConsumerNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutConsumerNestedInput
  }

  export type ConsumerUncheckedUpdateWithoutQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
    recyclingHistory?: RecyclingHistoryUncheckedUpdateManyWithoutConsumerNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutConsumerNestedInput
  }

  export type RecyclingHistoryUpsertWithoutQrCodeInput = {
    update: XOR<RecyclingHistoryUpdateWithoutQrCodeInput, RecyclingHistoryUncheckedUpdateWithoutQrCodeInput>
    create: XOR<RecyclingHistoryCreateWithoutQrCodeInput, RecyclingHistoryUncheckedCreateWithoutQrCodeInput>
    where?: RecyclingHistoryWhereInput
  }

  export type RecyclingHistoryUpdateToOneWithWhereWithoutQrCodeInput = {
    where?: RecyclingHistoryWhereInput
    data: XOR<RecyclingHistoryUpdateWithoutQrCodeInput, RecyclingHistoryUncheckedUpdateWithoutQrCodeInput>
  }

  export type RecyclingHistoryUpdateWithoutQrCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    consumer?: ConsumerUpdateOneRequiredWithoutRecyclingHistoryNestedInput
    business?: BusinessUpdateOneRequiredWithoutVerifiedQrCodesNestedInput
    recyclingCenter?: RecyclingCenterUpdateOneRequiredWithoutRecyclingHistoryNestedInput
  }

  export type RecyclingHistoryUncheckedUpdateWithoutQrCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumerId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    recyclingCenterId?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRCodeCreateWithoutRecyclingHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wasteType: $Enums.WasteType
    quantity: number
    unit: string
    description?: string | null
    photos?: QRCodeCreatephotosInput | string[]
    qrCodeUrl: string
    isVerified?: boolean
    consumer: ConsumerCreateNestedOneWithoutQrCodesInput
  }

  export type QRCodeUncheckedCreateWithoutRecyclingHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    consumerId: string
    wasteType: $Enums.WasteType
    quantity: number
    unit: string
    description?: string | null
    photos?: QRCodeCreatephotosInput | string[]
    qrCodeUrl: string
    isVerified?: boolean
  }

  export type QRCodeCreateOrConnectWithoutRecyclingHistoryInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutRecyclingHistoryInput, QRCodeUncheckedCreateWithoutRecyclingHistoryInput>
  }

  export type ConsumerCreateWithoutRecyclingHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
    user: UserCreateNestedOneWithoutConsumerInput
    qrCodes?: QRCodeCreateNestedManyWithoutConsumerInput
    rewards?: RewardRedemptionCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerUncheckedCreateWithoutRecyclingHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutConsumerInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerCreateOrConnectWithoutRecyclingHistoryInput = {
    where: ConsumerWhereUniqueInput
    create: XOR<ConsumerCreateWithoutRecyclingHistoryInput, ConsumerUncheckedCreateWithoutRecyclingHistoryInput>
  }

  export type BusinessCreateWithoutVerifiedQrCodesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    businessAddress: string
    businessType: string
    description?: string | null
    logo?: string | null
    coverImage?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.BusinessStatus
    verificationDocument?: string | null
    points?: number
    user: UserCreateNestedOneWithoutBusinessInput
    recyclingCenters?: RecyclingCenterCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutVerifiedQrCodesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    businessName: string
    businessAddress: string
    businessType: string
    description?: string | null
    logo?: string | null
    coverImage?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.BusinessStatus
    verificationDocument?: string | null
    points?: number
    recyclingCenters?: RecyclingCenterUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutVerifiedQrCodesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutVerifiedQrCodesInput, BusinessUncheckedCreateWithoutVerifiedQrCodesInput>
  }

  export type RecyclingCenterCreateWithoutRecyclingHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: string | null
    email?: string | null
    website?: string | null
    image?: string | null
    description?: string | null
    acceptedWasteTypes?: RecyclingCenterCreateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    business: BusinessCreateNestedOneWithoutRecyclingCentersInput
  }

  export type RecyclingCenterUncheckedCreateWithoutRecyclingHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessId: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: string | null
    email?: string | null
    website?: string | null
    image?: string | null
    description?: string | null
    acceptedWasteTypes?: RecyclingCenterCreateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
  }

  export type RecyclingCenterCreateOrConnectWithoutRecyclingHistoryInput = {
    where: RecyclingCenterWhereUniqueInput
    create: XOR<RecyclingCenterCreateWithoutRecyclingHistoryInput, RecyclingCenterUncheckedCreateWithoutRecyclingHistoryInput>
  }

  export type QRCodeUpsertWithoutRecyclingHistoryInput = {
    update: XOR<QRCodeUpdateWithoutRecyclingHistoryInput, QRCodeUncheckedUpdateWithoutRecyclingHistoryInput>
    create: XOR<QRCodeCreateWithoutRecyclingHistoryInput, QRCodeUncheckedCreateWithoutRecyclingHistoryInput>
    where?: QRCodeWhereInput
  }

  export type QRCodeUpdateToOneWithWhereWithoutRecyclingHistoryInput = {
    where?: QRCodeWhereInput
    data: XOR<QRCodeUpdateWithoutRecyclingHistoryInput, QRCodeUncheckedUpdateWithoutRecyclingHistoryInput>
  }

  export type QRCodeUpdateWithoutRecyclingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wasteType?: EnumWasteTypeFieldUpdateOperationsInput | $Enums.WasteType
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: QRCodeUpdatephotosInput | string[]
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    consumer?: ConsumerUpdateOneRequiredWithoutQrCodesNestedInput
  }

  export type QRCodeUncheckedUpdateWithoutRecyclingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumerId?: StringFieldUpdateOperationsInput | string
    wasteType?: EnumWasteTypeFieldUpdateOperationsInput | $Enums.WasteType
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: QRCodeUpdatephotosInput | string[]
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConsumerUpsertWithoutRecyclingHistoryInput = {
    update: XOR<ConsumerUpdateWithoutRecyclingHistoryInput, ConsumerUncheckedUpdateWithoutRecyclingHistoryInput>
    create: XOR<ConsumerCreateWithoutRecyclingHistoryInput, ConsumerUncheckedCreateWithoutRecyclingHistoryInput>
    where?: ConsumerWhereInput
  }

  export type ConsumerUpdateToOneWithWhereWithoutRecyclingHistoryInput = {
    where?: ConsumerWhereInput
    data: XOR<ConsumerUpdateWithoutRecyclingHistoryInput, ConsumerUncheckedUpdateWithoutRecyclingHistoryInput>
  }

  export type ConsumerUpdateWithoutRecyclingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutConsumerNestedInput
    qrCodes?: QRCodeUpdateManyWithoutConsumerNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutConsumerNestedInput
  }

  export type ConsumerUncheckedUpdateWithoutRecyclingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
    qrCodes?: QRCodeUncheckedUpdateManyWithoutConsumerNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutConsumerNestedInput
  }

  export type BusinessUpsertWithoutVerifiedQrCodesInput = {
    update: XOR<BusinessUpdateWithoutVerifiedQrCodesInput, BusinessUncheckedUpdateWithoutVerifiedQrCodesInput>
    create: XOR<BusinessCreateWithoutVerifiedQrCodesInput, BusinessUncheckedCreateWithoutVerifiedQrCodesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutVerifiedQrCodesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutVerifiedQrCodesInput, BusinessUncheckedUpdateWithoutVerifiedQrCodesInput>
  }

  export type BusinessUpdateWithoutVerifiedQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumBusinessStatusFieldUpdateOperationsInput | $Enums.BusinessStatus
    verificationDocument?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBusinessNestedInput
    recyclingCenters?: RecyclingCenterUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutVerifiedQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumBusinessStatusFieldUpdateOperationsInput | $Enums.BusinessStatus
    verificationDocument?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    recyclingCenters?: RecyclingCenterUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type RecyclingCenterUpsertWithoutRecyclingHistoryInput = {
    update: XOR<RecyclingCenterUpdateWithoutRecyclingHistoryInput, RecyclingCenterUncheckedUpdateWithoutRecyclingHistoryInput>
    create: XOR<RecyclingCenterCreateWithoutRecyclingHistoryInput, RecyclingCenterUncheckedCreateWithoutRecyclingHistoryInput>
    where?: RecyclingCenterWhereInput
  }

  export type RecyclingCenterUpdateToOneWithWhereWithoutRecyclingHistoryInput = {
    where?: RecyclingCenterWhereInput
    data: XOR<RecyclingCenterUpdateWithoutRecyclingHistoryInput, RecyclingCenterUncheckedUpdateWithoutRecyclingHistoryInput>
  }

  export type RecyclingCenterUpdateWithoutRecyclingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedWasteTypes?: RecyclingCenterUpdateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    business?: BusinessUpdateOneRequiredWithoutRecyclingCentersNestedInput
  }

  export type RecyclingCenterUncheckedUpdateWithoutRecyclingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedWasteTypes?: RecyclingCenterUpdateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RewardRedemptionCreateWithoutRewardInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pointsSpent: number
    status: string
    redeemedAt?: Date | string | null
    consumer: ConsumerCreateNestedOneWithoutRewardsInput
  }

  export type RewardRedemptionUncheckedCreateWithoutRewardInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    consumerId: string
    pointsSpent: number
    status: string
    redeemedAt?: Date | string | null
  }

  export type RewardRedemptionCreateOrConnectWithoutRewardInput = {
    where: RewardRedemptionWhereUniqueInput
    create: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput>
  }

  export type RewardRedemptionCreateManyRewardInputEnvelope = {
    data: RewardRedemptionCreateManyRewardInput | RewardRedemptionCreateManyRewardInput[]
    skipDuplicates?: boolean
  }

  export type RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput = {
    where: RewardRedemptionWhereUniqueInput
    update: XOR<RewardRedemptionUpdateWithoutRewardInput, RewardRedemptionUncheckedUpdateWithoutRewardInput>
    create: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput>
  }

  export type RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput = {
    where: RewardRedemptionWhereUniqueInput
    data: XOR<RewardRedemptionUpdateWithoutRewardInput, RewardRedemptionUncheckedUpdateWithoutRewardInput>
  }

  export type RewardRedemptionUpdateManyWithWhereWithoutRewardInput = {
    where: RewardRedemptionScalarWhereInput
    data: XOR<RewardRedemptionUpdateManyMutationInput, RewardRedemptionUncheckedUpdateManyWithoutRewardInput>
  }

  export type ConsumerCreateWithoutRewardsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
    user: UserCreateNestedOneWithoutConsumerInput
    qrCodes?: QRCodeCreateNestedManyWithoutConsumerInput
    recyclingHistory?: RecyclingHistoryCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerUncheckedCreateWithoutRewardsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    location?: string | null
    points?: number
    receiveUpdates?: boolean
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutConsumerInput
    recyclingHistory?: RecyclingHistoryUncheckedCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerCreateOrConnectWithoutRewardsInput = {
    where: ConsumerWhereUniqueInput
    create: XOR<ConsumerCreateWithoutRewardsInput, ConsumerUncheckedCreateWithoutRewardsInput>
  }

  export type RewardCreateWithoutRedemptionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    pointsCost: number
    image?: string | null
    isActive?: boolean
    quantity?: number | null
  }

  export type RewardUncheckedCreateWithoutRedemptionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    pointsCost: number
    image?: string | null
    isActive?: boolean
    quantity?: number | null
  }

  export type RewardCreateOrConnectWithoutRedemptionsInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutRedemptionsInput, RewardUncheckedCreateWithoutRedemptionsInput>
  }

  export type ConsumerUpsertWithoutRewardsInput = {
    update: XOR<ConsumerUpdateWithoutRewardsInput, ConsumerUncheckedUpdateWithoutRewardsInput>
    create: XOR<ConsumerCreateWithoutRewardsInput, ConsumerUncheckedCreateWithoutRewardsInput>
    where?: ConsumerWhereInput
  }

  export type ConsumerUpdateToOneWithWhereWithoutRewardsInput = {
    where?: ConsumerWhereInput
    data: XOR<ConsumerUpdateWithoutRewardsInput, ConsumerUncheckedUpdateWithoutRewardsInput>
  }

  export type ConsumerUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutConsumerNestedInput
    qrCodes?: QRCodeUpdateManyWithoutConsumerNestedInput
    recyclingHistory?: RecyclingHistoryUpdateManyWithoutConsumerNestedInput
  }

  export type ConsumerUncheckedUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    receiveUpdates?: BoolFieldUpdateOperationsInput | boolean
    qrCodes?: QRCodeUncheckedUpdateManyWithoutConsumerNestedInput
    recyclingHistory?: RecyclingHistoryUncheckedUpdateManyWithoutConsumerNestedInput
  }

  export type RewardUpsertWithoutRedemptionsInput = {
    update: XOR<RewardUpdateWithoutRedemptionsInput, RewardUncheckedUpdateWithoutRedemptionsInput>
    create: XOR<RewardCreateWithoutRedemptionsInput, RewardUncheckedCreateWithoutRedemptionsInput>
    where?: RewardWhereInput
  }

  export type RewardUpdateToOneWithWhereWithoutRedemptionsInput = {
    where?: RewardWhereInput
    data: XOR<RewardUpdateWithoutRedemptionsInput, RewardUncheckedUpdateWithoutRedemptionsInput>
  }

  export type RewardUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RewardUncheckedUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
    expiresAt: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeCreateManyConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wasteType: $Enums.WasteType
    quantity: number
    unit: string
    description?: string | null
    photos?: QRCodeCreatephotosInput | string[]
    qrCodeUrl: string
    isVerified?: boolean
  }

  export type RecyclingHistoryCreateManyConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
    businessId: string
    recyclingCenterId: string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
  }

  export type RewardRedemptionCreateManyConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rewardId: string
    pointsSpent: number
    status: string
    redeemedAt?: Date | string | null
  }

  export type QRCodeUpdateWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wasteType?: EnumWasteTypeFieldUpdateOperationsInput | $Enums.WasteType
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: QRCodeUpdatephotosInput | string[]
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    recyclingHistory?: RecyclingHistoryUpdateOneWithoutQrCodeNestedInput
  }

  export type QRCodeUncheckedUpdateWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wasteType?: EnumWasteTypeFieldUpdateOperationsInput | $Enums.WasteType
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: QRCodeUpdatephotosInput | string[]
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    recyclingHistory?: RecyclingHistoryUncheckedUpdateOneWithoutQrCodeNestedInput
  }

  export type QRCodeUncheckedUpdateManyWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wasteType?: EnumWasteTypeFieldUpdateOperationsInput | $Enums.WasteType
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: QRCodeUpdatephotosInput | string[]
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecyclingHistoryUpdateWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: QRCodeUpdateOneRequiredWithoutRecyclingHistoryNestedInput
    business?: BusinessUpdateOneRequiredWithoutVerifiedQrCodesNestedInput
    recyclingCenter?: RecyclingCenterUpdateOneRequiredWithoutRecyclingHistoryNestedInput
  }

  export type RecyclingHistoryUncheckedUpdateWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    recyclingCenterId?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecyclingHistoryUncheckedUpdateManyWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    recyclingCenterId?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RewardRedemptionUpdateWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reward?: RewardUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type RewardRedemptionUncheckedUpdateWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RewardRedemptionUncheckedUpdateManyWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecyclingCenterCreateManyBusinessInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: string | null
    email?: string | null
    website?: string | null
    image?: string | null
    description?: string | null
    acceptedWasteTypes?: RecyclingCenterCreateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
  }

  export type RecyclingHistoryCreateManyBusinessInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
    consumerId: string
    recyclingCenterId: string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
  }

  export type RecyclingCenterUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedWasteTypes?: RecyclingCenterUpdateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    recyclingHistory?: RecyclingHistoryUpdateManyWithoutRecyclingCenterNestedInput
  }

  export type RecyclingCenterUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedWasteTypes?: RecyclingCenterUpdateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    recyclingHistory?: RecyclingHistoryUncheckedUpdateManyWithoutRecyclingCenterNestedInput
  }

  export type RecyclingCenterUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingHours?: NullableJsonNullValueInput | InputJsonValue
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedWasteTypes?: RecyclingCenterUpdateacceptedWasteTypesInput | $Enums.WasteType[]
    pointsPerWasteType?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecyclingHistoryUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: QRCodeUpdateOneRequiredWithoutRecyclingHistoryNestedInput
    consumer?: ConsumerUpdateOneRequiredWithoutRecyclingHistoryNestedInput
    recyclingCenter?: RecyclingCenterUpdateOneRequiredWithoutRecyclingHistoryNestedInput
  }

  export type RecyclingHistoryUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    consumerId?: StringFieldUpdateOperationsInput | string
    recyclingCenterId?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecyclingHistoryUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    consumerId?: StringFieldUpdateOperationsInput | string
    recyclingCenterId?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecyclingHistoryCreateManyRecyclingCenterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
    consumerId: string
    businessId: string
    pointsEarned: number
    verifiedAt?: Date | string
    notes?: string | null
    staffName?: string | null
    photo?: string | null
  }

  export type RecyclingHistoryUpdateWithoutRecyclingCenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: QRCodeUpdateOneRequiredWithoutRecyclingHistoryNestedInput
    consumer?: ConsumerUpdateOneRequiredWithoutRecyclingHistoryNestedInput
    business?: BusinessUpdateOneRequiredWithoutVerifiedQrCodesNestedInput
  }

  export type RecyclingHistoryUncheckedUpdateWithoutRecyclingCenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    consumerId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecyclingHistoryUncheckedUpdateManyWithoutRecyclingCenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    consumerId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    verifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RewardRedemptionCreateManyRewardInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    consumerId: string
    pointsSpent: number
    status: string
    redeemedAt?: Date | string | null
  }

  export type RewardRedemptionUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumer?: ConsumerUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type RewardRedemptionUncheckedUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumerId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RewardRedemptionUncheckedUpdateManyWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumerId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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