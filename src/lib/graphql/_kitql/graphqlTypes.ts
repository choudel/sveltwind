import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

export type Call = Node & {
  __typename?: 'Call';
  callId: Scalars['Int'];
  callPrice?: Maybe<Scalars['Int']>;
  date: Scalars['Date'];
  endHour?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Mentor` that is related to this `Call`. */
  mentor?: Maybe<Mentor>;
  mentorId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  semaine: Scalars['Datetime'];
  startHour?: Maybe<Scalars['Datetime']>;
};

/** A condition to be used against `Call` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CallCondition = {
  /** Checks for equality with the object’s `callId` field. */
  callId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `callPrice` field. */
  callPrice?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `endHour` field. */
  endHour?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `mentorId` field. */
  mentorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `semaine` field. */
  semaine?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `startHour` field. */
  startHour?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `Call` */
export type CallInput = {
  callId?: InputMaybe<Scalars['Int']>;
  callPrice?: InputMaybe<Scalars['Int']>;
  date: Scalars['Date'];
  endHour?: InputMaybe<Scalars['Datetime']>;
  mentorId: Scalars['Int'];
  semaine: Scalars['Datetime'];
  startHour?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `Call`. Fields that are set will be updated. */
export type CallPatch = {
  callId?: InputMaybe<Scalars['Int']>;
  callPrice?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['Date']>;
  endHour?: InputMaybe<Scalars['Datetime']>;
  mentorId?: InputMaybe<Scalars['Int']>;
  semaine?: InputMaybe<Scalars['Datetime']>;
  startHour?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `Call` values. */
export type CallsConnection = {
  __typename?: 'CallsConnection';
  /** A list of edges which contains the `Call` and cursor to aid in pagination. */
  edges: Array<CallsEdge>;
  /** A list of `Call` objects. */
  nodes: Array<Maybe<Call>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Call` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Call` edge in the connection. */
export type CallsEdge = {
  __typename?: 'CallsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Call` at the end of the edge. */
  node?: Maybe<Call>;
};

/** Methods to use when ordering `Call`. */
export enum CallsOrderBy {
  CallIdAsc = 'CALL_ID_ASC',
  CallIdDesc = 'CALL_ID_DESC',
  CallPriceAsc = 'CALL_PRICE_ASC',
  CallPriceDesc = 'CALL_PRICE_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  EndHourAsc = 'END_HOUR_ASC',
  EndHourDesc = 'END_HOUR_DESC',
  MentorIdAsc = 'MENTOR_ID_ASC',
  MentorIdDesc = 'MENTOR_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SemaineAsc = 'SEMAINE_ASC',
  SemaineDesc = 'SEMAINE_DESC',
  StartHourAsc = 'START_HOUR_ASC',
  StartHourDesc = 'START_HOUR_DESC'
}

export type Certificate = Node & {
  __typename?: 'Certificate';
  certificatesId: Scalars['Int'];
  /** Reads a single `Mentee` that is related to this `Certificate`. */
  mentee?: Maybe<Mentee>;
  menteeId: Scalars['Int'];
  /** Reads a single `Mentor` that is related to this `Certificate`. */
  mentor?: Maybe<Mentor>;
  mentorId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `MentoringProg` that is related to this `Certificate`. */
  prog?: Maybe<MentoringProg>;
  progId: Scalars['Int'];
};

/**
 * A condition to be used against `Certificate` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CertificateCondition = {
  /** Checks for equality with the object’s `certificatesId` field. */
  certificatesId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `menteeId` field. */
  menteeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `mentorId` field. */
  mentorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `progId` field. */
  progId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `Certificate` */
export type CertificateInput = {
  certificatesId?: InputMaybe<Scalars['Int']>;
  menteeId: Scalars['Int'];
  mentorId: Scalars['Int'];
  progId: Scalars['Int'];
};

/** Represents an update to a `Certificate`. Fields that are set will be updated. */
export type CertificatePatch = {
  certificatesId?: InputMaybe<Scalars['Int']>;
  menteeId?: InputMaybe<Scalars['Int']>;
  mentorId?: InputMaybe<Scalars['Int']>;
  progId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Certificate` values. */
export type CertificatesConnection = {
  __typename?: 'CertificatesConnection';
  /** A list of edges which contains the `Certificate` and cursor to aid in pagination. */
  edges: Array<CertificatesEdge>;
  /** A list of `Certificate` objects. */
  nodes: Array<Maybe<Certificate>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Certificate` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Certificate` edge in the connection. */
export type CertificatesEdge = {
  __typename?: 'CertificatesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Certificate` at the end of the edge. */
  node?: Maybe<Certificate>;
};

/** Methods to use when ordering `Certificate`. */
export enum CertificatesOrderBy {
  CertificatesIdAsc = 'CERTIFICATES_ID_ASC',
  CertificatesIdDesc = 'CERTIFICATES_ID_DESC',
  MenteeIdAsc = 'MENTEE_ID_ASC',
  MenteeIdDesc = 'MENTEE_ID_DESC',
  MentorIdAsc = 'MENTOR_ID_ASC',
  MentorIdDesc = 'MENTOR_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProgIdAsc = 'PROG_ID_ASC',
  ProgIdDesc = 'PROG_ID_DESC'
}

export type Coordinator = Node & {
  __typename?: 'Coordinator';
  coordinatorId: Scalars['Int'];
  /** Reads and enables pagination through a set of `MentoringProg`. */
  mentoringProgs: MentoringProgsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `User` that is related to this `Coordinator`. */
  user?: Maybe<User>;
  userId: Scalars['UUID'];
};


export type CoordinatorMentoringProgsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MentoringProgCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MentoringProgsOrderBy>>;
};

/**
 * A condition to be used against `Coordinator` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CoordinatorCondition = {
  /** Checks for equality with the object’s `coordinatorId` field. */
  coordinatorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Coordinator` */
export type CoordinatorInput = {
  coordinatorId?: InputMaybe<Scalars['Int']>;
  userId: Scalars['UUID'];
};

/** Represents an update to a `Coordinator`. Fields that are set will be updated. */
export type CoordinatorPatch = {
  coordinatorId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `Coordinator` values. */
export type CoordinatorsConnection = {
  __typename?: 'CoordinatorsConnection';
  /** A list of edges which contains the `Coordinator` and cursor to aid in pagination. */
  edges: Array<CoordinatorsEdge>;
  /** A list of `Coordinator` objects. */
  nodes: Array<Maybe<Coordinator>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Coordinator` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Coordinator` edge in the connection. */
export type CoordinatorsEdge = {
  __typename?: 'CoordinatorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Coordinator` at the end of the edge. */
  node?: Maybe<Coordinator>;
};

/** Methods to use when ordering `Coordinator`. */
export enum CoordinatorsOrderBy {
  CoordinatorIdAsc = 'COORDINATOR_ID_ASC',
  CoordinatorIdDesc = 'COORDINATOR_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** All input for the create `Call` mutation. */
export type CreateCallInput = {
  /** The `Call` to be created by this mutation. */
  call: CallInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Call` mutation. */
export type CreateCallPayload = {
  __typename?: 'CreateCallPayload';
  /** The `Call` that was created by this mutation. */
  call?: Maybe<Call>;
  /** An edge for our `Call`. May be used by Relay 1. */
  callEdge?: Maybe<CallsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentor` that is related to this `Call`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Call` mutation. */
export type CreateCallPayloadCallEdgeArgs = {
  orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

/** All input for the create `Certificate` mutation. */
export type CreateCertificateInput = {
  /** The `Certificate` to be created by this mutation. */
  certificate: CertificateInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Certificate` mutation. */
export type CreateCertificatePayload = {
  __typename?: 'CreateCertificatePayload';
  /** The `Certificate` that was created by this mutation. */
  certificate?: Maybe<Certificate>;
  /** An edge for our `Certificate`. May be used by Relay 1. */
  certificateEdge?: Maybe<CertificatesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `Certificate`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `Certificate`. */
  mentor?: Maybe<Mentor>;
  /** Reads a single `MentoringProg` that is related to this `Certificate`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Certificate` mutation. */
export type CreateCertificatePayloadCertificateEdgeArgs = {
  orderBy?: InputMaybe<Array<CertificatesOrderBy>>;
};

/** All input for the create `Coordinator` mutation. */
export type CreateCoordinatorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Coordinator` to be created by this mutation. */
  coordinator: CoordinatorInput;
};

/** The output of our create `Coordinator` mutation. */
export type CreateCoordinatorPayload = {
  __typename?: 'CreateCoordinatorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Coordinator` that was created by this mutation. */
  coordinator?: Maybe<Coordinator>;
  /** An edge for our `Coordinator`. May be used by Relay 1. */
  coordinatorEdge?: Maybe<CoordinatorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Coordinator`. */
  user?: Maybe<User>;
};


/** The output of our create `Coordinator` mutation. */
export type CreateCoordinatorPayloadCoordinatorEdgeArgs = {
  orderBy?: InputMaybe<Array<CoordinatorsOrderBy>>;
};

/** All input for the create `CurrentJob` mutation. */
export type CreateCurrentJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `CurrentJob` to be created by this mutation. */
  currentJob: CurrentJobInput;
};

/** The output of our create `CurrentJob` mutation. */
export type CreateCurrentJobPayload = {
  __typename?: 'CreateCurrentJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CurrentJob` that was created by this mutation. */
  currentJob?: Maybe<CurrentJob>;
  /** An edge for our `CurrentJob`. May be used by Relay 1. */
  currentJobEdge?: Maybe<CurrentJobsEdge>;
  /** Reads a single `Mentee` that is related to this `CurrentJob`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `CurrentJob`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `CurrentJob` mutation. */
export type CreateCurrentJobPayloadCurrentJobEdgeArgs = {
  orderBy?: InputMaybe<Array<CurrentJobsOrderBy>>;
};

/** All input for the create `Education` mutation. */
export type CreateEducationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Education` to be created by this mutation. */
  education: EducationInput;
};

/** The output of our create `Education` mutation. */
export type CreateEducationPayload = {
  __typename?: 'CreateEducationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Education` that was created by this mutation. */
  education?: Maybe<Education>;
  /** An edge for our `Education`. May be used by Relay 1. */
  educationEdge?: Maybe<EducationsEdge>;
  /** Reads a single `Mentee` that is related to this `Education`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `Education`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Education` mutation. */
export type CreateEducationPayloadEducationEdgeArgs = {
  orderBy?: InputMaybe<Array<EducationsOrderBy>>;
};

/** All input for the create `Language` mutation. */
export type CreateLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Language` to be created by this mutation. */
  language: LanguageInput;
};

/** The output of our create `Language` mutation. */
export type CreateLanguagePayload = {
  __typename?: 'CreateLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Language` that was created by this mutation. */
  language?: Maybe<Language>;
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Language`. */
  user?: Maybe<User>;
};


/** The output of our create `Language` mutation. */
export type CreateLanguagePayloadLanguageEdgeArgs = {
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};

/** All input for the create `Mentee` mutation. */
export type CreateMenteeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Mentee` to be created by this mutation. */
  mentee: MenteeInput;
};

/** The output of our create `Mentee` mutation. */
export type CreateMenteePayload = {
  __typename?: 'CreateMenteePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Mentee` that was created by this mutation. */
  mentee?: Maybe<Mentee>;
  /** An edge for our `Mentee`. May be used by Relay 1. */
  menteeEdge?: Maybe<MenteesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Mentee`. */
  user?: Maybe<User>;
};


/** The output of our create `Mentee` mutation. */
export type CreateMenteePayloadMenteeEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteesOrderBy>>;
};

/** All input for the create `MenteeSubject` mutation. */
export type CreateMenteeSubjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `MenteeSubject` to be created by this mutation. */
  menteeSubject: MenteeSubjectInput;
};

/** The output of our create `MenteeSubject` mutation. */
export type CreateMenteeSubjectPayload = {
  __typename?: 'CreateMenteeSubjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `MenteeSubject`. */
  mentee?: Maybe<Mentee>;
  /** The `MenteeSubject` that was created by this mutation. */
  menteeSubject?: Maybe<MenteeSubject>;
  /** An edge for our `MenteeSubject`. May be used by Relay 1. */
  menteeSubjectEdge?: Maybe<MenteeSubjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `MenteeSubject` mutation. */
export type CreateMenteeSubjectPayloadMenteeSubjectEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteeSubjectsOrderBy>>;
};

/** All input for the create `MenteesInterestedInProg` mutation. */
export type CreateMenteesInterestedInProgInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `MenteesInterestedInProg` to be created by this mutation. */
  menteesInterestedInProg: MenteesInterestedInProgInput;
};

/** The output of our create `MenteesInterestedInProg` mutation. */
export type CreateMenteesInterestedInProgPayload = {
  __typename?: 'CreateMenteesInterestedInProgPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `MenteesInterestedInProg`. */
  mentee?: Maybe<Mentee>;
  /** The `MenteesInterestedInProg` that was created by this mutation. */
  menteesInterestedInProg?: Maybe<MenteesInterestedInProg>;
  /** An edge for our `MenteesInterestedInProg`. May be used by Relay 1. */
  menteesInterestedInProgEdge?: Maybe<MenteesInterestedInProgsEdge>;
  /** Reads a single `MentoringProg` that is related to this `MenteesInterestedInProg`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `MenteesInterestedInProg` mutation. */
export type CreateMenteesInterestedInProgPayloadMenteesInterestedInProgEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteesInterestedInProgsOrderBy>>;
};

/** All input for the create `MenteesInterestedInWebinar` mutation. */
export type CreateMenteesInterestedInWebinarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `MenteesInterestedInWebinar` to be created by this mutation. */
  menteesInterestedInWebinar: MenteesInterestedInWebinarInput;
};

/** The output of our create `MenteesInterestedInWebinar` mutation. */
export type CreateMenteesInterestedInWebinarPayload = {
  __typename?: 'CreateMenteesInterestedInWebinarPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `MenteesInterestedInWebinar`. */
  mentee?: Maybe<Mentee>;
  /** The `MenteesInterestedInWebinar` that was created by this mutation. */
  menteesInterestedInWebinar?: Maybe<MenteesInterestedInWebinar>;
  /** An edge for our `MenteesInterestedInWebinar`. May be used by Relay 1. */
  menteesInterestedInWebinarEdge?: Maybe<MenteesInterestedInWebinarsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Webinar` that is related to this `MenteesInterestedInWebinar`. */
  webinar?: Maybe<Webinar>;
};


/** The output of our create `MenteesInterestedInWebinar` mutation. */
export type CreateMenteesInterestedInWebinarPayloadMenteesInterestedInWebinarEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteesInterestedInWebinarsOrderBy>>;
};

/** All input for the create `Mentor` mutation. */
export type CreateMentorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Mentor` to be created by this mutation. */
  mentor: MentorInput;
};

/** The output of our create `Mentor` mutation. */
export type CreateMentorPayload = {
  __typename?: 'CreateMentorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Mentor` that was created by this mutation. */
  mentor?: Maybe<Mentor>;
  /** An edge for our `Mentor`. May be used by Relay 1. */
  mentorEdge?: Maybe<MentorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Mentor`. */
  user?: Maybe<User>;
};


/** The output of our create `Mentor` mutation. */
export type CreateMentorPayloadMentorEdgeArgs = {
  orderBy?: InputMaybe<Array<MentorsOrderBy>>;
};

/** All input for the create `MentorSubject` mutation. */
export type CreateMentorSubjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `MentorSubject` to be created by this mutation. */
  mentorSubject: MentorSubjectInput;
};

/** The output of our create `MentorSubject` mutation. */
export type CreateMentorSubjectPayload = {
  __typename?: 'CreateMentorSubjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentor` that is related to this `MentorSubject`. */
  mentor?: Maybe<Mentor>;
  /** The `MentorSubject` that was created by this mutation. */
  mentorSubject?: Maybe<MentorSubject>;
  /** An edge for our `MentorSubject`. May be used by Relay 1. */
  mentorSubjectEdge?: Maybe<MentorSubjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `MentorSubject` mutation. */
export type CreateMentorSubjectPayloadMentorSubjectEdgeArgs = {
  orderBy?: InputMaybe<Array<MentorSubjectsOrderBy>>;
};

/** All input for the create `MentoringProg` mutation. */
export type CreateMentoringProgInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `MentoringProg` to be created by this mutation. */
  mentoringProg: MentoringProgInput;
};

/** The output of our create `MentoringProg` mutation. */
export type CreateMentoringProgPayload = {
  __typename?: 'CreateMentoringProgPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Coordinator` that is related to this `MentoringProg`. */
  coordinator?: Maybe<Coordinator>;
  /** Reads a single `Mentor` that is related to this `MentoringProg`. */
  mentor?: Maybe<Mentor>;
  /** Reads a single `MentorSubject` that is related to this `MentoringProg`. */
  mentorSubject?: Maybe<MentorSubject>;
  /** The `MentoringProg` that was created by this mutation. */
  mentoringProg?: Maybe<MentoringProg>;
  /** An edge for our `MentoringProg`. May be used by Relay 1. */
  mentoringProgEdge?: Maybe<MentoringProgsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `MentoringProg` mutation. */
export type CreateMentoringProgPayloadMentoringProgEdgeArgs = {
  orderBy?: InputMaybe<Array<MentoringProgsOrderBy>>;
};

/** All input for the create `PersonalDevelopmentPlan` mutation. */
export type CreatePersonalDevelopmentPlanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `PersonalDevelopmentPlan` to be created by this mutation. */
  personalDevelopmentPlan: PersonalDevelopmentPlanInput;
};

/** The output of our create `PersonalDevelopmentPlan` mutation. */
export type CreatePersonalDevelopmentPlanPayload = {
  __typename?: 'CreatePersonalDevelopmentPlanPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `PersonalDevelopmentPlan`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `PersonalDevelopmentPlan`. */
  mentor?: Maybe<Mentor>;
  /** The `PersonalDevelopmentPlan` that was created by this mutation. */
  personalDevelopmentPlan?: Maybe<PersonalDevelopmentPlan>;
  /** An edge for our `PersonalDevelopmentPlan`. May be used by Relay 1. */
  personalDevelopmentPlanEdge?: Maybe<PersonalDevelopmentPlansEdge>;
  /** Reads a single `MentoringProg` that is related to this `PersonalDevelopmentPlan`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `PersonalDevelopmentPlan` mutation. */
export type CreatePersonalDevelopmentPlanPayloadPersonalDevelopmentPlanEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonalDevelopmentPlansOrderBy>>;
};

/** All input for the create `Reservation` mutation. */
export type CreateReservationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Reservation` to be created by this mutation. */
  reservation: ReservationInput;
};

/** The output of our create `Reservation` mutation. */
export type CreateReservationPayload = {
  __typename?: 'CreateReservationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `Reservation`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `MentoringProg` that is related to this `Reservation`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Reservation` that was created by this mutation. */
  reservation?: Maybe<Reservation>;
  /** An edge for our `Reservation`. May be used by Relay 1. */
  reservationEdge?: Maybe<ReservationsEdge>;
};


/** The output of our create `Reservation` mutation. */
export type CreateReservationPayloadReservationEdgeArgs = {
  orderBy?: InputMaybe<Array<ReservationsOrderBy>>;
};

/** All input for the create `Social` mutation. */
export type CreateSocialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Social` to be created by this mutation. */
  social: SocialInput;
};

/** The output of our create `Social` mutation. */
export type CreateSocialPayload = {
  __typename?: 'CreateSocialPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Social` that was created by this mutation. */
  social?: Maybe<Social>;
  /** An edge for our `Social`. May be used by Relay 1. */
  socialEdge?: Maybe<SocialsEdge>;
  /** Reads a single `User` that is related to this `Social`. */
  user?: Maybe<User>;
};


/** The output of our create `Social` mutation. */
export type CreateSocialPayloadSocialEdgeArgs = {
  orderBy?: InputMaybe<Array<SocialsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the create `Webinar` mutation. */
export type CreateWebinarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Webinar` to be created by this mutation. */
  webinar: WebinarInput;
};

/** The output of our create `Webinar` mutation. */
export type CreateWebinarPayload = {
  __typename?: 'CreateWebinarPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentor` that is related to this `Webinar`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Webinar` that was created by this mutation. */
  webinar?: Maybe<Webinar>;
  /** An edge for our `Webinar`. May be used by Relay 1. */
  webinarEdge?: Maybe<WebinarsEdge>;
};


/** The output of our create `Webinar` mutation. */
export type CreateWebinarPayloadWebinarEdgeArgs = {
  orderBy?: InputMaybe<Array<WebinarsOrderBy>>;
};

/** All input for the create `WorkExperience` mutation. */
export type CreateWorkExperienceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `WorkExperience` to be created by this mutation. */
  workExperience: WorkExperienceInput;
};

/** The output of our create `WorkExperience` mutation. */
export type CreateWorkExperiencePayload = {
  __typename?: 'CreateWorkExperiencePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentor` that is related to this `WorkExperience`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `WorkExperience` that was created by this mutation. */
  workExperience?: Maybe<WorkExperience>;
  /** An edge for our `WorkExperience`. May be used by Relay 1. */
  workExperienceEdge?: Maybe<WorkExperiencesEdge>;
};


/** The output of our create `WorkExperience` mutation. */
export type CreateWorkExperiencePayloadWorkExperienceEdgeArgs = {
  orderBy?: InputMaybe<Array<WorkExperiencesOrderBy>>;
};

export type CurrentJob = Node & {
  __typename?: 'CurrentJob';
  currentJobId: Scalars['Int'];
  jobTitle: Scalars['String'];
  /** Reads a single `Mentee` that is related to this `CurrentJob`. */
  mentee?: Maybe<Mentee>;
  menteeId?: Maybe<Scalars['Int']>;
  /** Reads a single `Mentor` that is related to this `CurrentJob`. */
  mentor?: Maybe<Mentor>;
  mentorId?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `CurrentJob` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CurrentJobCondition = {
  /** Checks for equality with the object’s `currentJobId` field. */
  currentJobId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `jobTitle` field. */
  jobTitle?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `menteeId` field. */
  menteeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `mentorId` field. */
  mentorId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `CurrentJob` */
export type CurrentJobInput = {
  currentJobId?: InputMaybe<Scalars['Int']>;
  jobTitle: Scalars['String'];
  menteeId?: InputMaybe<Scalars['Int']>;
  mentorId?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `CurrentJob`. Fields that are set will be updated. */
export type CurrentJobPatch = {
  currentJobId?: InputMaybe<Scalars['Int']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  menteeId?: InputMaybe<Scalars['Int']>;
  mentorId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `CurrentJob` values. */
export type CurrentJobsConnection = {
  __typename?: 'CurrentJobsConnection';
  /** A list of edges which contains the `CurrentJob` and cursor to aid in pagination. */
  edges: Array<CurrentJobsEdge>;
  /** A list of `CurrentJob` objects. */
  nodes: Array<Maybe<CurrentJob>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CurrentJob` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `CurrentJob` edge in the connection. */
export type CurrentJobsEdge = {
  __typename?: 'CurrentJobsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CurrentJob` at the end of the edge. */
  node?: Maybe<CurrentJob>;
};

/** Methods to use when ordering `CurrentJob`. */
export enum CurrentJobsOrderBy {
  CurrentJobIdAsc = 'CURRENT_JOB_ID_ASC',
  CurrentJobIdDesc = 'CURRENT_JOB_ID_DESC',
  JobTitleAsc = 'JOB_TITLE_ASC',
  JobTitleDesc = 'JOB_TITLE_DESC',
  MenteeIdAsc = 'MENTEE_ID_ASC',
  MenteeIdDesc = 'MENTEE_ID_DESC',
  MentorIdAsc = 'MENTOR_ID_ASC',
  MentorIdDesc = 'MENTOR_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `deleteCallByMentorId` mutation. */
export type DeleteCallByMentorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
};

/** All input for the `deleteCallByNodeId` mutation. */
export type DeleteCallByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Call` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteCall` mutation. */
export type DeleteCallInput = {
  callId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our delete `Call` mutation. */
export type DeleteCallPayload = {
  __typename?: 'DeleteCallPayload';
  /** The `Call` that was deleted by this mutation. */
  call?: Maybe<Call>;
  /** An edge for our `Call`. May be used by Relay 1. */
  callEdge?: Maybe<CallsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedCallNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentor` that is related to this `Call`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Call` mutation. */
export type DeleteCallPayloadCallEdgeArgs = {
  orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

/** All input for the `deleteCertificateByNodeId` mutation. */
export type DeleteCertificateByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Certificate` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteCertificate` mutation. */
export type DeleteCertificateInput = {
  certificatesId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our delete `Certificate` mutation. */
export type DeleteCertificatePayload = {
  __typename?: 'DeleteCertificatePayload';
  /** The `Certificate` that was deleted by this mutation. */
  certificate?: Maybe<Certificate>;
  /** An edge for our `Certificate`. May be used by Relay 1. */
  certificateEdge?: Maybe<CertificatesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedCertificateNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentee` that is related to this `Certificate`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `Certificate`. */
  mentor?: Maybe<Mentor>;
  /** Reads a single `MentoringProg` that is related to this `Certificate`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Certificate` mutation. */
export type DeleteCertificatePayloadCertificateEdgeArgs = {
  orderBy?: InputMaybe<Array<CertificatesOrderBy>>;
};

/** All input for the `deleteCoordinatorByNodeId` mutation. */
export type DeleteCoordinatorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Coordinator` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteCoordinatorByUserId` mutation. */
export type DeleteCoordinatorByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

/** All input for the `deleteCoordinator` mutation. */
export type DeleteCoordinatorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  coordinatorId: Scalars['Int'];
};

/** The output of our delete `Coordinator` mutation. */
export type DeleteCoordinatorPayload = {
  __typename?: 'DeleteCoordinatorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Coordinator` that was deleted by this mutation. */
  coordinator?: Maybe<Coordinator>;
  /** An edge for our `Coordinator`. May be used by Relay 1. */
  coordinatorEdge?: Maybe<CoordinatorsEdge>;
  deletedCoordinatorNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Coordinator`. */
  user?: Maybe<User>;
};


/** The output of our delete `Coordinator` mutation. */
export type DeleteCoordinatorPayloadCoordinatorEdgeArgs = {
  orderBy?: InputMaybe<Array<CoordinatorsOrderBy>>;
};

/** All input for the `deleteCurrentJobByMenteeId` mutation. */
export type DeleteCurrentJobByMenteeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  menteeId: Scalars['Int'];
};

/** All input for the `deleteCurrentJobByMentorId` mutation. */
export type DeleteCurrentJobByMentorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
};

/** All input for the `deleteCurrentJobByNodeId` mutation. */
export type DeleteCurrentJobByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CurrentJob` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteCurrentJob` mutation. */
export type DeleteCurrentJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  currentJobId: Scalars['Int'];
};

/** The output of our delete `CurrentJob` mutation. */
export type DeleteCurrentJobPayload = {
  __typename?: 'DeleteCurrentJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CurrentJob` that was deleted by this mutation. */
  currentJob?: Maybe<CurrentJob>;
  /** An edge for our `CurrentJob`. May be used by Relay 1. */
  currentJobEdge?: Maybe<CurrentJobsEdge>;
  deletedCurrentJobNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentee` that is related to this `CurrentJob`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `CurrentJob`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `CurrentJob` mutation. */
export type DeleteCurrentJobPayloadCurrentJobEdgeArgs = {
  orderBy?: InputMaybe<Array<CurrentJobsOrderBy>>;
};

/** All input for the `deleteEducationByMenteeId` mutation. */
export type DeleteEducationByMenteeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  menteeId: Scalars['Int'];
};

/** All input for the `deleteEducationByMentorId` mutation. */
export type DeleteEducationByMentorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
};

/** All input for the `deleteEducationByNodeId` mutation. */
export type DeleteEducationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Education` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteEducation` mutation. */
export type DeleteEducationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  educationId: Scalars['Int'];
};

/** The output of our delete `Education` mutation. */
export type DeleteEducationPayload = {
  __typename?: 'DeleteEducationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedEducationNodeId?: Maybe<Scalars['ID']>;
  /** The `Education` that was deleted by this mutation. */
  education?: Maybe<Education>;
  /** An edge for our `Education`. May be used by Relay 1. */
  educationEdge?: Maybe<EducationsEdge>;
  /** Reads a single `Mentee` that is related to this `Education`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `Education`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Education` mutation. */
export type DeleteEducationPayloadEducationEdgeArgs = {
  orderBy?: InputMaybe<Array<EducationsOrderBy>>;
};

/** All input for the `deleteLanguageByNodeId` mutation. */
export type DeleteLanguageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Language` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteLanguageByUserId` mutation. */
export type DeleteLanguageByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

/** All input for the `deleteLanguage` mutation. */
export type DeleteLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  languageId: Scalars['Int'];
};

/** The output of our delete `Language` mutation. */
export type DeleteLanguagePayload = {
  __typename?: 'DeleteLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedLanguageNodeId?: Maybe<Scalars['ID']>;
  /** The `Language` that was deleted by this mutation. */
  language?: Maybe<Language>;
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Language`. */
  user?: Maybe<User>;
};


/** The output of our delete `Language` mutation. */
export type DeleteLanguagePayloadLanguageEdgeArgs = {
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};

/** All input for the `deleteMenteeByNodeId` mutation. */
export type DeleteMenteeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Mentee` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMenteeByUserId` mutation. */
export type DeleteMenteeByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

/** All input for the `deleteMentee` mutation. */
export type DeleteMenteeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  menteeId: Scalars['Int'];
};

/** The output of our delete `Mentee` mutation. */
export type DeleteMenteePayload = {
  __typename?: 'DeleteMenteePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMenteeNodeId?: Maybe<Scalars['ID']>;
  /** The `Mentee` that was deleted by this mutation. */
  mentee?: Maybe<Mentee>;
  /** An edge for our `Mentee`. May be used by Relay 1. */
  menteeEdge?: Maybe<MenteesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Mentee`. */
  user?: Maybe<User>;
};


/** The output of our delete `Mentee` mutation. */
export type DeleteMenteePayloadMenteeEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteesOrderBy>>;
};

/** All input for the `deleteMenteeSubjectByNodeId` mutation. */
export type DeleteMenteeSubjectByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MenteeSubject` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMenteeSubject` mutation. */
export type DeleteMenteeSubjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  menteeSubjectId: Scalars['Int'];
};

/** The output of our delete `MenteeSubject` mutation. */
export type DeleteMenteeSubjectPayload = {
  __typename?: 'DeleteMenteeSubjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMenteeSubjectNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentee` that is related to this `MenteeSubject`. */
  mentee?: Maybe<Mentee>;
  /** The `MenteeSubject` that was deleted by this mutation. */
  menteeSubject?: Maybe<MenteeSubject>;
  /** An edge for our `MenteeSubject`. May be used by Relay 1. */
  menteeSubjectEdge?: Maybe<MenteeSubjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `MenteeSubject` mutation. */
export type DeleteMenteeSubjectPayloadMenteeSubjectEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteeSubjectsOrderBy>>;
};

/** All input for the `deleteMenteesInterestedInProgByNodeId` mutation. */
export type DeleteMenteesInterestedInProgByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MenteesInterestedInProg` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMenteesInterestedInProg` mutation. */
export type DeleteMenteesInterestedInProgInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  interestedId: Scalars['Int'];
};

/** The output of our delete `MenteesInterestedInProg` mutation. */
export type DeleteMenteesInterestedInProgPayload = {
  __typename?: 'DeleteMenteesInterestedInProgPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMenteesInterestedInProgNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentee` that is related to this `MenteesInterestedInProg`. */
  mentee?: Maybe<Mentee>;
  /** The `MenteesInterestedInProg` that was deleted by this mutation. */
  menteesInterestedInProg?: Maybe<MenteesInterestedInProg>;
  /** An edge for our `MenteesInterestedInProg`. May be used by Relay 1. */
  menteesInterestedInProgEdge?: Maybe<MenteesInterestedInProgsEdge>;
  /** Reads a single `MentoringProg` that is related to this `MenteesInterestedInProg`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `MenteesInterestedInProg` mutation. */
export type DeleteMenteesInterestedInProgPayloadMenteesInterestedInProgEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteesInterestedInProgsOrderBy>>;
};

/** All input for the `deleteMenteesInterestedInWebinarByNodeId` mutation. */
export type DeleteMenteesInterestedInWebinarByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MenteesInterestedInWebinar` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMenteesInterestedInWebinar` mutation. */
export type DeleteMenteesInterestedInWebinarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  interestedId: Scalars['Int'];
};

/** The output of our delete `MenteesInterestedInWebinar` mutation. */
export type DeleteMenteesInterestedInWebinarPayload = {
  __typename?: 'DeleteMenteesInterestedInWebinarPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMenteesInterestedInWebinarNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentee` that is related to this `MenteesInterestedInWebinar`. */
  mentee?: Maybe<Mentee>;
  /** The `MenteesInterestedInWebinar` that was deleted by this mutation. */
  menteesInterestedInWebinar?: Maybe<MenteesInterestedInWebinar>;
  /** An edge for our `MenteesInterestedInWebinar`. May be used by Relay 1. */
  menteesInterestedInWebinarEdge?: Maybe<MenteesInterestedInWebinarsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Webinar` that is related to this `MenteesInterestedInWebinar`. */
  webinar?: Maybe<Webinar>;
};


/** The output of our delete `MenteesInterestedInWebinar` mutation. */
export type DeleteMenteesInterestedInWebinarPayloadMenteesInterestedInWebinarEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteesInterestedInWebinarsOrderBy>>;
};

/** All input for the `deleteMentorByNodeId` mutation. */
export type DeleteMentorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Mentor` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMentorByUserId` mutation. */
export type DeleteMentorByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

/** All input for the `deleteMentor` mutation. */
export type DeleteMentorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
};

/** The output of our delete `Mentor` mutation. */
export type DeleteMentorPayload = {
  __typename?: 'DeleteMentorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMentorNodeId?: Maybe<Scalars['ID']>;
  /** The `Mentor` that was deleted by this mutation. */
  mentor?: Maybe<Mentor>;
  /** An edge for our `Mentor`. May be used by Relay 1. */
  mentorEdge?: Maybe<MentorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Mentor`. */
  user?: Maybe<User>;
};


/** The output of our delete `Mentor` mutation. */
export type DeleteMentorPayloadMentorEdgeArgs = {
  orderBy?: InputMaybe<Array<MentorsOrderBy>>;
};

/** All input for the `deleteMentorSubjectByNodeId` mutation. */
export type DeleteMentorSubjectByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MentorSubject` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMentorSubject` mutation. */
export type DeleteMentorSubjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorSubjectId: Scalars['Int'];
};

/** The output of our delete `MentorSubject` mutation. */
export type DeleteMentorSubjectPayload = {
  __typename?: 'DeleteMentorSubjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMentorSubjectNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentor` that is related to this `MentorSubject`. */
  mentor?: Maybe<Mentor>;
  /** The `MentorSubject` that was deleted by this mutation. */
  mentorSubject?: Maybe<MentorSubject>;
  /** An edge for our `MentorSubject`. May be used by Relay 1. */
  mentorSubjectEdge?: Maybe<MentorSubjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `MentorSubject` mutation. */
export type DeleteMentorSubjectPayloadMentorSubjectEdgeArgs = {
  orderBy?: InputMaybe<Array<MentorSubjectsOrderBy>>;
};

/** All input for the `deleteMentoringProgByNodeId` mutation. */
export type DeleteMentoringProgByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MentoringProg` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMentoringProg` mutation. */
export type DeleteMentoringProgInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  progId: Scalars['Int'];
};

/** The output of our delete `MentoringProg` mutation. */
export type DeleteMentoringProgPayload = {
  __typename?: 'DeleteMentoringProgPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Coordinator` that is related to this `MentoringProg`. */
  coordinator?: Maybe<Coordinator>;
  deletedMentoringProgNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentor` that is related to this `MentoringProg`. */
  mentor?: Maybe<Mentor>;
  /** Reads a single `MentorSubject` that is related to this `MentoringProg`. */
  mentorSubject?: Maybe<MentorSubject>;
  /** The `MentoringProg` that was deleted by this mutation. */
  mentoringProg?: Maybe<MentoringProg>;
  /** An edge for our `MentoringProg`. May be used by Relay 1. */
  mentoringProgEdge?: Maybe<MentoringProgsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `MentoringProg` mutation. */
export type DeleteMentoringProgPayloadMentoringProgEdgeArgs = {
  orderBy?: InputMaybe<Array<MentoringProgsOrderBy>>;
};

/** All input for the `deletePersonalDevelopmentPlanByNodeId` mutation. */
export type DeletePersonalDevelopmentPlanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PersonalDevelopmentPlan` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deletePersonalDevelopmentPlan` mutation. */
export type DeletePersonalDevelopmentPlanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  pdpId: Scalars['Int'];
};

/** The output of our delete `PersonalDevelopmentPlan` mutation. */
export type DeletePersonalDevelopmentPlanPayload = {
  __typename?: 'DeletePersonalDevelopmentPlanPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPersonalDevelopmentPlanNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentee` that is related to this `PersonalDevelopmentPlan`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `PersonalDevelopmentPlan`. */
  mentor?: Maybe<Mentor>;
  /** The `PersonalDevelopmentPlan` that was deleted by this mutation. */
  personalDevelopmentPlan?: Maybe<PersonalDevelopmentPlan>;
  /** An edge for our `PersonalDevelopmentPlan`. May be used by Relay 1. */
  personalDevelopmentPlanEdge?: Maybe<PersonalDevelopmentPlansEdge>;
  /** Reads a single `MentoringProg` that is related to this `PersonalDevelopmentPlan`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `PersonalDevelopmentPlan` mutation. */
export type DeletePersonalDevelopmentPlanPayloadPersonalDevelopmentPlanEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonalDevelopmentPlansOrderBy>>;
};

/** All input for the `deleteReservationByNodeId` mutation. */
export type DeleteReservationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Reservation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteReservation` mutation. */
export type DeleteReservationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  reservationId: Scalars['Int'];
};

/** The output of our delete `Reservation` mutation. */
export type DeleteReservationPayload = {
  __typename?: 'DeleteReservationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedReservationNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentee` that is related to this `Reservation`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `MentoringProg` that is related to this `Reservation`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Reservation` that was deleted by this mutation. */
  reservation?: Maybe<Reservation>;
  /** An edge for our `Reservation`. May be used by Relay 1. */
  reservationEdge?: Maybe<ReservationsEdge>;
};


/** The output of our delete `Reservation` mutation. */
export type DeleteReservationPayloadReservationEdgeArgs = {
  orderBy?: InputMaybe<Array<ReservationsOrderBy>>;
};

/** All input for the `deleteSocialByNodeId` mutation. */
export type DeleteSocialByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Social` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSocialByUserId` mutation. */
export type DeleteSocialByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

/** All input for the `deleteSocial` mutation. */
export type DeleteSocialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  socialsId: Scalars['Int'];
};

/** The output of our delete `Social` mutation. */
export type DeleteSocialPayload = {
  __typename?: 'DeleteSocialPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSocialNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Social` that was deleted by this mutation. */
  social?: Maybe<Social>;
  /** An edge for our `Social`. May be used by Relay 1. */
  socialEdge?: Maybe<SocialsEdge>;
  /** Reads a single `User` that is related to this `Social`. */
  user?: Maybe<User>;
};


/** The output of our delete `Social` mutation. */
export type DeleteSocialPayloadSocialEdgeArgs = {
  orderBy?: InputMaybe<Array<SocialsOrderBy>>;
};

/** All input for the `deleteUserByEmail` mutation. */
export type DeleteUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

/** All input for the `deleteUserByNodeId` mutation. */
export type DeleteUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteUserByProfileImage` mutation. */
export type DeleteUserByProfileImageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  profileImage: Scalars['String'];
};

/** All input for the `deleteUserByUsername` mutation. */
export type DeleteUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteWebinarByNodeId` mutation. */
export type DeleteWebinarByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Webinar` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteWebinar` mutation. */
export type DeleteWebinarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  webinarId: Scalars['Int'];
};

/** The output of our delete `Webinar` mutation. */
export type DeleteWebinarPayload = {
  __typename?: 'DeleteWebinarPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedWebinarNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentor` that is related to this `Webinar`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Webinar` that was deleted by this mutation. */
  webinar?: Maybe<Webinar>;
  /** An edge for our `Webinar`. May be used by Relay 1. */
  webinarEdge?: Maybe<WebinarsEdge>;
};


/** The output of our delete `Webinar` mutation. */
export type DeleteWebinarPayloadWebinarEdgeArgs = {
  orderBy?: InputMaybe<Array<WebinarsOrderBy>>;
};

/** All input for the `deleteWorkExperienceByMentorId` mutation. */
export type DeleteWorkExperienceByMentorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
};

/** All input for the `deleteWorkExperienceByNodeId` mutation. */
export type DeleteWorkExperienceByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `WorkExperience` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteWorkExperience` mutation. */
export type DeleteWorkExperienceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  workExpId: Scalars['Int'];
};

/** The output of our delete `WorkExperience` mutation. */
export type DeleteWorkExperiencePayload = {
  __typename?: 'DeleteWorkExperiencePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedWorkExperienceNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Mentor` that is related to this `WorkExperience`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `WorkExperience` that was deleted by this mutation. */
  workExperience?: Maybe<WorkExperience>;
  /** An edge for our `WorkExperience`. May be used by Relay 1. */
  workExperienceEdge?: Maybe<WorkExperiencesEdge>;
};


/** The output of our delete `WorkExperience` mutation. */
export type DeleteWorkExperiencePayloadWorkExperienceEdgeArgs = {
  orderBy?: InputMaybe<Array<WorkExperiencesOrderBy>>;
};

export type Education = Node & {
  __typename?: 'Education';
  educationId: Scalars['Int'];
  educationTitle: Scalars['String'];
  /** Reads a single `Mentee` that is related to this `Education`. */
  mentee?: Maybe<Mentee>;
  menteeId?: Maybe<Scalars['Int']>;
  /** Reads a single `Mentor` that is related to this `Education`. */
  mentor?: Maybe<Mentor>;
  mentorId?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `Education` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EducationCondition = {
  /** Checks for equality with the object’s `educationId` field. */
  educationId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `educationTitle` field. */
  educationTitle?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `menteeId` field. */
  menteeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `mentorId` field. */
  mentorId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `Education` */
export type EducationInput = {
  educationId?: InputMaybe<Scalars['Int']>;
  educationTitle: Scalars['String'];
  menteeId?: InputMaybe<Scalars['Int']>;
  mentorId?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `Education`. Fields that are set will be updated. */
export type EducationPatch = {
  educationId?: InputMaybe<Scalars['Int']>;
  educationTitle?: InputMaybe<Scalars['String']>;
  menteeId?: InputMaybe<Scalars['Int']>;
  mentorId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Education` values. */
export type EducationsConnection = {
  __typename?: 'EducationsConnection';
  /** A list of edges which contains the `Education` and cursor to aid in pagination. */
  edges: Array<EducationsEdge>;
  /** A list of `Education` objects. */
  nodes: Array<Maybe<Education>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Education` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Education` edge in the connection. */
export type EducationsEdge = {
  __typename?: 'EducationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Education` at the end of the edge. */
  node?: Maybe<Education>;
};

/** Methods to use when ordering `Education`. */
export enum EducationsOrderBy {
  EducationIdAsc = 'EDUCATION_ID_ASC',
  EducationIdDesc = 'EDUCATION_ID_DESC',
  EducationTitleAsc = 'EDUCATION_TITLE_ASC',
  EducationTitleDesc = 'EDUCATION_TITLE_DESC',
  MenteeIdAsc = 'MENTEE_ID_ASC',
  MenteeIdDesc = 'MENTEE_ID_DESC',
  MentorIdAsc = 'MENTOR_ID_ASC',
  MentorIdDesc = 'MENTOR_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Language = Node & {
  __typename?: 'Language';
  languageId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  usedLang1?: Maybe<Scalars['String']>;
  usedLang2?: Maybe<Scalars['String']>;
  usedLang3?: Maybe<Scalars['String']>;
  /** Reads a single `User` that is related to this `Language`. */
  user?: Maybe<User>;
  userId: Scalars['UUID'];
};

/**
 * A condition to be used against `Language` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LanguageCondition = {
  /** Checks for equality with the object’s `languageId` field. */
  languageId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `usedLang1` field. */
  usedLang1?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `usedLang2` field. */
  usedLang2?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `usedLang3` field. */
  usedLang3?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Language` */
export type LanguageInput = {
  languageId?: InputMaybe<Scalars['Int']>;
  usedLang1?: InputMaybe<Scalars['String']>;
  usedLang2?: InputMaybe<Scalars['String']>;
  usedLang3?: InputMaybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

/** Represents an update to a `Language`. Fields that are set will be updated. */
export type LanguagePatch = {
  languageId?: InputMaybe<Scalars['Int']>;
  usedLang1?: InputMaybe<Scalars['String']>;
  usedLang2?: InputMaybe<Scalars['String']>;
  usedLang3?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `Language` values. */
export type LanguagesConnection = {
  __typename?: 'LanguagesConnection';
  /** A list of edges which contains the `Language` and cursor to aid in pagination. */
  edges: Array<LanguagesEdge>;
  /** A list of `Language` objects. */
  nodes: Array<Maybe<Language>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Language` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Language` edge in the connection. */
export type LanguagesEdge = {
  __typename?: 'LanguagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Language` at the end of the edge. */
  node?: Maybe<Language>;
};

/** Methods to use when ordering `Language`. */
export enum LanguagesOrderBy {
  LanguageIdAsc = 'LANGUAGE_ID_ASC',
  LanguageIdDesc = 'LANGUAGE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UsedLang_1Asc = 'USED_LANG_1_ASC',
  UsedLang_1Desc = 'USED_LANG_1_DESC',
  UsedLang_2Asc = 'USED_LANG_2_ASC',
  UsedLang_2Desc = 'USED_LANG_2_DESC',
  UsedLang_3Asc = 'USED_LANG_3_ASC',
  UsedLang_3Desc = 'USED_LANG_3_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type Mentee = Node & {
  __typename?: 'Mentee';
  /** Reads and enables pagination through a set of `Certificate`. */
  certificates: CertificatesConnection;
  /** Reads a single `CurrentJob` that is related to this `Mentee`. */
  currentJob?: Maybe<CurrentJob>;
  /**
   * Reads and enables pagination through a set of `CurrentJob`.
   * @deprecated Please use currentJob instead
   */
  currentJobs: CurrentJobsConnection;
  /** Reads a single `Education` that is related to this `Mentee`. */
  education?: Maybe<Education>;
  /**
   * Reads and enables pagination through a set of `Education`.
   * @deprecated Please use education instead
   */
  educations: EducationsConnection;
  menteeDescription?: Maybe<Scalars['String']>;
  menteeId: Scalars['Int'];
  /** Reads and enables pagination through a set of `MenteeSubject`. */
  menteeSubjects: MenteeSubjectsConnection;
  /** Reads and enables pagination through a set of `MenteesInterestedInProg`. */
  menteesInterestedInProgs: MenteesInterestedInProgsConnection;
  /** Reads and enables pagination through a set of `MenteesInterestedInWebinar`. */
  menteesInterestedInWebinars: MenteesInterestedInWebinarsConnection;
  needs: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `PersonalDevelopmentPlan`. */
  personalDevelopmentPlans: PersonalDevelopmentPlansConnection;
  /** Reads and enables pagination through a set of `Reservation`. */
  reservations: ReservationsConnection;
  /** Reads a single `User` that is related to this `Mentee`. */
  user?: Maybe<User>;
  userId: Scalars['UUID'];
};


export type MenteeCertificatesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CertificateCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CertificatesOrderBy>>;
};


export type MenteeCurrentJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CurrentJobCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CurrentJobsOrderBy>>;
};


export type MenteeEducationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<EducationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EducationsOrderBy>>;
};


export type MenteeMenteeSubjectsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MenteeSubjectCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MenteeSubjectsOrderBy>>;
};


export type MenteeMenteesInterestedInProgsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MenteesInterestedInProgCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MenteesInterestedInProgsOrderBy>>;
};


export type MenteeMenteesInterestedInWebinarsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MenteesInterestedInWebinarCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MenteesInterestedInWebinarsOrderBy>>;
};


export type MenteePersonalDevelopmentPlansArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonalDevelopmentPlanCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonalDevelopmentPlansOrderBy>>;
};


export type MenteeReservationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ReservationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ReservationsOrderBy>>;
};

/** A condition to be used against `Mentee` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MenteeCondition = {
  /** Checks for equality with the object’s `menteeDescription` field. */
  menteeDescription?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `menteeId` field. */
  menteeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `needs` field. */
  needs?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Mentee` */
export type MenteeInput = {
  menteeDescription?: InputMaybe<Scalars['String']>;
  menteeId?: InputMaybe<Scalars['Int']>;
  needs: Scalars['String'];
  userId: Scalars['UUID'];
};

/** Represents an update to a `Mentee`. Fields that are set will be updated. */
export type MenteePatch = {
  menteeDescription?: InputMaybe<Scalars['String']>;
  menteeId?: InputMaybe<Scalars['Int']>;
  needs?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type MenteeSubject = Node & {
  __typename?: 'MenteeSubject';
  domaine?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `MenteeSubject`. */
  mentee?: Maybe<Mentee>;
  menteeId: Scalars['Int'];
  menteeSubjectId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `MenteeSubject` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type MenteeSubjectCondition = {
  /** Checks for equality with the object’s `domaine` field. */
  domaine?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `menteeId` field. */
  menteeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `menteeSubjectId` field. */
  menteeSubjectId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `MenteeSubject` */
export type MenteeSubjectInput = {
  domaine?: InputMaybe<Scalars['String']>;
  menteeId: Scalars['Int'];
  menteeSubjectId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `MenteeSubject`. Fields that are set will be updated. */
export type MenteeSubjectPatch = {
  domaine?: InputMaybe<Scalars['String']>;
  menteeId?: InputMaybe<Scalars['Int']>;
  menteeSubjectId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `MenteeSubject` values. */
export type MenteeSubjectsConnection = {
  __typename?: 'MenteeSubjectsConnection';
  /** A list of edges which contains the `MenteeSubject` and cursor to aid in pagination. */
  edges: Array<MenteeSubjectsEdge>;
  /** A list of `MenteeSubject` objects. */
  nodes: Array<Maybe<MenteeSubject>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MenteeSubject` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MenteeSubject` edge in the connection. */
export type MenteeSubjectsEdge = {
  __typename?: 'MenteeSubjectsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MenteeSubject` at the end of the edge. */
  node?: Maybe<MenteeSubject>;
};

/** Methods to use when ordering `MenteeSubject`. */
export enum MenteeSubjectsOrderBy {
  DomaineAsc = 'DOMAINE_ASC',
  DomaineDesc = 'DOMAINE_DESC',
  MenteeIdAsc = 'MENTEE_ID_ASC',
  MenteeIdDesc = 'MENTEE_ID_DESC',
  MenteeSubjectIdAsc = 'MENTEE_SUBJECT_ID_ASC',
  MenteeSubjectIdDesc = 'MENTEE_SUBJECT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

/** A connection to a list of `Mentee` values. */
export type MenteesConnection = {
  __typename?: 'MenteesConnection';
  /** A list of edges which contains the `Mentee` and cursor to aid in pagination. */
  edges: Array<MenteesEdge>;
  /** A list of `Mentee` objects. */
  nodes: Array<Maybe<Mentee>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Mentee` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Mentee` edge in the connection. */
export type MenteesEdge = {
  __typename?: 'MenteesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Mentee` at the end of the edge. */
  node?: Maybe<Mentee>;
};

export type MenteesInterestedInProg = Node & {
  __typename?: 'MenteesInterestedInProg';
  interestedId: Scalars['Int'];
  /** Reads a single `Mentee` that is related to this `MenteesInterestedInProg`. */
  mentee?: Maybe<Mentee>;
  menteeId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `MentoringProg` that is related to this `MenteesInterestedInProg`. */
  prog?: Maybe<MentoringProg>;
  progId: Scalars['Int'];
};

/**
 * A condition to be used against `MenteesInterestedInProg` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type MenteesInterestedInProgCondition = {
  /** Checks for equality with the object’s `interestedId` field. */
  interestedId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `menteeId` field. */
  menteeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `progId` field. */
  progId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `MenteesInterestedInProg` */
export type MenteesInterestedInProgInput = {
  interestedId?: InputMaybe<Scalars['Int']>;
  menteeId: Scalars['Int'];
  progId: Scalars['Int'];
};

/** Represents an update to a `MenteesInterestedInProg`. Fields that are set will be updated. */
export type MenteesInterestedInProgPatch = {
  interestedId?: InputMaybe<Scalars['Int']>;
  menteeId?: InputMaybe<Scalars['Int']>;
  progId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `MenteesInterestedInProg` values. */
export type MenteesInterestedInProgsConnection = {
  __typename?: 'MenteesInterestedInProgsConnection';
  /** A list of edges which contains the `MenteesInterestedInProg` and cursor to aid in pagination. */
  edges: Array<MenteesInterestedInProgsEdge>;
  /** A list of `MenteesInterestedInProg` objects. */
  nodes: Array<Maybe<MenteesInterestedInProg>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MenteesInterestedInProg` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MenteesInterestedInProg` edge in the connection. */
export type MenteesInterestedInProgsEdge = {
  __typename?: 'MenteesInterestedInProgsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MenteesInterestedInProg` at the end of the edge. */
  node?: Maybe<MenteesInterestedInProg>;
};

/** Methods to use when ordering `MenteesInterestedInProg`. */
export enum MenteesInterestedInProgsOrderBy {
  InterestedIdAsc = 'INTERESTED_ID_ASC',
  InterestedIdDesc = 'INTERESTED_ID_DESC',
  MenteeIdAsc = 'MENTEE_ID_ASC',
  MenteeIdDesc = 'MENTEE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProgIdAsc = 'PROG_ID_ASC',
  ProgIdDesc = 'PROG_ID_DESC'
}

export type MenteesInterestedInWebinar = Node & {
  __typename?: 'MenteesInterestedInWebinar';
  interestedId: Scalars['Int'];
  /** Reads a single `Mentee` that is related to this `MenteesInterestedInWebinar`. */
  mentee?: Maybe<Mentee>;
  menteeId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Webinar` that is related to this `MenteesInterestedInWebinar`. */
  webinar?: Maybe<Webinar>;
  webinarId: Scalars['Int'];
};

/**
 * A condition to be used against `MenteesInterestedInWebinar` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type MenteesInterestedInWebinarCondition = {
  /** Checks for equality with the object’s `interestedId` field. */
  interestedId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `menteeId` field. */
  menteeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `webinarId` field. */
  webinarId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `MenteesInterestedInWebinar` */
export type MenteesInterestedInWebinarInput = {
  interestedId?: InputMaybe<Scalars['Int']>;
  menteeId: Scalars['Int'];
  webinarId: Scalars['Int'];
};

/** Represents an update to a `MenteesInterestedInWebinar`. Fields that are set will be updated. */
export type MenteesInterestedInWebinarPatch = {
  interestedId?: InputMaybe<Scalars['Int']>;
  menteeId?: InputMaybe<Scalars['Int']>;
  webinarId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `MenteesInterestedInWebinar` values. */
export type MenteesInterestedInWebinarsConnection = {
  __typename?: 'MenteesInterestedInWebinarsConnection';
  /** A list of edges which contains the `MenteesInterestedInWebinar` and cursor to aid in pagination. */
  edges: Array<MenteesInterestedInWebinarsEdge>;
  /** A list of `MenteesInterestedInWebinar` objects. */
  nodes: Array<Maybe<MenteesInterestedInWebinar>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MenteesInterestedInWebinar` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MenteesInterestedInWebinar` edge in the connection. */
export type MenteesInterestedInWebinarsEdge = {
  __typename?: 'MenteesInterestedInWebinarsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MenteesInterestedInWebinar` at the end of the edge. */
  node?: Maybe<MenteesInterestedInWebinar>;
};

/** Methods to use when ordering `MenteesInterestedInWebinar`. */
export enum MenteesInterestedInWebinarsOrderBy {
  InterestedIdAsc = 'INTERESTED_ID_ASC',
  InterestedIdDesc = 'INTERESTED_ID_DESC',
  MenteeIdAsc = 'MENTEE_ID_ASC',
  MenteeIdDesc = 'MENTEE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  WebinarIdAsc = 'WEBINAR_ID_ASC',
  WebinarIdDesc = 'WEBINAR_ID_DESC'
}

/** Methods to use when ordering `Mentee`. */
export enum MenteesOrderBy {
  MenteeDescriptionAsc = 'MENTEE_DESCRIPTION_ASC',
  MenteeDescriptionDesc = 'MENTEE_DESCRIPTION_DESC',
  MenteeIdAsc = 'MENTEE_ID_ASC',
  MenteeIdDesc = 'MENTEE_ID_DESC',
  Natural = 'NATURAL',
  NeedsAsc = 'NEEDS_ASC',
  NeedsDesc = 'NEEDS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type Mentor = Node & {
  __typename?: 'Mentor';
  brief: Scalars['String'];
  /** Reads a single `Call` that is related to this `Mentor`. */
  call?: Maybe<Call>;
  /**
   * Reads and enables pagination through a set of `Call`.
   * @deprecated Please use call instead
   */
  calls: CallsConnection;
  /** Reads and enables pagination through a set of `Certificate`. */
  certificates: CertificatesConnection;
  /** Reads a single `CurrentJob` that is related to this `Mentor`. */
  currentJob?: Maybe<CurrentJob>;
  /**
   * Reads and enables pagination through a set of `CurrentJob`.
   * @deprecated Please use currentJob instead
   */
  currentJobs: CurrentJobsConnection;
  /** Reads a single `Education` that is related to this `Mentor`. */
  education?: Maybe<Education>;
  /**
   * Reads and enables pagination through a set of `Education`.
   * @deprecated Please use education instead
   */
  educations: EducationsConnection;
  entreprise: Scalars['String'];
  expertise?: Maybe<Scalars['String']>;
  mentorDescription?: Maybe<Scalars['String']>;
  mentorId: Scalars['Int'];
  /** Reads and enables pagination through a set of `MentorSubject`. */
  mentorSubjects: MentorSubjectsConnection;
  /** Reads and enables pagination through a set of `MentoringProg`. */
  mentoringProgs: MentoringProgsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `PersonalDevelopmentPlan`. */
  personalDevelopmentPlans: PersonalDevelopmentPlansConnection;
  preferredType?: Maybe<Scalars['String']>;
  /** Reads a single `User` that is related to this `Mentor`. */
  user?: Maybe<User>;
  userId: Scalars['UUID'];
  video?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Webinar`. */
  webinars: WebinarsConnection;
  /** Reads a single `WorkExperience` that is related to this `Mentor`. */
  workExperience?: Maybe<WorkExperience>;
  /**
   * Reads and enables pagination through a set of `WorkExperience`.
   * @deprecated Please use workExperience instead
   */
  workExperiences: WorkExperiencesConnection;
};


export type MentorCallsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CallCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CallsOrderBy>>;
};


export type MentorCertificatesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CertificateCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CertificatesOrderBy>>;
};


export type MentorCurrentJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CurrentJobCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CurrentJobsOrderBy>>;
};


export type MentorEducationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<EducationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EducationsOrderBy>>;
};


export type MentorMentorSubjectsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MentorSubjectCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MentorSubjectsOrderBy>>;
};


export type MentorMentoringProgsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MentoringProgCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MentoringProgsOrderBy>>;
};


export type MentorPersonalDevelopmentPlansArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonalDevelopmentPlanCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonalDevelopmentPlansOrderBy>>;
};


export type MentorWebinarsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<WebinarCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WebinarsOrderBy>>;
};


export type MentorWorkExperiencesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<WorkExperienceCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkExperiencesOrderBy>>;
};

/** A condition to be used against `Mentor` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MentorCondition = {
  /** Checks for equality with the object’s `brief` field. */
  brief?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `entreprise` field. */
  entreprise?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `expertise` field. */
  expertise?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `mentorDescription` field. */
  mentorDescription?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `mentorId` field. */
  mentorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `preferredType` field. */
  preferredType?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `video` field. */
  video?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Mentor` */
export type MentorInput = {
  brief: Scalars['String'];
  entreprise: Scalars['String'];
  expertise?: InputMaybe<Scalars['String']>;
  mentorDescription?: InputMaybe<Scalars['String']>;
  mentorId?: InputMaybe<Scalars['Int']>;
  preferredType?: InputMaybe<Scalars['String']>;
  userId: Scalars['UUID'];
  video?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `Mentor`. Fields that are set will be updated. */
export type MentorPatch = {
  brief?: InputMaybe<Scalars['String']>;
  entreprise?: InputMaybe<Scalars['String']>;
  expertise?: InputMaybe<Scalars['String']>;
  mentorDescription?: InputMaybe<Scalars['String']>;
  mentorId?: InputMaybe<Scalars['Int']>;
  preferredType?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['UUID']>;
  video?: InputMaybe<Scalars['String']>;
};

export type MentorSubject = Node & {
  __typename?: 'MentorSubject';
  domaine?: Maybe<Scalars['String']>;
  /** Reads a single `Mentor` that is related to this `MentorSubject`. */
  mentor?: Maybe<Mentor>;
  mentorId: Scalars['Int'];
  mentorSubjectId: Scalars['Int'];
  /** Reads and enables pagination through a set of `MentoringProg`. */
  mentoringProgs: MentoringProgsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};


export type MentorSubjectMentoringProgsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MentoringProgCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MentoringProgsOrderBy>>;
};

/**
 * A condition to be used against `MentorSubject` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type MentorSubjectCondition = {
  /** Checks for equality with the object’s `domaine` field. */
  domaine?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `mentorId` field. */
  mentorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `mentorSubjectId` field. */
  mentorSubjectId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `MentorSubject` */
export type MentorSubjectInput = {
  domaine?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
  mentorSubjectId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `MentorSubject`. Fields that are set will be updated. */
export type MentorSubjectPatch = {
  domaine?: InputMaybe<Scalars['String']>;
  mentorId?: InputMaybe<Scalars['Int']>;
  mentorSubjectId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `MentorSubject` values. */
export type MentorSubjectsConnection = {
  __typename?: 'MentorSubjectsConnection';
  /** A list of edges which contains the `MentorSubject` and cursor to aid in pagination. */
  edges: Array<MentorSubjectsEdge>;
  /** A list of `MentorSubject` objects. */
  nodes: Array<Maybe<MentorSubject>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MentorSubject` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MentorSubject` edge in the connection. */
export type MentorSubjectsEdge = {
  __typename?: 'MentorSubjectsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MentorSubject` at the end of the edge. */
  node?: Maybe<MentorSubject>;
};

/** Methods to use when ordering `MentorSubject`. */
export enum MentorSubjectsOrderBy {
  DomaineAsc = 'DOMAINE_ASC',
  DomaineDesc = 'DOMAINE_DESC',
  MentorIdAsc = 'MENTOR_ID_ASC',
  MentorIdDesc = 'MENTOR_ID_DESC',
  MentorSubjectIdAsc = 'MENTOR_SUBJECT_ID_ASC',
  MentorSubjectIdDesc = 'MENTOR_SUBJECT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export type MentoringProg = Node & {
  __typename?: 'MentoringProg';
  /** Reads and enables pagination through a set of `Certificate`. */
  certificatesByProgId: CertificatesConnection;
  /** Reads a single `Coordinator` that is related to this `MentoringProg`. */
  coordinator?: Maybe<Coordinator>;
  coordinatorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `MenteesInterestedInProg`. */
  menteesInterestedInProgsByProgId: MenteesInterestedInProgsConnection;
  /** Reads a single `Mentor` that is related to this `MentoringProg`. */
  mentor?: Maybe<Mentor>;
  mentorId: Scalars['Int'];
  /** Reads a single `MentorSubject` that is related to this `MentoringProg`. */
  mentorSubject?: Maybe<MentorSubject>;
  mentorSubjectId?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `PersonalDevelopmentPlan`. */
  personalDevelopmentPlansByProgId: PersonalDevelopmentPlansConnection;
  progDescription?: Maybe<Scalars['String']>;
  progEnd?: Maybe<Scalars['Date']>;
  progId: Scalars['Int'];
  progLang?: Maybe<Scalars['String']>;
  progLink?: Maybe<Scalars['String']>;
  progLocation?: Maybe<Scalars['String']>;
  progPrice?: Maybe<Scalars['Int']>;
  progStart?: Maybe<Scalars['Date']>;
  progSummary?: Maybe<Scalars['String']>;
  progTitle: Scalars['String'];
  /** Reads and enables pagination through a set of `Reservation`. */
  reservationsByProgId: ReservationsConnection;
  updatedAt?: Maybe<Scalars['Datetime']>;
};


export type MentoringProgCertificatesByProgIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CertificateCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CertificatesOrderBy>>;
};


export type MentoringProgMenteesInterestedInProgsByProgIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MenteesInterestedInProgCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MenteesInterestedInProgsOrderBy>>;
};


export type MentoringProgPersonalDevelopmentPlansByProgIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonalDevelopmentPlanCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonalDevelopmentPlansOrderBy>>;
};


export type MentoringProgReservationsByProgIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ReservationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ReservationsOrderBy>>;
};

/**
 * A condition to be used against `MentoringProg` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type MentoringProgCondition = {
  /** Checks for equality with the object’s `coordinatorId` field. */
  coordinatorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `mentorId` field. */
  mentorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `mentorSubjectId` field. */
  mentorSubjectId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `progDescription` field. */
  progDescription?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `progEnd` field. */
  progEnd?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `progId` field. */
  progId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `progLang` field. */
  progLang?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `progLink` field. */
  progLink?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `progLocation` field. */
  progLocation?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `progPrice` field. */
  progPrice?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `progStart` field. */
  progStart?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `progSummary` field. */
  progSummary?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `progTitle` field. */
  progTitle?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `MentoringProg` */
export type MentoringProgInput = {
  coordinatorId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  mentorId: Scalars['Int'];
  mentorSubjectId?: InputMaybe<Scalars['Int']>;
  progDescription?: InputMaybe<Scalars['String']>;
  progEnd?: InputMaybe<Scalars['Date']>;
  progId?: InputMaybe<Scalars['Int']>;
  progLang?: InputMaybe<Scalars['String']>;
  progLink?: InputMaybe<Scalars['String']>;
  progLocation?: InputMaybe<Scalars['String']>;
  progPrice?: InputMaybe<Scalars['Int']>;
  progStart?: InputMaybe<Scalars['Date']>;
  progSummary?: InputMaybe<Scalars['String']>;
  progTitle: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `MentoringProg`. Fields that are set will be updated. */
export type MentoringProgPatch = {
  coordinatorId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  mentorId?: InputMaybe<Scalars['Int']>;
  mentorSubjectId?: InputMaybe<Scalars['Int']>;
  progDescription?: InputMaybe<Scalars['String']>;
  progEnd?: InputMaybe<Scalars['Date']>;
  progId?: InputMaybe<Scalars['Int']>;
  progLang?: InputMaybe<Scalars['String']>;
  progLink?: InputMaybe<Scalars['String']>;
  progLocation?: InputMaybe<Scalars['String']>;
  progPrice?: InputMaybe<Scalars['Int']>;
  progStart?: InputMaybe<Scalars['Date']>;
  progSummary?: InputMaybe<Scalars['String']>;
  progTitle?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `MentoringProg` values. */
export type MentoringProgsConnection = {
  __typename?: 'MentoringProgsConnection';
  /** A list of edges which contains the `MentoringProg` and cursor to aid in pagination. */
  edges: Array<MentoringProgsEdge>;
  /** A list of `MentoringProg` objects. */
  nodes: Array<Maybe<MentoringProg>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MentoringProg` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MentoringProg` edge in the connection. */
export type MentoringProgsEdge = {
  __typename?: 'MentoringProgsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MentoringProg` at the end of the edge. */
  node?: Maybe<MentoringProg>;
};

/** Methods to use when ordering `MentoringProg`. */
export enum MentoringProgsOrderBy {
  CoordinatorIdAsc = 'COORDINATOR_ID_ASC',
  CoordinatorIdDesc = 'COORDINATOR_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  MentorIdAsc = 'MENTOR_ID_ASC',
  MentorIdDesc = 'MENTOR_ID_DESC',
  MentorSubjectIdAsc = 'MENTOR_SUBJECT_ID_ASC',
  MentorSubjectIdDesc = 'MENTOR_SUBJECT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProgDescriptionAsc = 'PROG_DESCRIPTION_ASC',
  ProgDescriptionDesc = 'PROG_DESCRIPTION_DESC',
  ProgEndAsc = 'PROG_END_ASC',
  ProgEndDesc = 'PROG_END_DESC',
  ProgIdAsc = 'PROG_ID_ASC',
  ProgIdDesc = 'PROG_ID_DESC',
  ProgLangAsc = 'PROG_LANG_ASC',
  ProgLangDesc = 'PROG_LANG_DESC',
  ProgLinkAsc = 'PROG_LINK_ASC',
  ProgLinkDesc = 'PROG_LINK_DESC',
  ProgLocationAsc = 'PROG_LOCATION_ASC',
  ProgLocationDesc = 'PROG_LOCATION_DESC',
  ProgPriceAsc = 'PROG_PRICE_ASC',
  ProgPriceDesc = 'PROG_PRICE_DESC',
  ProgStartAsc = 'PROG_START_ASC',
  ProgStartDesc = 'PROG_START_DESC',
  ProgSummaryAsc = 'PROG_SUMMARY_ASC',
  ProgSummaryDesc = 'PROG_SUMMARY_DESC',
  ProgTitleAsc = 'PROG_TITLE_ASC',
  ProgTitleDesc = 'PROG_TITLE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** A connection to a list of `Mentor` values. */
export type MentorsConnection = {
  __typename?: 'MentorsConnection';
  /** A list of edges which contains the `Mentor` and cursor to aid in pagination. */
  edges: Array<MentorsEdge>;
  /** A list of `Mentor` objects. */
  nodes: Array<Maybe<Mentor>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Mentor` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Mentor` edge in the connection. */
export type MentorsEdge = {
  __typename?: 'MentorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Mentor` at the end of the edge. */
  node?: Maybe<Mentor>;
};

/** Methods to use when ordering `Mentor`. */
export enum MentorsOrderBy {
  BriefAsc = 'BRIEF_ASC',
  BriefDesc = 'BRIEF_DESC',
  EntrepriseAsc = 'ENTREPRISE_ASC',
  EntrepriseDesc = 'ENTREPRISE_DESC',
  ExpertiseAsc = 'EXPERTISE_ASC',
  ExpertiseDesc = 'EXPERTISE_DESC',
  MentorDescriptionAsc = 'MENTOR_DESCRIPTION_ASC',
  MentorDescriptionDesc = 'MENTOR_DESCRIPTION_DESC',
  MentorIdAsc = 'MENTOR_ID_ASC',
  MentorIdDesc = 'MENTOR_ID_DESC',
  Natural = 'NATURAL',
  PreferredTypeAsc = 'PREFERRED_TYPE_ASC',
  PreferredTypeDesc = 'PREFERRED_TYPE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  VideoAsc = 'VIDEO_ASC',
  VideoDesc = 'VIDEO_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Call`. */
  createCall?: Maybe<CreateCallPayload>;
  /** Creates a single `Certificate`. */
  createCertificate?: Maybe<CreateCertificatePayload>;
  /** Creates a single `Coordinator`. */
  createCoordinator?: Maybe<CreateCoordinatorPayload>;
  /** Creates a single `CurrentJob`. */
  createCurrentJob?: Maybe<CreateCurrentJobPayload>;
  /** Creates a single `Education`. */
  createEducation?: Maybe<CreateEducationPayload>;
  /** Creates a single `Language`. */
  createLanguage?: Maybe<CreateLanguagePayload>;
  /** Creates a single `Mentee`. */
  createMentee?: Maybe<CreateMenteePayload>;
  /** Creates a single `MenteeSubject`. */
  createMenteeSubject?: Maybe<CreateMenteeSubjectPayload>;
  /** Creates a single `MenteesInterestedInProg`. */
  createMenteesInterestedInProg?: Maybe<CreateMenteesInterestedInProgPayload>;
  /** Creates a single `MenteesInterestedInWebinar`. */
  createMenteesInterestedInWebinar?: Maybe<CreateMenteesInterestedInWebinarPayload>;
  /** Creates a single `Mentor`. */
  createMentor?: Maybe<CreateMentorPayload>;
  /** Creates a single `MentorSubject`. */
  createMentorSubject?: Maybe<CreateMentorSubjectPayload>;
  /** Creates a single `MentoringProg`. */
  createMentoringProg?: Maybe<CreateMentoringProgPayload>;
  /** Creates a single `PersonalDevelopmentPlan`. */
  createPersonalDevelopmentPlan?: Maybe<CreatePersonalDevelopmentPlanPayload>;
  /** Creates a single `Reservation`. */
  createReservation?: Maybe<CreateReservationPayload>;
  /** Creates a single `Social`. */
  createSocial?: Maybe<CreateSocialPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `Webinar`. */
  createWebinar?: Maybe<CreateWebinarPayload>;
  /** Creates a single `WorkExperience`. */
  createWorkExperience?: Maybe<CreateWorkExperiencePayload>;
  /** Deletes a single `Call` using a unique key. */
  deleteCall?: Maybe<DeleteCallPayload>;
  /** Deletes a single `Call` using a unique key. */
  deleteCallByMentorId?: Maybe<DeleteCallPayload>;
  /** Deletes a single `Call` using its globally unique id. */
  deleteCallByNodeId?: Maybe<DeleteCallPayload>;
  /** Deletes a single `Certificate` using a unique key. */
  deleteCertificate?: Maybe<DeleteCertificatePayload>;
  /** Deletes a single `Certificate` using its globally unique id. */
  deleteCertificateByNodeId?: Maybe<DeleteCertificatePayload>;
  /** Deletes a single `Coordinator` using a unique key. */
  deleteCoordinator?: Maybe<DeleteCoordinatorPayload>;
  /** Deletes a single `Coordinator` using its globally unique id. */
  deleteCoordinatorByNodeId?: Maybe<DeleteCoordinatorPayload>;
  /** Deletes a single `Coordinator` using a unique key. */
  deleteCoordinatorByUserId?: Maybe<DeleteCoordinatorPayload>;
  /** Deletes a single `CurrentJob` using a unique key. */
  deleteCurrentJob?: Maybe<DeleteCurrentJobPayload>;
  /** Deletes a single `CurrentJob` using a unique key. */
  deleteCurrentJobByMenteeId?: Maybe<DeleteCurrentJobPayload>;
  /** Deletes a single `CurrentJob` using a unique key. */
  deleteCurrentJobByMentorId?: Maybe<DeleteCurrentJobPayload>;
  /** Deletes a single `CurrentJob` using its globally unique id. */
  deleteCurrentJobByNodeId?: Maybe<DeleteCurrentJobPayload>;
  /** Deletes a single `Education` using a unique key. */
  deleteEducation?: Maybe<DeleteEducationPayload>;
  /** Deletes a single `Education` using a unique key. */
  deleteEducationByMenteeId?: Maybe<DeleteEducationPayload>;
  /** Deletes a single `Education` using a unique key. */
  deleteEducationByMentorId?: Maybe<DeleteEducationPayload>;
  /** Deletes a single `Education` using its globally unique id. */
  deleteEducationByNodeId?: Maybe<DeleteEducationPayload>;
  /** Deletes a single `Language` using a unique key. */
  deleteLanguage?: Maybe<DeleteLanguagePayload>;
  /** Deletes a single `Language` using its globally unique id. */
  deleteLanguageByNodeId?: Maybe<DeleteLanguagePayload>;
  /** Deletes a single `Language` using a unique key. */
  deleteLanguageByUserId?: Maybe<DeleteLanguagePayload>;
  /** Deletes a single `Mentee` using a unique key. */
  deleteMentee?: Maybe<DeleteMenteePayload>;
  /** Deletes a single `Mentee` using its globally unique id. */
  deleteMenteeByNodeId?: Maybe<DeleteMenteePayload>;
  /** Deletes a single `Mentee` using a unique key. */
  deleteMenteeByUserId?: Maybe<DeleteMenteePayload>;
  /** Deletes a single `MenteeSubject` using a unique key. */
  deleteMenteeSubject?: Maybe<DeleteMenteeSubjectPayload>;
  /** Deletes a single `MenteeSubject` using its globally unique id. */
  deleteMenteeSubjectByNodeId?: Maybe<DeleteMenteeSubjectPayload>;
  /** Deletes a single `MenteesInterestedInProg` using a unique key. */
  deleteMenteesInterestedInProg?: Maybe<DeleteMenteesInterestedInProgPayload>;
  /** Deletes a single `MenteesInterestedInProg` using its globally unique id. */
  deleteMenteesInterestedInProgByNodeId?: Maybe<DeleteMenteesInterestedInProgPayload>;
  /** Deletes a single `MenteesInterestedInWebinar` using a unique key. */
  deleteMenteesInterestedInWebinar?: Maybe<DeleteMenteesInterestedInWebinarPayload>;
  /** Deletes a single `MenteesInterestedInWebinar` using its globally unique id. */
  deleteMenteesInterestedInWebinarByNodeId?: Maybe<DeleteMenteesInterestedInWebinarPayload>;
  /** Deletes a single `Mentor` using a unique key. */
  deleteMentor?: Maybe<DeleteMentorPayload>;
  /** Deletes a single `Mentor` using its globally unique id. */
  deleteMentorByNodeId?: Maybe<DeleteMentorPayload>;
  /** Deletes a single `Mentor` using a unique key. */
  deleteMentorByUserId?: Maybe<DeleteMentorPayload>;
  /** Deletes a single `MentorSubject` using a unique key. */
  deleteMentorSubject?: Maybe<DeleteMentorSubjectPayload>;
  /** Deletes a single `MentorSubject` using its globally unique id. */
  deleteMentorSubjectByNodeId?: Maybe<DeleteMentorSubjectPayload>;
  /** Deletes a single `MentoringProg` using a unique key. */
  deleteMentoringProg?: Maybe<DeleteMentoringProgPayload>;
  /** Deletes a single `MentoringProg` using its globally unique id. */
  deleteMentoringProgByNodeId?: Maybe<DeleteMentoringProgPayload>;
  /** Deletes a single `PersonalDevelopmentPlan` using a unique key. */
  deletePersonalDevelopmentPlan?: Maybe<DeletePersonalDevelopmentPlanPayload>;
  /** Deletes a single `PersonalDevelopmentPlan` using its globally unique id. */
  deletePersonalDevelopmentPlanByNodeId?: Maybe<DeletePersonalDevelopmentPlanPayload>;
  /** Deletes a single `Reservation` using a unique key. */
  deleteReservation?: Maybe<DeleteReservationPayload>;
  /** Deletes a single `Reservation` using its globally unique id. */
  deleteReservationByNodeId?: Maybe<DeleteReservationPayload>;
  /** Deletes a single `Social` using a unique key. */
  deleteSocial?: Maybe<DeleteSocialPayload>;
  /** Deletes a single `Social` using its globally unique id. */
  deleteSocialByNodeId?: Maybe<DeleteSocialPayload>;
  /** Deletes a single `Social` using a unique key. */
  deleteSocialByUserId?: Maybe<DeleteSocialPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByEmail?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUserByNodeId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByProfileImage?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUsername?: Maybe<DeleteUserPayload>;
  /** Deletes a single `Webinar` using a unique key. */
  deleteWebinar?: Maybe<DeleteWebinarPayload>;
  /** Deletes a single `Webinar` using its globally unique id. */
  deleteWebinarByNodeId?: Maybe<DeleteWebinarPayload>;
  /** Deletes a single `WorkExperience` using a unique key. */
  deleteWorkExperience?: Maybe<DeleteWorkExperiencePayload>;
  /** Deletes a single `WorkExperience` using a unique key. */
  deleteWorkExperienceByMentorId?: Maybe<DeleteWorkExperiencePayload>;
  /** Deletes a single `WorkExperience` using its globally unique id. */
  deleteWorkExperienceByNodeId?: Maybe<DeleteWorkExperiencePayload>;
  /** Updates a single `Call` using a unique key and a patch. */
  updateCall?: Maybe<UpdateCallPayload>;
  /** Updates a single `Call` using a unique key and a patch. */
  updateCallByMentorId?: Maybe<UpdateCallPayload>;
  /** Updates a single `Call` using its globally unique id and a patch. */
  updateCallByNodeId?: Maybe<UpdateCallPayload>;
  /** Updates a single `Certificate` using a unique key and a patch. */
  updateCertificate?: Maybe<UpdateCertificatePayload>;
  /** Updates a single `Certificate` using its globally unique id and a patch. */
  updateCertificateByNodeId?: Maybe<UpdateCertificatePayload>;
  /** Updates a single `Coordinator` using a unique key and a patch. */
  updateCoordinator?: Maybe<UpdateCoordinatorPayload>;
  /** Updates a single `Coordinator` using its globally unique id and a patch. */
  updateCoordinatorByNodeId?: Maybe<UpdateCoordinatorPayload>;
  /** Updates a single `Coordinator` using a unique key and a patch. */
  updateCoordinatorByUserId?: Maybe<UpdateCoordinatorPayload>;
  /** Updates a single `CurrentJob` using a unique key and a patch. */
  updateCurrentJob?: Maybe<UpdateCurrentJobPayload>;
  /** Updates a single `CurrentJob` using a unique key and a patch. */
  updateCurrentJobByMenteeId?: Maybe<UpdateCurrentJobPayload>;
  /** Updates a single `CurrentJob` using a unique key and a patch. */
  updateCurrentJobByMentorId?: Maybe<UpdateCurrentJobPayload>;
  /** Updates a single `CurrentJob` using its globally unique id and a patch. */
  updateCurrentJobByNodeId?: Maybe<UpdateCurrentJobPayload>;
  /** Updates a single `Education` using a unique key and a patch. */
  updateEducation?: Maybe<UpdateEducationPayload>;
  /** Updates a single `Education` using a unique key and a patch. */
  updateEducationByMenteeId?: Maybe<UpdateEducationPayload>;
  /** Updates a single `Education` using a unique key and a patch. */
  updateEducationByMentorId?: Maybe<UpdateEducationPayload>;
  /** Updates a single `Education` using its globally unique id and a patch. */
  updateEducationByNodeId?: Maybe<UpdateEducationPayload>;
  /** Updates a single `Language` using a unique key and a patch. */
  updateLanguage?: Maybe<UpdateLanguagePayload>;
  /** Updates a single `Language` using its globally unique id and a patch. */
  updateLanguageByNodeId?: Maybe<UpdateLanguagePayload>;
  /** Updates a single `Language` using a unique key and a patch. */
  updateLanguageByUserId?: Maybe<UpdateLanguagePayload>;
  /** Updates a single `Mentee` using a unique key and a patch. */
  updateMentee?: Maybe<UpdateMenteePayload>;
  /** Updates a single `Mentee` using its globally unique id and a patch. */
  updateMenteeByNodeId?: Maybe<UpdateMenteePayload>;
  /** Updates a single `Mentee` using a unique key and a patch. */
  updateMenteeByUserId?: Maybe<UpdateMenteePayload>;
  /** Updates a single `MenteeSubject` using a unique key and a patch. */
  updateMenteeSubject?: Maybe<UpdateMenteeSubjectPayload>;
  /** Updates a single `MenteeSubject` using its globally unique id and a patch. */
  updateMenteeSubjectByNodeId?: Maybe<UpdateMenteeSubjectPayload>;
  /** Updates a single `MenteesInterestedInProg` using a unique key and a patch. */
  updateMenteesInterestedInProg?: Maybe<UpdateMenteesInterestedInProgPayload>;
  /** Updates a single `MenteesInterestedInProg` using its globally unique id and a patch. */
  updateMenteesInterestedInProgByNodeId?: Maybe<UpdateMenteesInterestedInProgPayload>;
  /** Updates a single `MenteesInterestedInWebinar` using a unique key and a patch. */
  updateMenteesInterestedInWebinar?: Maybe<UpdateMenteesInterestedInWebinarPayload>;
  /** Updates a single `MenteesInterestedInWebinar` using its globally unique id and a patch. */
  updateMenteesInterestedInWebinarByNodeId?: Maybe<UpdateMenteesInterestedInWebinarPayload>;
  /** Updates a single `Mentor` using a unique key and a patch. */
  updateMentor?: Maybe<UpdateMentorPayload>;
  /** Updates a single `Mentor` using its globally unique id and a patch. */
  updateMentorByNodeId?: Maybe<UpdateMentorPayload>;
  /** Updates a single `Mentor` using a unique key and a patch. */
  updateMentorByUserId?: Maybe<UpdateMentorPayload>;
  /** Updates a single `MentorSubject` using a unique key and a patch. */
  updateMentorSubject?: Maybe<UpdateMentorSubjectPayload>;
  /** Updates a single `MentorSubject` using its globally unique id and a patch. */
  updateMentorSubjectByNodeId?: Maybe<UpdateMentorSubjectPayload>;
  /** Updates a single `MentoringProg` using a unique key and a patch. */
  updateMentoringProg?: Maybe<UpdateMentoringProgPayload>;
  /** Updates a single `MentoringProg` using its globally unique id and a patch. */
  updateMentoringProgByNodeId?: Maybe<UpdateMentoringProgPayload>;
  /** Updates a single `PersonalDevelopmentPlan` using a unique key and a patch. */
  updatePersonalDevelopmentPlan?: Maybe<UpdatePersonalDevelopmentPlanPayload>;
  /** Updates a single `PersonalDevelopmentPlan` using its globally unique id and a patch. */
  updatePersonalDevelopmentPlanByNodeId?: Maybe<UpdatePersonalDevelopmentPlanPayload>;
  /** Updates a single `Reservation` using a unique key and a patch. */
  updateReservation?: Maybe<UpdateReservationPayload>;
  /** Updates a single `Reservation` using its globally unique id and a patch. */
  updateReservationByNodeId?: Maybe<UpdateReservationPayload>;
  /** Updates a single `Social` using a unique key and a patch. */
  updateSocial?: Maybe<UpdateSocialPayload>;
  /** Updates a single `Social` using its globally unique id and a patch. */
  updateSocialByNodeId?: Maybe<UpdateSocialPayload>;
  /** Updates a single `Social` using a unique key and a patch. */
  updateSocialByUserId?: Maybe<UpdateSocialPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByEmail?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUserByNodeId?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByProfileImage?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUsername?: Maybe<UpdateUserPayload>;
  /** Updates a single `Webinar` using a unique key and a patch. */
  updateWebinar?: Maybe<UpdateWebinarPayload>;
  /** Updates a single `Webinar` using its globally unique id and a patch. */
  updateWebinarByNodeId?: Maybe<UpdateWebinarPayload>;
  /** Updates a single `WorkExperience` using a unique key and a patch. */
  updateWorkExperience?: Maybe<UpdateWorkExperiencePayload>;
  /** Updates a single `WorkExperience` using a unique key and a patch. */
  updateWorkExperienceByMentorId?: Maybe<UpdateWorkExperiencePayload>;
  /** Updates a single `WorkExperience` using its globally unique id and a patch. */
  updateWorkExperienceByNodeId?: Maybe<UpdateWorkExperiencePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCallArgs = {
  input: CreateCallInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCertificateArgs = {
  input: CreateCertificateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCoordinatorArgs = {
  input: CreateCoordinatorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCurrentJobArgs = {
  input: CreateCurrentJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEducationArgs = {
  input: CreateEducationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLanguageArgs = {
  input: CreateLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMenteeArgs = {
  input: CreateMenteeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMenteeSubjectArgs = {
  input: CreateMenteeSubjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMenteesInterestedInProgArgs = {
  input: CreateMenteesInterestedInProgInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMenteesInterestedInWebinarArgs = {
  input: CreateMenteesInterestedInWebinarInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMentorArgs = {
  input: CreateMentorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMentorSubjectArgs = {
  input: CreateMentorSubjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMentoringProgArgs = {
  input: CreateMentoringProgInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePersonalDevelopmentPlanArgs = {
  input: CreatePersonalDevelopmentPlanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateReservationArgs = {
  input: CreateReservationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSocialArgs = {
  input: CreateSocialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateWebinarArgs = {
  input: CreateWebinarInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateWorkExperienceArgs = {
  input: CreateWorkExperienceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCallArgs = {
  input: DeleteCallInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCallByMentorIdArgs = {
  input: DeleteCallByMentorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCallByNodeIdArgs = {
  input: DeleteCallByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCertificateArgs = {
  input: DeleteCertificateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCertificateByNodeIdArgs = {
  input: DeleteCertificateByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCoordinatorArgs = {
  input: DeleteCoordinatorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCoordinatorByNodeIdArgs = {
  input: DeleteCoordinatorByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCoordinatorByUserIdArgs = {
  input: DeleteCoordinatorByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCurrentJobArgs = {
  input: DeleteCurrentJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCurrentJobByMenteeIdArgs = {
  input: DeleteCurrentJobByMenteeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCurrentJobByMentorIdArgs = {
  input: DeleteCurrentJobByMentorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCurrentJobByNodeIdArgs = {
  input: DeleteCurrentJobByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEducationArgs = {
  input: DeleteEducationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEducationByMenteeIdArgs = {
  input: DeleteEducationByMenteeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEducationByMentorIdArgs = {
  input: DeleteEducationByMentorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEducationByNodeIdArgs = {
  input: DeleteEducationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLanguageArgs = {
  input: DeleteLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLanguageByNodeIdArgs = {
  input: DeleteLanguageByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLanguageByUserIdArgs = {
  input: DeleteLanguageByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMenteeArgs = {
  input: DeleteMenteeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMenteeByNodeIdArgs = {
  input: DeleteMenteeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMenteeByUserIdArgs = {
  input: DeleteMenteeByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMenteeSubjectArgs = {
  input: DeleteMenteeSubjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMenteeSubjectByNodeIdArgs = {
  input: DeleteMenteeSubjectByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMenteesInterestedInProgArgs = {
  input: DeleteMenteesInterestedInProgInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMenteesInterestedInProgByNodeIdArgs = {
  input: DeleteMenteesInterestedInProgByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMenteesInterestedInWebinarArgs = {
  input: DeleteMenteesInterestedInWebinarInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMenteesInterestedInWebinarByNodeIdArgs = {
  input: DeleteMenteesInterestedInWebinarByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMentorArgs = {
  input: DeleteMentorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMentorByNodeIdArgs = {
  input: DeleteMentorByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMentorByUserIdArgs = {
  input: DeleteMentorByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMentorSubjectArgs = {
  input: DeleteMentorSubjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMentorSubjectByNodeIdArgs = {
  input: DeleteMentorSubjectByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMentoringProgArgs = {
  input: DeleteMentoringProgInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMentoringProgByNodeIdArgs = {
  input: DeleteMentoringProgByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonalDevelopmentPlanArgs = {
  input: DeletePersonalDevelopmentPlanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonalDevelopmentPlanByNodeIdArgs = {
  input: DeletePersonalDevelopmentPlanByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteReservationArgs = {
  input: DeleteReservationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteReservationByNodeIdArgs = {
  input: DeleteReservationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSocialArgs = {
  input: DeleteSocialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSocialByNodeIdArgs = {
  input: DeleteSocialByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSocialByUserIdArgs = {
  input: DeleteSocialByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByEmailArgs = {
  input: DeleteUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByNodeIdArgs = {
  input: DeleteUserByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByProfileImageArgs = {
  input: DeleteUserByProfileImageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUsernameArgs = {
  input: DeleteUserByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWebinarArgs = {
  input: DeleteWebinarInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWebinarByNodeIdArgs = {
  input: DeleteWebinarByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWorkExperienceArgs = {
  input: DeleteWorkExperienceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWorkExperienceByMentorIdArgs = {
  input: DeleteWorkExperienceByMentorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWorkExperienceByNodeIdArgs = {
  input: DeleteWorkExperienceByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCallArgs = {
  input: UpdateCallInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCallByMentorIdArgs = {
  input: UpdateCallByMentorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCallByNodeIdArgs = {
  input: UpdateCallByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCertificateArgs = {
  input: UpdateCertificateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCertificateByNodeIdArgs = {
  input: UpdateCertificateByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCoordinatorArgs = {
  input: UpdateCoordinatorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCoordinatorByNodeIdArgs = {
  input: UpdateCoordinatorByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCoordinatorByUserIdArgs = {
  input: UpdateCoordinatorByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCurrentJobArgs = {
  input: UpdateCurrentJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCurrentJobByMenteeIdArgs = {
  input: UpdateCurrentJobByMenteeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCurrentJobByMentorIdArgs = {
  input: UpdateCurrentJobByMentorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCurrentJobByNodeIdArgs = {
  input: UpdateCurrentJobByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEducationArgs = {
  input: UpdateEducationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEducationByMenteeIdArgs = {
  input: UpdateEducationByMenteeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEducationByMentorIdArgs = {
  input: UpdateEducationByMentorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEducationByNodeIdArgs = {
  input: UpdateEducationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLanguageArgs = {
  input: UpdateLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLanguageByNodeIdArgs = {
  input: UpdateLanguageByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLanguageByUserIdArgs = {
  input: UpdateLanguageByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMenteeArgs = {
  input: UpdateMenteeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMenteeByNodeIdArgs = {
  input: UpdateMenteeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMenteeByUserIdArgs = {
  input: UpdateMenteeByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMenteeSubjectArgs = {
  input: UpdateMenteeSubjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMenteeSubjectByNodeIdArgs = {
  input: UpdateMenteeSubjectByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMenteesInterestedInProgArgs = {
  input: UpdateMenteesInterestedInProgInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMenteesInterestedInProgByNodeIdArgs = {
  input: UpdateMenteesInterestedInProgByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMenteesInterestedInWebinarArgs = {
  input: UpdateMenteesInterestedInWebinarInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMenteesInterestedInWebinarByNodeIdArgs = {
  input: UpdateMenteesInterestedInWebinarByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMentorArgs = {
  input: UpdateMentorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMentorByNodeIdArgs = {
  input: UpdateMentorByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMentorByUserIdArgs = {
  input: UpdateMentorByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMentorSubjectArgs = {
  input: UpdateMentorSubjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMentorSubjectByNodeIdArgs = {
  input: UpdateMentorSubjectByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMentoringProgArgs = {
  input: UpdateMentoringProgInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMentoringProgByNodeIdArgs = {
  input: UpdateMentoringProgByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonalDevelopmentPlanArgs = {
  input: UpdatePersonalDevelopmentPlanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonalDevelopmentPlanByNodeIdArgs = {
  input: UpdatePersonalDevelopmentPlanByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateReservationArgs = {
  input: UpdateReservationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateReservationByNodeIdArgs = {
  input: UpdateReservationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSocialArgs = {
  input: UpdateSocialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSocialByNodeIdArgs = {
  input: UpdateSocialByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSocialByUserIdArgs = {
  input: UpdateSocialByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByEmailArgs = {
  input: UpdateUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByNodeIdArgs = {
  input: UpdateUserByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByProfileImageArgs = {
  input: UpdateUserByProfileImageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUsernameArgs = {
  input: UpdateUserByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWebinarArgs = {
  input: UpdateWebinarInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWebinarByNodeIdArgs = {
  input: UpdateWebinarByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWorkExperienceArgs = {
  input: UpdateWorkExperienceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWorkExperienceByMentorIdArgs = {
  input: UpdateWorkExperienceByMentorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWorkExperienceByNodeIdArgs = {
  input: UpdateWorkExperienceByNodeIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type PersonalDevelopmentPlan = Node & {
  __typename?: 'PersonalDevelopmentPlan';
  /** Reads a single `Mentee` that is related to this `PersonalDevelopmentPlan`. */
  mentee?: Maybe<Mentee>;
  menteeId: Scalars['Int'];
  /** Reads a single `Mentor` that is related to this `PersonalDevelopmentPlan`. */
  mentor?: Maybe<Mentor>;
  mentorId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  pdpId: Scalars['Int'];
  pdpTitle: Scalars['String'];
  /** Reads a single `MentoringProg` that is related to this `PersonalDevelopmentPlan`. */
  prog?: Maybe<MentoringProg>;
  progId: Scalars['Int'];
};

/**
 * A condition to be used against `PersonalDevelopmentPlan` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type PersonalDevelopmentPlanCondition = {
  /** Checks for equality with the object’s `menteeId` field. */
  menteeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `mentorId` field. */
  mentorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `pdpId` field. */
  pdpId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `pdpTitle` field. */
  pdpTitle?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `progId` field. */
  progId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `PersonalDevelopmentPlan` */
export type PersonalDevelopmentPlanInput = {
  menteeId: Scalars['Int'];
  mentorId: Scalars['Int'];
  pdpId?: InputMaybe<Scalars['Int']>;
  pdpTitle: Scalars['String'];
  progId: Scalars['Int'];
};

/** Represents an update to a `PersonalDevelopmentPlan`. Fields that are set will be updated. */
export type PersonalDevelopmentPlanPatch = {
  menteeId?: InputMaybe<Scalars['Int']>;
  mentorId?: InputMaybe<Scalars['Int']>;
  pdpId?: InputMaybe<Scalars['Int']>;
  pdpTitle?: InputMaybe<Scalars['String']>;
  progId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `PersonalDevelopmentPlan` values. */
export type PersonalDevelopmentPlansConnection = {
  __typename?: 'PersonalDevelopmentPlansConnection';
  /** A list of edges which contains the `PersonalDevelopmentPlan` and cursor to aid in pagination. */
  edges: Array<PersonalDevelopmentPlansEdge>;
  /** A list of `PersonalDevelopmentPlan` objects. */
  nodes: Array<Maybe<PersonalDevelopmentPlan>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PersonalDevelopmentPlan` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PersonalDevelopmentPlan` edge in the connection. */
export type PersonalDevelopmentPlansEdge = {
  __typename?: 'PersonalDevelopmentPlansEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PersonalDevelopmentPlan` at the end of the edge. */
  node?: Maybe<PersonalDevelopmentPlan>;
};

/** Methods to use when ordering `PersonalDevelopmentPlan`. */
export enum PersonalDevelopmentPlansOrderBy {
  MenteeIdAsc = 'MENTEE_ID_ASC',
  MenteeIdDesc = 'MENTEE_ID_DESC',
  MentorIdAsc = 'MENTOR_ID_ASC',
  MentorIdDesc = 'MENTOR_ID_DESC',
  Natural = 'NATURAL',
  PdpIdAsc = 'PDP_ID_ASC',
  PdpIdDesc = 'PDP_ID_DESC',
  PdpTitleAsc = 'PDP_TITLE_ASC',
  PdpTitleDesc = 'PDP_TITLE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProgIdAsc = 'PROG_ID_ASC',
  ProgIdDesc = 'PROG_ID_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  call?: Maybe<Call>;
  callByMentorId?: Maybe<Call>;
  /** Reads a single `Call` using its globally unique `ID`. */
  callByNodeId?: Maybe<Call>;
  /** Reads and enables pagination through a set of `Call`. */
  calls?: Maybe<CallsConnection>;
  certificate?: Maybe<Certificate>;
  /** Reads a single `Certificate` using its globally unique `ID`. */
  certificateByNodeId?: Maybe<Certificate>;
  /** Reads and enables pagination through a set of `Certificate`. */
  certificates?: Maybe<CertificatesConnection>;
  coordinator?: Maybe<Coordinator>;
  /** Reads a single `Coordinator` using its globally unique `ID`. */
  coordinatorByNodeId?: Maybe<Coordinator>;
  coordinatorByUserId?: Maybe<Coordinator>;
  /** Reads and enables pagination through a set of `Coordinator`. */
  coordinators?: Maybe<CoordinatorsConnection>;
  currentJob?: Maybe<CurrentJob>;
  currentJobByMenteeId?: Maybe<CurrentJob>;
  currentJobByMentorId?: Maybe<CurrentJob>;
  /** Reads a single `CurrentJob` using its globally unique `ID`. */
  currentJobByNodeId?: Maybe<CurrentJob>;
  /** Reads and enables pagination through a set of `CurrentJob`. */
  currentJobs?: Maybe<CurrentJobsConnection>;
  education?: Maybe<Education>;
  educationByMenteeId?: Maybe<Education>;
  educationByMentorId?: Maybe<Education>;
  /** Reads a single `Education` using its globally unique `ID`. */
  educationByNodeId?: Maybe<Education>;
  /** Reads and enables pagination through a set of `Education`. */
  educations?: Maybe<EducationsConnection>;
  language?: Maybe<Language>;
  /** Reads a single `Language` using its globally unique `ID`. */
  languageByNodeId?: Maybe<Language>;
  languageByUserId?: Maybe<Language>;
  /** Reads and enables pagination through a set of `Language`. */
  languages?: Maybe<LanguagesConnection>;
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentee` using its globally unique `ID`. */
  menteeByNodeId?: Maybe<Mentee>;
  menteeByUserId?: Maybe<Mentee>;
  menteeSubject?: Maybe<MenteeSubject>;
  /** Reads a single `MenteeSubject` using its globally unique `ID`. */
  menteeSubjectByNodeId?: Maybe<MenteeSubject>;
  /** Reads and enables pagination through a set of `MenteeSubject`. */
  menteeSubjects?: Maybe<MenteeSubjectsConnection>;
  /** Reads and enables pagination through a set of `Mentee`. */
  mentees?: Maybe<MenteesConnection>;
  menteesInterestedInProg?: Maybe<MenteesInterestedInProg>;
  /** Reads a single `MenteesInterestedInProg` using its globally unique `ID`. */
  menteesInterestedInProgByNodeId?: Maybe<MenteesInterestedInProg>;
  /** Reads and enables pagination through a set of `MenteesInterestedInProg`. */
  menteesInterestedInProgs?: Maybe<MenteesInterestedInProgsConnection>;
  menteesInterestedInWebinar?: Maybe<MenteesInterestedInWebinar>;
  /** Reads a single `MenteesInterestedInWebinar` using its globally unique `ID`. */
  menteesInterestedInWebinarByNodeId?: Maybe<MenteesInterestedInWebinar>;
  /** Reads and enables pagination through a set of `MenteesInterestedInWebinar`. */
  menteesInterestedInWebinars?: Maybe<MenteesInterestedInWebinarsConnection>;
  mentor?: Maybe<Mentor>;
  /** Reads a single `Mentor` using its globally unique `ID`. */
  mentorByNodeId?: Maybe<Mentor>;
  mentorByUserId?: Maybe<Mentor>;
  mentorSubject?: Maybe<MentorSubject>;
  /** Reads a single `MentorSubject` using its globally unique `ID`. */
  mentorSubjectByNodeId?: Maybe<MentorSubject>;
  /** Reads and enables pagination through a set of `MentorSubject`. */
  mentorSubjects?: Maybe<MentorSubjectsConnection>;
  mentoringProg?: Maybe<MentoringProg>;
  /** Reads a single `MentoringProg` using its globally unique `ID`. */
  mentoringProgByNodeId?: Maybe<MentoringProg>;
  /** Reads and enables pagination through a set of `MentoringProg`. */
  mentoringProgs?: Maybe<MentoringProgsConnection>;
  /** Reads and enables pagination through a set of `Mentor`. */
  mentors?: Maybe<MentorsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  personalDevelopmentPlan?: Maybe<PersonalDevelopmentPlan>;
  /** Reads a single `PersonalDevelopmentPlan` using its globally unique `ID`. */
  personalDevelopmentPlanByNodeId?: Maybe<PersonalDevelopmentPlan>;
  /** Reads and enables pagination through a set of `PersonalDevelopmentPlan`. */
  personalDevelopmentPlans?: Maybe<PersonalDevelopmentPlansConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  reservation?: Maybe<Reservation>;
  /** Reads a single `Reservation` using its globally unique `ID`. */
  reservationByNodeId?: Maybe<Reservation>;
  /** Reads and enables pagination through a set of `Reservation`. */
  reservations?: Maybe<ReservationsConnection>;
  social?: Maybe<Social>;
  /** Reads a single `Social` using its globally unique `ID`. */
  socialByNodeId?: Maybe<Social>;
  socialByUserId?: Maybe<Social>;
  /** Reads and enables pagination through a set of `Social`. */
  socials?: Maybe<SocialsConnection>;
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  /** Reads a single `User` using its globally unique `ID`. */
  userByNodeId?: Maybe<User>;
  userByProfileImage?: Maybe<User>;
  userByUsername?: Maybe<User>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
  webinar?: Maybe<Webinar>;
  /** Reads a single `Webinar` using its globally unique `ID`. */
  webinarByNodeId?: Maybe<Webinar>;
  /** Reads and enables pagination through a set of `Webinar`. */
  webinars?: Maybe<WebinarsConnection>;
  workExperience?: Maybe<WorkExperience>;
  workExperienceByMentorId?: Maybe<WorkExperience>;
  /** Reads a single `WorkExperience` using its globally unique `ID`. */
  workExperienceByNodeId?: Maybe<WorkExperience>;
  /** Reads and enables pagination through a set of `WorkExperience`. */
  workExperiences?: Maybe<WorkExperiencesConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCallArgs = {
  callId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCallByMentorIdArgs = {
  mentorId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCallByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCallsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CallCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CallsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCertificateArgs = {
  certificatesId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCertificateByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCertificatesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CertificateCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CertificatesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCoordinatorArgs = {
  coordinatorId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCoordinatorByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCoordinatorByUserIdArgs = {
  userId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCoordinatorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CoordinatorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CoordinatorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCurrentJobArgs = {
  currentJobId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCurrentJobByMenteeIdArgs = {
  menteeId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCurrentJobByMentorIdArgs = {
  mentorId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCurrentJobByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCurrentJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CurrentJobCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CurrentJobsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEducationArgs = {
  educationId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEducationByMenteeIdArgs = {
  menteeId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEducationByMentorIdArgs = {
  mentorId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEducationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEducationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<EducationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EducationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguageArgs = {
  languageId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguageByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguageByUserIdArgs = {
  userId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguagesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<LanguageCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteeArgs = {
  menteeId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteeByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteeByUserIdArgs = {
  userId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteeSubjectArgs = {
  menteeSubjectId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteeSubjectByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteeSubjectsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MenteeSubjectCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MenteeSubjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MenteeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MenteesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteesInterestedInProgArgs = {
  interestedId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteesInterestedInProgByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteesInterestedInProgsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MenteesInterestedInProgCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MenteesInterestedInProgsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteesInterestedInWebinarArgs = {
  interestedId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteesInterestedInWebinarByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMenteesInterestedInWebinarsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MenteesInterestedInWebinarCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MenteesInterestedInWebinarsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMentorArgs = {
  mentorId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMentorByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMentorByUserIdArgs = {
  userId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMentorSubjectArgs = {
  mentorSubjectId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMentorSubjectByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMentorSubjectsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MentorSubjectCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MentorSubjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMentoringProgArgs = {
  progId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMentoringProgByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMentoringProgsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MentoringProgCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MentoringProgsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMentorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MentorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MentorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonalDevelopmentPlanArgs = {
  pdpId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonalDevelopmentPlanByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonalDevelopmentPlansArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonalDevelopmentPlanCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonalDevelopmentPlansOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryReservationArgs = {
  reservationId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryReservationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryReservationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ReservationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ReservationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySocialArgs = {
  socialsId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySocialByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySocialByUserIdArgs = {
  userId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySocialsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SocialCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SocialsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  userId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByProfileImageArgs = {
  profileImage: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryWebinarArgs = {
  webinarId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWebinarByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWebinarsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<WebinarCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WebinarsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryWorkExperienceArgs = {
  workExpId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWorkExperienceByMentorIdArgs = {
  mentorId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWorkExperienceByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWorkExperiencesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<WorkExperienceCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkExperiencesOrderBy>>;
};

export type Reservation = Node & {
  __typename?: 'Reservation';
  createdAt?: Maybe<Scalars['Datetime']>;
  endDate?: Maybe<Scalars['Date']>;
  /** Reads a single `Mentee` that is related to this `Reservation`. */
  mentee?: Maybe<Mentee>;
  menteeId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  paymentPlan?: Maybe<Scalars['String']>;
  /** Reads a single `MentoringProg` that is related to this `Reservation`. */
  prog?: Maybe<MentoringProg>;
  progId: Scalars['Int'];
  reservationId: Scalars['Int'];
  reservationPrice?: Maybe<Scalars['Int']>;
  startDate: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
};

/**
 * A condition to be used against `Reservation` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ReservationCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `endDate` field. */
  endDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `menteeId` field. */
  menteeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `paymentPlan` field. */
  paymentPlan?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `progId` field. */
  progId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `reservationId` field. */
  reservationId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `reservationPrice` field. */
  reservationPrice?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `startDate` field. */
  startDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Date']>;
};

/** An input for mutations affecting `Reservation` */
export type ReservationInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  endDate?: InputMaybe<Scalars['Date']>;
  menteeId: Scalars['Int'];
  paymentPlan?: InputMaybe<Scalars['String']>;
  progId: Scalars['Int'];
  reservationId?: InputMaybe<Scalars['Int']>;
  reservationPrice?: InputMaybe<Scalars['Int']>;
  startDate: Scalars['Date'];
  updatedAt?: InputMaybe<Scalars['Date']>;
};

/** Represents an update to a `Reservation`. Fields that are set will be updated. */
export type ReservationPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  endDate?: InputMaybe<Scalars['Date']>;
  menteeId?: InputMaybe<Scalars['Int']>;
  paymentPlan?: InputMaybe<Scalars['String']>;
  progId?: InputMaybe<Scalars['Int']>;
  reservationId?: InputMaybe<Scalars['Int']>;
  reservationPrice?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['Date']>;
  updatedAt?: InputMaybe<Scalars['Date']>;
};

/** A connection to a list of `Reservation` values. */
export type ReservationsConnection = {
  __typename?: 'ReservationsConnection';
  /** A list of edges which contains the `Reservation` and cursor to aid in pagination. */
  edges: Array<ReservationsEdge>;
  /** A list of `Reservation` objects. */
  nodes: Array<Maybe<Reservation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Reservation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Reservation` edge in the connection. */
export type ReservationsEdge = {
  __typename?: 'ReservationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Reservation` at the end of the edge. */
  node?: Maybe<Reservation>;
};

/** Methods to use when ordering `Reservation`. */
export enum ReservationsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EndDateAsc = 'END_DATE_ASC',
  EndDateDesc = 'END_DATE_DESC',
  MenteeIdAsc = 'MENTEE_ID_ASC',
  MenteeIdDesc = 'MENTEE_ID_DESC',
  Natural = 'NATURAL',
  PaymentPlanAsc = 'PAYMENT_PLAN_ASC',
  PaymentPlanDesc = 'PAYMENT_PLAN_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProgIdAsc = 'PROG_ID_ASC',
  ProgIdDesc = 'PROG_ID_DESC',
  ReservationIdAsc = 'RESERVATION_ID_ASC',
  ReservationIdDesc = 'RESERVATION_ID_DESC',
  ReservationPriceAsc = 'RESERVATION_PRICE_ASC',
  ReservationPriceDesc = 'RESERVATION_PRICE_DESC',
  StartDateAsc = 'START_DATE_ASC',
  StartDateDesc = 'START_DATE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type Social = Node & {
  __typename?: 'Social';
  discord?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  notion?: Maybe<Scalars['String']>;
  socialsId: Scalars['Int'];
  /** Reads a single `User` that is related to this `Social`. */
  user?: Maybe<User>;
  userId: Scalars['UUID'];
};

/** A condition to be used against `Social` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SocialCondition = {
  /** Checks for equality with the object’s `discord` field. */
  discord?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `google` field. */
  google?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `linkedin` field. */
  linkedin?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `notion` field. */
  notion?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `socialsId` field. */
  socialsId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Social` */
export type SocialInput = {
  discord?: InputMaybe<Scalars['String']>;
  google?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  notion?: InputMaybe<Scalars['String']>;
  socialsId?: InputMaybe<Scalars['Int']>;
  userId: Scalars['UUID'];
};

/** Represents an update to a `Social`. Fields that are set will be updated. */
export type SocialPatch = {
  discord?: InputMaybe<Scalars['String']>;
  google?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  notion?: InputMaybe<Scalars['String']>;
  socialsId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `Social` values. */
export type SocialsConnection = {
  __typename?: 'SocialsConnection';
  /** A list of edges which contains the `Social` and cursor to aid in pagination. */
  edges: Array<SocialsEdge>;
  /** A list of `Social` objects. */
  nodes: Array<Maybe<Social>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Social` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Social` edge in the connection. */
export type SocialsEdge = {
  __typename?: 'SocialsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Social` at the end of the edge. */
  node?: Maybe<Social>;
};

/** Methods to use when ordering `Social`. */
export enum SocialsOrderBy {
  DiscordAsc = 'DISCORD_ASC',
  DiscordDesc = 'DISCORD_DESC',
  GoogleAsc = 'GOOGLE_ASC',
  GoogleDesc = 'GOOGLE_DESC',
  LinkedinAsc = 'LINKEDIN_ASC',
  LinkedinDesc = 'LINKEDIN_DESC',
  Natural = 'NATURAL',
  NotionAsc = 'NOTION_ASC',
  NotionDesc = 'NOTION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SocialsIdAsc = 'SOCIALS_ID_ASC',
  SocialsIdDesc = 'SOCIALS_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** All input for the `updateCallByMentorId` mutation. */
export type UpdateCallByMentorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Call` being updated. */
  patch: CallPatch;
};

/** All input for the `updateCallByNodeId` mutation. */
export type UpdateCallByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Call` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Call` being updated. */
  patch: CallPatch;
};

/** All input for the `updateCall` mutation. */
export type UpdateCallInput = {
  callId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Call` being updated. */
  patch: CallPatch;
};

/** The output of our update `Call` mutation. */
export type UpdateCallPayload = {
  __typename?: 'UpdateCallPayload';
  /** The `Call` that was updated by this mutation. */
  call?: Maybe<Call>;
  /** An edge for our `Call`. May be used by Relay 1. */
  callEdge?: Maybe<CallsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentor` that is related to this `Call`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Call` mutation. */
export type UpdateCallPayloadCallEdgeArgs = {
  orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

/** All input for the `updateCertificateByNodeId` mutation. */
export type UpdateCertificateByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Certificate` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Certificate` being updated. */
  patch: CertificatePatch;
};

/** All input for the `updateCertificate` mutation. */
export type UpdateCertificateInput = {
  certificatesId: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Certificate` being updated. */
  patch: CertificatePatch;
};

/** The output of our update `Certificate` mutation. */
export type UpdateCertificatePayload = {
  __typename?: 'UpdateCertificatePayload';
  /** The `Certificate` that was updated by this mutation. */
  certificate?: Maybe<Certificate>;
  /** An edge for our `Certificate`. May be used by Relay 1. */
  certificateEdge?: Maybe<CertificatesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `Certificate`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `Certificate`. */
  mentor?: Maybe<Mentor>;
  /** Reads a single `MentoringProg` that is related to this `Certificate`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Certificate` mutation. */
export type UpdateCertificatePayloadCertificateEdgeArgs = {
  orderBy?: InputMaybe<Array<CertificatesOrderBy>>;
};

/** All input for the `updateCoordinatorByNodeId` mutation. */
export type UpdateCoordinatorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Coordinator` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Coordinator` being updated. */
  patch: CoordinatorPatch;
};

/** All input for the `updateCoordinatorByUserId` mutation. */
export type UpdateCoordinatorByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Coordinator` being updated. */
  patch: CoordinatorPatch;
  userId: Scalars['UUID'];
};

/** All input for the `updateCoordinator` mutation. */
export type UpdateCoordinatorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  coordinatorId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Coordinator` being updated. */
  patch: CoordinatorPatch;
};

/** The output of our update `Coordinator` mutation. */
export type UpdateCoordinatorPayload = {
  __typename?: 'UpdateCoordinatorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Coordinator` that was updated by this mutation. */
  coordinator?: Maybe<Coordinator>;
  /** An edge for our `Coordinator`. May be used by Relay 1. */
  coordinatorEdge?: Maybe<CoordinatorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Coordinator`. */
  user?: Maybe<User>;
};


/** The output of our update `Coordinator` mutation. */
export type UpdateCoordinatorPayloadCoordinatorEdgeArgs = {
  orderBy?: InputMaybe<Array<CoordinatorsOrderBy>>;
};

/** All input for the `updateCurrentJobByMenteeId` mutation. */
export type UpdateCurrentJobByMenteeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  menteeId: Scalars['Int'];
  /** An object where the defined keys will be set on the `CurrentJob` being updated. */
  patch: CurrentJobPatch;
};

/** All input for the `updateCurrentJobByMentorId` mutation. */
export type UpdateCurrentJobByMentorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
  /** An object where the defined keys will be set on the `CurrentJob` being updated. */
  patch: CurrentJobPatch;
};

/** All input for the `updateCurrentJobByNodeId` mutation. */
export type UpdateCurrentJobByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CurrentJob` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `CurrentJob` being updated. */
  patch: CurrentJobPatch;
};

/** All input for the `updateCurrentJob` mutation. */
export type UpdateCurrentJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  currentJobId: Scalars['Int'];
  /** An object where the defined keys will be set on the `CurrentJob` being updated. */
  patch: CurrentJobPatch;
};

/** The output of our update `CurrentJob` mutation. */
export type UpdateCurrentJobPayload = {
  __typename?: 'UpdateCurrentJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CurrentJob` that was updated by this mutation. */
  currentJob?: Maybe<CurrentJob>;
  /** An edge for our `CurrentJob`. May be used by Relay 1. */
  currentJobEdge?: Maybe<CurrentJobsEdge>;
  /** Reads a single `Mentee` that is related to this `CurrentJob`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `CurrentJob`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `CurrentJob` mutation. */
export type UpdateCurrentJobPayloadCurrentJobEdgeArgs = {
  orderBy?: InputMaybe<Array<CurrentJobsOrderBy>>;
};

/** All input for the `updateEducationByMenteeId` mutation. */
export type UpdateEducationByMenteeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  menteeId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Education` being updated. */
  patch: EducationPatch;
};

/** All input for the `updateEducationByMentorId` mutation. */
export type UpdateEducationByMentorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Education` being updated. */
  patch: EducationPatch;
};

/** All input for the `updateEducationByNodeId` mutation. */
export type UpdateEducationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Education` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Education` being updated. */
  patch: EducationPatch;
};

/** All input for the `updateEducation` mutation. */
export type UpdateEducationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  educationId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Education` being updated. */
  patch: EducationPatch;
};

/** The output of our update `Education` mutation. */
export type UpdateEducationPayload = {
  __typename?: 'UpdateEducationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Education` that was updated by this mutation. */
  education?: Maybe<Education>;
  /** An edge for our `Education`. May be used by Relay 1. */
  educationEdge?: Maybe<EducationsEdge>;
  /** Reads a single `Mentee` that is related to this `Education`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `Education`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Education` mutation. */
export type UpdateEducationPayloadEducationEdgeArgs = {
  orderBy?: InputMaybe<Array<EducationsOrderBy>>;
};

/** All input for the `updateLanguageByNodeId` mutation. */
export type UpdateLanguageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Language` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Language` being updated. */
  patch: LanguagePatch;
};

/** All input for the `updateLanguageByUserId` mutation. */
export type UpdateLanguageByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Language` being updated. */
  patch: LanguagePatch;
  userId: Scalars['UUID'];
};

/** All input for the `updateLanguage` mutation. */
export type UpdateLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  languageId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Language` being updated. */
  patch: LanguagePatch;
};

/** The output of our update `Language` mutation. */
export type UpdateLanguagePayload = {
  __typename?: 'UpdateLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Language` that was updated by this mutation. */
  language?: Maybe<Language>;
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Language`. */
  user?: Maybe<User>;
};


/** The output of our update `Language` mutation. */
export type UpdateLanguagePayloadLanguageEdgeArgs = {
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};

/** All input for the `updateMenteeByNodeId` mutation. */
export type UpdateMenteeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Mentee` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Mentee` being updated. */
  patch: MenteePatch;
};

/** All input for the `updateMenteeByUserId` mutation. */
export type UpdateMenteeByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Mentee` being updated. */
  patch: MenteePatch;
  userId: Scalars['UUID'];
};

/** All input for the `updateMentee` mutation. */
export type UpdateMenteeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  menteeId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Mentee` being updated. */
  patch: MenteePatch;
};

/** The output of our update `Mentee` mutation. */
export type UpdateMenteePayload = {
  __typename?: 'UpdateMenteePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Mentee` that was updated by this mutation. */
  mentee?: Maybe<Mentee>;
  /** An edge for our `Mentee`. May be used by Relay 1. */
  menteeEdge?: Maybe<MenteesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Mentee`. */
  user?: Maybe<User>;
};


/** The output of our update `Mentee` mutation. */
export type UpdateMenteePayloadMenteeEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteesOrderBy>>;
};

/** All input for the `updateMenteeSubjectByNodeId` mutation. */
export type UpdateMenteeSubjectByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MenteeSubject` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MenteeSubject` being updated. */
  patch: MenteeSubjectPatch;
};

/** All input for the `updateMenteeSubject` mutation. */
export type UpdateMenteeSubjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  menteeSubjectId: Scalars['Int'];
  /** An object where the defined keys will be set on the `MenteeSubject` being updated. */
  patch: MenteeSubjectPatch;
};

/** The output of our update `MenteeSubject` mutation. */
export type UpdateMenteeSubjectPayload = {
  __typename?: 'UpdateMenteeSubjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `MenteeSubject`. */
  mentee?: Maybe<Mentee>;
  /** The `MenteeSubject` that was updated by this mutation. */
  menteeSubject?: Maybe<MenteeSubject>;
  /** An edge for our `MenteeSubject`. May be used by Relay 1. */
  menteeSubjectEdge?: Maybe<MenteeSubjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `MenteeSubject` mutation. */
export type UpdateMenteeSubjectPayloadMenteeSubjectEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteeSubjectsOrderBy>>;
};

/** All input for the `updateMenteesInterestedInProgByNodeId` mutation. */
export type UpdateMenteesInterestedInProgByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MenteesInterestedInProg` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MenteesInterestedInProg` being updated. */
  patch: MenteesInterestedInProgPatch;
};

/** All input for the `updateMenteesInterestedInProg` mutation. */
export type UpdateMenteesInterestedInProgInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  interestedId: Scalars['Int'];
  /** An object where the defined keys will be set on the `MenteesInterestedInProg` being updated. */
  patch: MenteesInterestedInProgPatch;
};

/** The output of our update `MenteesInterestedInProg` mutation. */
export type UpdateMenteesInterestedInProgPayload = {
  __typename?: 'UpdateMenteesInterestedInProgPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `MenteesInterestedInProg`. */
  mentee?: Maybe<Mentee>;
  /** The `MenteesInterestedInProg` that was updated by this mutation. */
  menteesInterestedInProg?: Maybe<MenteesInterestedInProg>;
  /** An edge for our `MenteesInterestedInProg`. May be used by Relay 1. */
  menteesInterestedInProgEdge?: Maybe<MenteesInterestedInProgsEdge>;
  /** Reads a single `MentoringProg` that is related to this `MenteesInterestedInProg`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `MenteesInterestedInProg` mutation. */
export type UpdateMenteesInterestedInProgPayloadMenteesInterestedInProgEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteesInterestedInProgsOrderBy>>;
};

/** All input for the `updateMenteesInterestedInWebinarByNodeId` mutation. */
export type UpdateMenteesInterestedInWebinarByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MenteesInterestedInWebinar` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MenteesInterestedInWebinar` being updated. */
  patch: MenteesInterestedInWebinarPatch;
};

/** All input for the `updateMenteesInterestedInWebinar` mutation. */
export type UpdateMenteesInterestedInWebinarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  interestedId: Scalars['Int'];
  /** An object where the defined keys will be set on the `MenteesInterestedInWebinar` being updated. */
  patch: MenteesInterestedInWebinarPatch;
};

/** The output of our update `MenteesInterestedInWebinar` mutation. */
export type UpdateMenteesInterestedInWebinarPayload = {
  __typename?: 'UpdateMenteesInterestedInWebinarPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `MenteesInterestedInWebinar`. */
  mentee?: Maybe<Mentee>;
  /** The `MenteesInterestedInWebinar` that was updated by this mutation. */
  menteesInterestedInWebinar?: Maybe<MenteesInterestedInWebinar>;
  /** An edge for our `MenteesInterestedInWebinar`. May be used by Relay 1. */
  menteesInterestedInWebinarEdge?: Maybe<MenteesInterestedInWebinarsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Webinar` that is related to this `MenteesInterestedInWebinar`. */
  webinar?: Maybe<Webinar>;
};


/** The output of our update `MenteesInterestedInWebinar` mutation. */
export type UpdateMenteesInterestedInWebinarPayloadMenteesInterestedInWebinarEdgeArgs = {
  orderBy?: InputMaybe<Array<MenteesInterestedInWebinarsOrderBy>>;
};

/** All input for the `updateMentorByNodeId` mutation. */
export type UpdateMentorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Mentor` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Mentor` being updated. */
  patch: MentorPatch;
};

/** All input for the `updateMentorByUserId` mutation. */
export type UpdateMentorByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Mentor` being updated. */
  patch: MentorPatch;
  userId: Scalars['UUID'];
};

/** All input for the `updateMentor` mutation. */
export type UpdateMentorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Mentor` being updated. */
  patch: MentorPatch;
};

/** The output of our update `Mentor` mutation. */
export type UpdateMentorPayload = {
  __typename?: 'UpdateMentorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Mentor` that was updated by this mutation. */
  mentor?: Maybe<Mentor>;
  /** An edge for our `Mentor`. May be used by Relay 1. */
  mentorEdge?: Maybe<MentorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Mentor`. */
  user?: Maybe<User>;
};


/** The output of our update `Mentor` mutation. */
export type UpdateMentorPayloadMentorEdgeArgs = {
  orderBy?: InputMaybe<Array<MentorsOrderBy>>;
};

/** All input for the `updateMentorSubjectByNodeId` mutation. */
export type UpdateMentorSubjectByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MentorSubject` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MentorSubject` being updated. */
  patch: MentorSubjectPatch;
};

/** All input for the `updateMentorSubject` mutation. */
export type UpdateMentorSubjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorSubjectId: Scalars['Int'];
  /** An object where the defined keys will be set on the `MentorSubject` being updated. */
  patch: MentorSubjectPatch;
};

/** The output of our update `MentorSubject` mutation. */
export type UpdateMentorSubjectPayload = {
  __typename?: 'UpdateMentorSubjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentor` that is related to this `MentorSubject`. */
  mentor?: Maybe<Mentor>;
  /** The `MentorSubject` that was updated by this mutation. */
  mentorSubject?: Maybe<MentorSubject>;
  /** An edge for our `MentorSubject`. May be used by Relay 1. */
  mentorSubjectEdge?: Maybe<MentorSubjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `MentorSubject` mutation. */
export type UpdateMentorSubjectPayloadMentorSubjectEdgeArgs = {
  orderBy?: InputMaybe<Array<MentorSubjectsOrderBy>>;
};

/** All input for the `updateMentoringProgByNodeId` mutation. */
export type UpdateMentoringProgByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MentoringProg` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MentoringProg` being updated. */
  patch: MentoringProgPatch;
};

/** All input for the `updateMentoringProg` mutation. */
export type UpdateMentoringProgInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MentoringProg` being updated. */
  patch: MentoringProgPatch;
  progId: Scalars['Int'];
};

/** The output of our update `MentoringProg` mutation. */
export type UpdateMentoringProgPayload = {
  __typename?: 'UpdateMentoringProgPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Coordinator` that is related to this `MentoringProg`. */
  coordinator?: Maybe<Coordinator>;
  /** Reads a single `Mentor` that is related to this `MentoringProg`. */
  mentor?: Maybe<Mentor>;
  /** Reads a single `MentorSubject` that is related to this `MentoringProg`. */
  mentorSubject?: Maybe<MentorSubject>;
  /** The `MentoringProg` that was updated by this mutation. */
  mentoringProg?: Maybe<MentoringProg>;
  /** An edge for our `MentoringProg`. May be used by Relay 1. */
  mentoringProgEdge?: Maybe<MentoringProgsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `MentoringProg` mutation. */
export type UpdateMentoringProgPayloadMentoringProgEdgeArgs = {
  orderBy?: InputMaybe<Array<MentoringProgsOrderBy>>;
};

/** All input for the `updatePersonalDevelopmentPlanByNodeId` mutation. */
export type UpdatePersonalDevelopmentPlanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PersonalDevelopmentPlan` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `PersonalDevelopmentPlan` being updated. */
  patch: PersonalDevelopmentPlanPatch;
};

/** All input for the `updatePersonalDevelopmentPlan` mutation. */
export type UpdatePersonalDevelopmentPlanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `PersonalDevelopmentPlan` being updated. */
  patch: PersonalDevelopmentPlanPatch;
  pdpId: Scalars['Int'];
};

/** The output of our update `PersonalDevelopmentPlan` mutation. */
export type UpdatePersonalDevelopmentPlanPayload = {
  __typename?: 'UpdatePersonalDevelopmentPlanPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `PersonalDevelopmentPlan`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `Mentor` that is related to this `PersonalDevelopmentPlan`. */
  mentor?: Maybe<Mentor>;
  /** The `PersonalDevelopmentPlan` that was updated by this mutation. */
  personalDevelopmentPlan?: Maybe<PersonalDevelopmentPlan>;
  /** An edge for our `PersonalDevelopmentPlan`. May be used by Relay 1. */
  personalDevelopmentPlanEdge?: Maybe<PersonalDevelopmentPlansEdge>;
  /** Reads a single `MentoringProg` that is related to this `PersonalDevelopmentPlan`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `PersonalDevelopmentPlan` mutation. */
export type UpdatePersonalDevelopmentPlanPayloadPersonalDevelopmentPlanEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonalDevelopmentPlansOrderBy>>;
};

/** All input for the `updateReservationByNodeId` mutation. */
export type UpdateReservationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Reservation` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Reservation` being updated. */
  patch: ReservationPatch;
};

/** All input for the `updateReservation` mutation. */
export type UpdateReservationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Reservation` being updated. */
  patch: ReservationPatch;
  reservationId: Scalars['Int'];
};

/** The output of our update `Reservation` mutation. */
export type UpdateReservationPayload = {
  __typename?: 'UpdateReservationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `Reservation`. */
  mentee?: Maybe<Mentee>;
  /** Reads a single `MentoringProg` that is related to this `Reservation`. */
  prog?: Maybe<MentoringProg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Reservation` that was updated by this mutation. */
  reservation?: Maybe<Reservation>;
  /** An edge for our `Reservation`. May be used by Relay 1. */
  reservationEdge?: Maybe<ReservationsEdge>;
};


/** The output of our update `Reservation` mutation. */
export type UpdateReservationPayloadReservationEdgeArgs = {
  orderBy?: InputMaybe<Array<ReservationsOrderBy>>;
};

/** All input for the `updateSocialByNodeId` mutation. */
export type UpdateSocialByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Social` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Social` being updated. */
  patch: SocialPatch;
};

/** All input for the `updateSocialByUserId` mutation. */
export type UpdateSocialByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Social` being updated. */
  patch: SocialPatch;
  userId: Scalars['UUID'];
};

/** All input for the `updateSocial` mutation. */
export type UpdateSocialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Social` being updated. */
  patch: SocialPatch;
  socialsId: Scalars['Int'];
};

/** The output of our update `Social` mutation. */
export type UpdateSocialPayload = {
  __typename?: 'UpdateSocialPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Social` that was updated by this mutation. */
  social?: Maybe<Social>;
  /** An edge for our `Social`. May be used by Relay 1. */
  socialEdge?: Maybe<SocialsEdge>;
  /** Reads a single `User` that is related to this `Social`. */
  user?: Maybe<User>;
};


/** The output of our update `Social` mutation. */
export type UpdateSocialPayloadSocialEdgeArgs = {
  orderBy?: InputMaybe<Array<SocialsOrderBy>>;
};

/** All input for the `updateUserByEmail` mutation. */
export type UpdateUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUserByProfileImage` mutation. */
export type UpdateUserByProfileImageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
  profileImage: Scalars['String'];
};

/** All input for the `updateUserByUsername` mutation. */
export type UpdateUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
  username: Scalars['String'];
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
  userId: Scalars['UUID'];
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `updateWebinarByNodeId` mutation. */
export type UpdateWebinarByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Webinar` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Webinar` being updated. */
  patch: WebinarPatch;
};

/** All input for the `updateWebinar` mutation. */
export type UpdateWebinarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Webinar` being updated. */
  patch: WebinarPatch;
  webinarId: Scalars['Int'];
};

/** The output of our update `Webinar` mutation. */
export type UpdateWebinarPayload = {
  __typename?: 'UpdateWebinarPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentor` that is related to this `Webinar`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Webinar` that was updated by this mutation. */
  webinar?: Maybe<Webinar>;
  /** An edge for our `Webinar`. May be used by Relay 1. */
  webinarEdge?: Maybe<WebinarsEdge>;
};


/** The output of our update `Webinar` mutation. */
export type UpdateWebinarPayloadWebinarEdgeArgs = {
  orderBy?: InputMaybe<Array<WebinarsOrderBy>>;
};

/** All input for the `updateWorkExperienceByMentorId` mutation. */
export type UpdateWorkExperienceByMentorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  mentorId: Scalars['Int'];
  /** An object where the defined keys will be set on the `WorkExperience` being updated. */
  patch: WorkExperiencePatch;
};

/** All input for the `updateWorkExperienceByNodeId` mutation. */
export type UpdateWorkExperienceByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `WorkExperience` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `WorkExperience` being updated. */
  patch: WorkExperiencePatch;
};

/** All input for the `updateWorkExperience` mutation. */
export type UpdateWorkExperienceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `WorkExperience` being updated. */
  patch: WorkExperiencePatch;
  workExpId: Scalars['Int'];
};

/** The output of our update `WorkExperience` mutation. */
export type UpdateWorkExperiencePayload = {
  __typename?: 'UpdateWorkExperiencePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Mentor` that is related to this `WorkExperience`. */
  mentor?: Maybe<Mentor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `WorkExperience` that was updated by this mutation. */
  workExperience?: Maybe<WorkExperience>;
  /** An edge for our `WorkExperience`. May be used by Relay 1. */
  workExperienceEdge?: Maybe<WorkExperiencesEdge>;
};


/** The output of our update `WorkExperience` mutation. */
export type UpdateWorkExperiencePayloadWorkExperienceEdgeArgs = {
  orderBy?: InputMaybe<Array<WorkExperiencesOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  /** Reads a single `Coordinator` that is related to this `User`. */
  coordinator?: Maybe<Coordinator>;
  /**
   * Reads and enables pagination through a set of `Coordinator`.
   * @deprecated Please use coordinator instead
   */
  coordinators: CoordinatorsConnection;
  createdAt?: Maybe<Scalars['Datetime']>;
  email: Scalars['String'];
  emailVerifiedAt?: Maybe<Scalars['Date']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  /** Reads a single `Language` that is related to this `User`. */
  language?: Maybe<Language>;
  /**
   * Reads and enables pagination through a set of `Language`.
   * @deprecated Please use language instead
   */
  languages: LanguagesConnection;
  lastName?: Maybe<Scalars['String']>;
  /** Reads a single `Mentee` that is related to this `User`. */
  mentee?: Maybe<Mentee>;
  /**
   * Reads and enables pagination through a set of `Mentee`.
   * @deprecated Please use mentee instead
   */
  mentees: MenteesConnection;
  /** Reads a single `Mentor` that is related to this `User`. */
  mentor?: Maybe<Mentor>;
  /**
   * Reads and enables pagination through a set of `Mentor`.
   * @deprecated Please use mentor instead
   */
  mentors: MentorsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  profileImage?: Maybe<Scalars['String']>;
  rememberToken?: Maybe<Scalars['String']>;
  /** Reads a single `Social` that is related to this `User`. */
  social?: Maybe<Social>;
  /**
   * Reads and enables pagination through a set of `Social`.
   * @deprecated Please use social instead
   */
  socials: SocialsConnection;
  updatedAt?: Maybe<Scalars['Date']>;
  userId: Scalars['UUID'];
  username: Scalars['String'];
  wilaya?: Maybe<Scalars['String']>;
};


export type UserCoordinatorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CoordinatorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CoordinatorsOrderBy>>;
};


export type UserLanguagesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<LanguageCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};


export type UserMenteesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MenteeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MenteesOrderBy>>;
};


export type UserMentorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MentorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MentorsOrderBy>>;
};


export type UserSocialsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SocialCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SocialsOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `emailVerifiedAt` field. */
  emailVerifiedAt?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `gender` field. */
  gender?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `ip` field. */
  ip?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `profileImage` field. */
  profileImage?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `rememberToken` field. */
  rememberToken?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `wilaya` field. */
  wilaya?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  email: Scalars['String'];
  emailVerifiedAt?: InputMaybe<Scalars['Date']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  profileImage?: InputMaybe<Scalars['String']>;
  rememberToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Date']>;
  userId?: InputMaybe<Scalars['UUID']>;
  username: Scalars['String'];
  wilaya?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerifiedAt?: InputMaybe<Scalars['Date']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  profileImage?: InputMaybe<Scalars['String']>;
  rememberToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Date']>;
  userId?: InputMaybe<Scalars['UUID']>;
  username?: InputMaybe<Scalars['String']>;
  wilaya?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  EmailVerifiedAtAsc = 'EMAIL_VERIFIED_AT_ASC',
  EmailVerifiedAtDesc = 'EMAIL_VERIFIED_AT_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  IpAsc = 'IP_ASC',
  IpDesc = 'IP_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProfileImageAsc = 'PROFILE_IMAGE_ASC',
  ProfileImageDesc = 'PROFILE_IMAGE_DESC',
  RememberTokenAsc = 'REMEMBER_TOKEN_ASC',
  RememberTokenDesc = 'REMEMBER_TOKEN_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  WilayaAsc = 'WILAYA_ASC',
  WilayaDesc = 'WILAYA_DESC'
}

export type Webinar = Node & {
  __typename?: 'Webinar';
  date: Scalars['Date'];
  endHour?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `MenteesInterestedInWebinar`. */
  menteesInterestedInWebinars: MenteesInterestedInWebinarsConnection;
  /** Reads a single `Mentor` that is related to this `Webinar`. */
  mentor?: Maybe<Mentor>;
  mentorId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  startHour?: Maybe<Scalars['Datetime']>;
  title: Scalars['String'];
  webinarId: Scalars['Int'];
};


export type WebinarMenteesInterestedInWebinarsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MenteesInterestedInWebinarCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MenteesInterestedInWebinarsOrderBy>>;
};

/** A condition to be used against `Webinar` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type WebinarCondition = {
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `endHour` field. */
  endHour?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `mentorId` field. */
  mentorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `startHour` field. */
  startHour?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `webinarId` field. */
  webinarId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `Webinar` */
export type WebinarInput = {
  date: Scalars['Date'];
  endHour?: InputMaybe<Scalars['Datetime']>;
  mentorId: Scalars['Int'];
  startHour?: InputMaybe<Scalars['Datetime']>;
  title: Scalars['String'];
  webinarId?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `Webinar`. Fields that are set will be updated. */
export type WebinarPatch = {
  date?: InputMaybe<Scalars['Date']>;
  endHour?: InputMaybe<Scalars['Datetime']>;
  mentorId?: InputMaybe<Scalars['Int']>;
  startHour?: InputMaybe<Scalars['Datetime']>;
  title?: InputMaybe<Scalars['String']>;
  webinarId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Webinar` values. */
export type WebinarsConnection = {
  __typename?: 'WebinarsConnection';
  /** A list of edges which contains the `Webinar` and cursor to aid in pagination. */
  edges: Array<WebinarsEdge>;
  /** A list of `Webinar` objects. */
  nodes: Array<Maybe<Webinar>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Webinar` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Webinar` edge in the connection. */
export type WebinarsEdge = {
  __typename?: 'WebinarsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Webinar` at the end of the edge. */
  node?: Maybe<Webinar>;
};

/** Methods to use when ordering `Webinar`. */
export enum WebinarsOrderBy {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  EndHourAsc = 'END_HOUR_ASC',
  EndHourDesc = 'END_HOUR_DESC',
  MentorIdAsc = 'MENTOR_ID_ASC',
  MentorIdDesc = 'MENTOR_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StartHourAsc = 'START_HOUR_ASC',
  StartHourDesc = 'START_HOUR_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  WebinarIdAsc = 'WEBINAR_ID_ASC',
  WebinarIdDesc = 'WEBINAR_ID_DESC'
}

export type WorkExperience = Node & {
  __typename?: 'WorkExperience';
  endDate?: Maybe<Scalars['Int']>;
  experienceTitle: Scalars['String'];
  /** Reads a single `Mentor` that is related to this `WorkExperience`. */
  mentor?: Maybe<Mentor>;
  mentorId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  startDate?: Maybe<Scalars['Date']>;
  workExpId: Scalars['Int'];
};

/**
 * A condition to be used against `WorkExperience` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type WorkExperienceCondition = {
  /** Checks for equality with the object’s `endDate` field. */
  endDate?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `experienceTitle` field. */
  experienceTitle?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `mentorId` field. */
  mentorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `startDate` field. */
  startDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `workExpId` field. */
  workExpId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `WorkExperience` */
export type WorkExperienceInput = {
  endDate?: InputMaybe<Scalars['Int']>;
  experienceTitle: Scalars['String'];
  mentorId: Scalars['Int'];
  startDate?: InputMaybe<Scalars['Date']>;
  workExpId?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `WorkExperience`. Fields that are set will be updated. */
export type WorkExperiencePatch = {
  endDate?: InputMaybe<Scalars['Int']>;
  experienceTitle?: InputMaybe<Scalars['String']>;
  mentorId?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['Date']>;
  workExpId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `WorkExperience` values. */
export type WorkExperiencesConnection = {
  __typename?: 'WorkExperiencesConnection';
  /** A list of edges which contains the `WorkExperience` and cursor to aid in pagination. */
  edges: Array<WorkExperiencesEdge>;
  /** A list of `WorkExperience` objects. */
  nodes: Array<Maybe<WorkExperience>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `WorkExperience` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `WorkExperience` edge in the connection. */
export type WorkExperiencesEdge = {
  __typename?: 'WorkExperiencesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `WorkExperience` at the end of the edge. */
  node?: Maybe<WorkExperience>;
};

/** Methods to use when ordering `WorkExperience`. */
export enum WorkExperiencesOrderBy {
  EndDateAsc = 'END_DATE_ASC',
  EndDateDesc = 'END_DATE_DESC',
  ExperienceTitleAsc = 'EXPERIENCE_TITLE_ASC',
  ExperienceTitleDesc = 'EXPERIENCE_TITLE_DESC',
  MentorIdAsc = 'MENTOR_ID_ASC',
  MentorIdDesc = 'MENTOR_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StartDateAsc = 'START_DATE_ASC',
  StartDateDesc = 'START_DATE_DESC',
  WorkExpIdAsc = 'WORK_EXP_ID_ASC',
  WorkExpIdDesc = 'WORK_EXP_ID_DESC'
}

export type GetAllUsersByUsernameQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<UsersOrderBy> | UsersOrderBy>;
}>;


export type GetAllUsersByUsernameQuery = { __typename?: 'Query', users?: { __typename?: 'UsersConnection', edges: Array<{ __typename?: 'UsersEdge', node?: { __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, ip?: string | null } | null }> } | null };


export const GetAllUsersByUsernameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsersByUsername"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersOrderBy"}}}},"defaultValue":{"kind":"EnumValue","value":"USERNAME_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"ip"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllUsersByUsernameQuery, GetAllUsersByUsernameQueryVariables>;

export const GetAllUsersByUsername = gql`
    query GetAllUsersByUsername($orderBy: [UsersOrderBy!] = USERNAME_ASC) {
  users(orderBy: $orderBy) {
    edges {
      node {
        username
        firstName
        lastName
        ip
      }
    }
  }
}
    `;