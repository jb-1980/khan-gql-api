import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date | string; output: Date | string; }
};

export type AdminReport = {
  __typename?: 'AdminReport';
  bands?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  blobCreatedAt?: Maybe<Scalars['String']['output']>;
  blobExpiresAt?: Maybe<Scalars['String']['output']>;
  course?: Maybe<AdminReportCourse>;
  courseSISValues?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  districtKeyId: Scalars['ID']['output'];
  endDate?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['String']['output']>;
  grades?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  kaid: Scalars['ID']['output'];
  notifyByEmail?: Maybe<Scalars['Boolean']['output']>;
  reportType?: Maybe<Scalars['String']['output']>;
  schools?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  startDate?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  strandKey?: Maybe<Scalars['String']['output']>;
  teacherKaids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AdminReportCourse = {
  __typename?: 'AdminReportCourse';
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  masteryEnabled?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translatedTitle?: Maybe<Scalars['String']['output']>;
};

export enum AdminReportType {
  KadSkillsProgress = 'KAD_SKILLS_PROGRESS'
}

export type Coach = {
  __typename?: 'Coach';
  id?: Maybe<Scalars['ID']['output']>;
  studentList?: Maybe<Array<Maybe<CoachStudent>>>;
};


export type CoachStudentListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CoachAssignment = {
  __typename?: 'CoachAssignment';
  contents?: Maybe<CoachAssignmentContents>;
  dueDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  itemCompletionStatesForAllStudents?: Maybe<Array<Maybe<CoachAssignmentItemCompletionStates>>>;
};

export type CoachAssignmentContents = {
  __typename?: 'CoachAssignmentContents';
  defaultUrlPath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  translatedTitle?: Maybe<Scalars['String']['output']>;
};

export type CoachAssignmentFilters = {
  dueAfter?: InputMaybe<Scalars['String']['input']>;
  dueBefore?: InputMaybe<Scalars['String']['input']>;
};

export type CoachAssignmentItemCompletionStates = {
  __typename?: 'CoachAssignmentItemCompletionStates';
  bestScore?: Maybe<CoachAssignmentItemCompletionStatesBestScore>;
  completedOn?: Maybe<Scalars['String']['output']>;
  studentKaid?: Maybe<Scalars['String']['output']>;
};

export type CoachAssignmentItemCompletionStatesBestScore = {
  __typename?: 'CoachAssignmentItemCompletionStatesBestScore';
  numAttempted?: Maybe<Scalars['Int']['output']>;
  numCorrect?: Maybe<Scalars['Int']['output']>;
};

export type CoachAssignmentsPage = {
  __typename?: 'CoachAssignmentsPage';
  assignments?: Maybe<Array<Maybe<CoachAssignment>>>;
  pageInfo?: Maybe<CoachAssignmentsPageInfo>;
};

export type CoachAssignmentsPageInfo = {
  __typename?: 'CoachAssignmentsPageInfo';
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type CoachStudent = {
  __typename?: 'CoachStudent';
  assignmentsPage?: Maybe<CoachAssignmentsPage>;
  cacheId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  studentKaidsAndNicknames?: Maybe<Array<Maybe<CoachStudentKaidsAndNicknames>>>;
};


export type CoachStudentAssignmentsPageArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  filters?: InputMaybe<CoachAssignmentFilters>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type CoachStudentKaidsAndNicknames = {
  __typename?: 'CoachStudentKaidsAndNicknames';
  coachNickname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Course = {
  __typename?: 'Course';
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Topic>;
  translatedTitle?: Maybe<Scalars['String']['output']>;
};

export type CurationItemMastery = {
  __typename?: 'CurationItemMastery';
  percentage?: Maybe<Scalars['Int']['output']>;
};

export type District = {
  __typename?: 'District';
  courses?: Maybe<Array<Maybe<Course>>>;
  id: Scalars['ID']['output'];
};


export type DistrictCoursesArgs = {
  kaLocale: Scalars['String']['input'];
};

export type GetLastNAdminReportsForUserResult = {
  __typename?: 'GetLastNAdminReportsForUserResult';
  adminReports?: Maybe<Array<Maybe<AdminReport>>>;
  error?: Maybe<RequestAdminReportError>;
};

export type Locale = {
  __typename?: 'Locale';
  id: Scalars['ID']['output'];
  kaLocale?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LoginWithPasswordMutation = {
  __typename?: 'LoginWithPasswordMutation';
  error?: Maybe<LoginWithPasswordMutationError>;
  isFirstLogin?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type LoginWithPasswordMutationError = {
  __typename?: 'LoginWithPasswordMutationError';
  code?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  loginWithPassword: LoginWithPasswordMutation;
  requestAdminReportCSV: RequestAdminReportResult;
  signURLForReport: SignUrlForReportResult;
};


export type MutationLoginWithPasswordArgs = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRequestAdminReportCsvArgs = {
  bands?: InputMaybe<Array<Scalars['String']['input']>>;
  courseID?: InputMaybe<Scalars['String']['input']>;
  courseSISValues?: InputMaybe<Array<Scalars['String']['input']>>;
  districtID: Scalars['ID']['input'];
  endDate: Scalars['DateTime']['input'];
  grades?: InputMaybe<Array<Scalars['String']['input']>>;
  kaLocale?: InputMaybe<Scalars['String']['input']>;
  kaid: Scalars['ID']['input'];
  notifyByEmail: Scalars['Boolean']['input'];
  reportType: AdminReportType;
  schools: Array<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  strandKey?: InputMaybe<Scalars['String']['input']>;
  teacherKaids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationSignUrlForReportArgs = {
  recordID: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  coach: Coach;
  districtById?: Maybe<District>;
  getLastNAdminReportsForUser?: Maybe<GetLastNAdminReportsForUserResult>;
  user?: Maybe<User>;
};


export type QueryDistrictByIdArgs = {
  districtId: Scalars['ID']['input'];
};


export type QueryGetLastNAdminReportsForUserArgs = {
  districtID: Scalars['String']['input'];
  kaid: Scalars['String']['input'];
  topNResults: Scalars['Int']['input'];
};

export type RequestAdminReportError = {
  __typename?: 'RequestAdminReportError';
  /** Possible values: UNAUTHORIZED */
  code?: Maybe<Scalars['String']['output']>;
};

export type RequestAdminReportResult = {
  __typename?: 'RequestAdminReportResult';
  adminReport?: Maybe<AdminReport>;
  error?: Maybe<RequestAdminReportError>;
};

export type SignUrlForReportResult = {
  __typename?: 'SignURLForReportResult';
  error?: Maybe<RequestAdminReportError>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SubjectProgress = {
  __typename?: 'SubjectProgress';
  currentMastery?: Maybe<CurationItemMastery>;
  topic?: Maybe<Topic>;
};

export type Topic = {
  __typename?: 'Topic';
  contentKind?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  relativeUrl?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  translatedTitle?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  canAccessDistrictsHomepage?: Maybe<Scalars['Boolean']['output']>;
  hasUnresolvedInvitations?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isTeacher?: Maybe<Scalars['Boolean']['output']>;
  kaid?: Maybe<Scalars['String']['output']>;
  preferredKaLocale?: Maybe<Locale>;
  subjectProgressesBySlug?: Maybe<Array<Maybe<SubjectProgress>>>;
  transferAuthToken?: Maybe<Scalars['String']['output']>;
};


export type UserSubjectProgressesBySlugArgs = {
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type LoginWithPasswordMutationMutationVariables = Exact<{
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginWithPasswordMutationMutation = { __typename?: 'Mutation', loginWithPassword: { __typename: 'LoginWithPasswordMutation', isFirstLogin?: boolean | null, user?: { __typename: 'User', id: string, kaid?: string | null, canAccessDistrictsHomepage?: boolean | null, isTeacher?: boolean | null, hasUnresolvedInvitations?: boolean | null, transferAuthToken?: string | null, preferredKaLocale?: { __typename: 'Locale', id: string, kaLocale?: string | null, status?: string | null } | null } | null, error?: { __typename: 'LoginWithPasswordMutationError', code?: string | null } | null } };

export type RequestAdminReportCsvMutationVariables = Exact<{
  kaid: Scalars['ID']['input'];
  districtID: Scalars['ID']['input'];
  reportType: AdminReportType;
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
  schools: Array<Scalars['String']['input']> | Scalars['String']['input'];
  grades?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  teacherKaids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  courseSISValues?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  courseID?: InputMaybe<Scalars['String']['input']>;
  strandKey?: InputMaybe<Scalars['String']['input']>;
  bands?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  notifyByEmail: Scalars['Boolean']['input'];
  kaLocale?: InputMaybe<Scalars['String']['input']>;
}>;


export type RequestAdminReportCsvMutation = { __typename?: 'Mutation', requestAdminReportCSV: { __typename: 'RequestAdminReportResult', adminReport?: { __typename: 'AdminReport', id?: string | null, status?: string | null } | null, error?: { __typename: 'RequestAdminReportError', code?: string | null } | null } };

export type SignUrlForReportMutationVariables = Exact<{
  recordID: Scalars['String']['input'];
}>;


export type SignUrlForReportMutation = { __typename?: 'Mutation', signURLForReport: { __typename: 'SignURLForReportResult', url?: string | null, error?: { __typename: 'RequestAdminReportError', code?: string | null } | null } };

export type KhanCoursesQueryQueryVariables = Exact<{
  districtId: Scalars['ID']['input'];
  kaLocale: Scalars['String']['input'];
}>;


export type KhanCoursesQueryQuery = { __typename?: 'Query', districtById?: { __typename: 'District', id: string, courses?: Array<{ __typename: 'Course', id: string, key?: string | null, translatedTitle?: string | null, domain?: { __typename: 'Topic', id: string, translatedTitle?: string | null } | null } | null> | null } | null };

export type ProgressByStudentQueryVariables = Exact<{
  assignmentFilters?: InputMaybe<CoachAssignmentFilters>;
  classId: Scalars['String']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProgressByStudentQuery = { __typename?: 'Query', coach: { __typename: 'Coach', id?: string | null, studentList?: Array<{ __typename: 'CoachStudent', id?: string | null, cacheId?: string | null, studentKaidsAndNicknames?: Array<{ __typename: 'CoachStudentKaidsAndNicknames', id?: string | null, coachNickname?: string | null } | null> | null, assignmentsPage?: { __typename: 'CoachAssignmentsPage', assignments?: Array<{ __typename: 'CoachAssignment', id?: string | null, dueDate?: string | null, contents?: { __typename: 'CoachAssignmentContents', id?: string | null, translatedTitle?: string | null, kind?: string | null, defaultUrlPath?: string | null } | null, itemCompletionStates?: Array<{ __typename: 'CoachAssignmentItemCompletionStates', completedOn?: string | null, studentKaid?: string | null, bestScore?: { __typename: 'CoachAssignmentItemCompletionStatesBestScore', numAttempted?: number | null, numCorrect?: number | null } | null } | null> | null } | null> | null, pageInfo?: { __typename: 'CoachAssignmentsPageInfo', nextCursor?: string | null } | null } | null } | null> | null } };

export type CsvReportStatusQueryVariables = Exact<{
  kaid: Scalars['String']['input'];
  districtID: Scalars['String']['input'];
}>;


export type CsvReportStatusQuery = { __typename?: 'Query', getLastNAdminReportsForUser?: { __typename: 'GetLastNAdminReportsForUserResult', adminReports?: Array<{ __typename: 'AdminReport', id?: string | null, kaid: string, districtKeyId: string, status?: string | null, blobCreatedAt?: string | null, blobExpiresAt?: string | null, reportType?: string | null, startDate?: string | null, endDate?: string | null, schools?: Array<string | null> | null, createdAt?: string | null, fileName?: string | null, fileSize?: string | null, bands?: Array<string | null> | null, courseSISValues?: Array<string | null> | null, teacherKaids?: Array<string | null> | null, grades?: Array<string | null> | null, strandKey?: string | null, notifyByEmail?: boolean | null, course?: { __typename: 'AdminReportCourse', id?: string | null, key?: string | null, title?: string | null, translatedTitle?: string | null, masteryEnabled?: boolean | null } | null } | null> | null, error?: { __typename: 'RequestAdminReportError', code?: string | null } | null } | null };

export type GetLearnMenuProgressQueryVariables = Exact<{
  slugs?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetLearnMenuProgressQuery = { __typename?: 'Query', user?: { __typename: 'User', id: string, subjectProgressesBySlug?: Array<{ __typename: 'SubjectProgress', topic?: { __typename: 'Topic', id: string, slug?: string | null } | null, currentMastery?: { __typename: 'CurationItemMastery', percentage?: number | null } | null } | null> | null } | null };


export const LoginWithPasswordMutationDocument = gql`
    mutation loginWithPasswordMutation($identifier: String!, $password: String!) {
  loginWithPassword(identifier: $identifier, password: $password) {
    user {
      id
      kaid
      canAccessDistrictsHomepage
      isTeacher
      hasUnresolvedInvitations
      transferAuthToken
      preferredKaLocale {
        id
        kaLocale
        status
        __typename
      }
      __typename
    }
    isFirstLogin
    error {
      code
      __typename
    }
    __typename
  }
}
    `;
export const RequestAdminReportCsvDocument = gql`
    mutation requestAdminReportCSV($kaid: ID!, $districtID: ID!, $reportType: AdminReportType!, $startDate: DateTime!, $endDate: DateTime!, $schools: [String!]!, $grades: [String!], $teacherKaids: [String!], $courseSISValues: [String!], $courseID: String, $strandKey: String, $bands: [String!], $notifyByEmail: Boolean!, $kaLocale: String) {
  requestAdminReportCSV(
    kaid: $kaid
    districtID: $districtID
    reportType: $reportType
    startDate: $startDate
    endDate: $endDate
    schools: $schools
    teacherKaids: $teacherKaids
    grades: $grades
    courseSISValues: $courseSISValues
    courseID: $courseID
    strandKey: $strandKey
    bands: $bands
    notifyByEmail: $notifyByEmail
    kaLocale: $kaLocale
  ) {
    adminReport {
      id
      status
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}
    `;
export const SignUrlForReportDocument = gql`
    mutation signURLForReport($recordID: String!) {
  signURLForReport(recordID: $recordID) {
    url
    error {
      code
      __typename
    }
    __typename
  }
}
    `;
export const KhanCoursesQueryDocument = gql`
    query KhanCoursesQuery($districtId: ID!, $kaLocale: String!) {
  districtById(districtId: $districtId) {
    id
    courses(kaLocale: $kaLocale) {
      id
      key
      translatedTitle
      domain: parent {
        id
        translatedTitle
        __typename
      }
      __typename
    }
    __typename
  }
}
    `;
export const ProgressByStudentDocument = gql`
    query ProgressByStudent($assignmentFilters: CoachAssignmentFilters, $classId: String!, $pageSize: Int, $after: ID) {
  coach {
    id
    studentList(id: $classId) {
      id
      cacheId
      studentKaidsAndNicknames {
        id
        coachNickname
        __typename
      }
      assignmentsPage(filters: $assignmentFilters, after: $after, pageSize: $pageSize) {
        assignments {
          id
          dueDate
          contents {
            id
            translatedTitle
            kind
            defaultUrlPath
            __typename
          }
          itemCompletionStates: itemCompletionStatesForAllStudents {
            completedOn
            studentKaid
            bestScore {
              numAttempted
              numCorrect
              __typename
            }
            __typename
          }
          __typename
        }
        pageInfo {
          nextCursor
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
    `;
export const CsvReportStatusDocument = gql`
    query csvReportStatus($kaid: String!, $districtID: String!) {
  getLastNAdminReportsForUser(
    kaid: $kaid
    districtID: $districtID
    topNResults: 1
  ) {
    adminReports {
      id
      kaid
      districtKeyId
      status
      blobCreatedAt
      blobExpiresAt
      reportType
      startDate
      endDate
      schools
      createdAt
      fileName
      fileSize
      bands
      courseSISValues
      teacherKaids
      course {
        id
        key
        title
        translatedTitle
        masteryEnabled
        __typename
      }
      grades
      strandKey
      notifyByEmail
      __typename
    }
    error {
      code
      __typename
    }
    __typename
  }
}
    `;
export const GetLearnMenuProgressDocument = gql`
    query getLearnMenuProgress($slugs: [String!]) {
  user {
    id
    subjectProgressesBySlug(slugs: $slugs) {
      topic {
        id
        slug
        __typename
      }
      currentMastery {
        percentage
        __typename
      }
      __typename
    }
    __typename
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const LoginWithPasswordMutationDocumentString = print(LoginWithPasswordMutationDocument);
const RequestAdminReportCsvDocumentString = print(RequestAdminReportCsvDocument);
const SignUrlForReportDocumentString = print(SignUrlForReportDocument);
const KhanCoursesQueryDocumentString = print(KhanCoursesQueryDocument);
const ProgressByStudentDocumentString = print(ProgressByStudentDocument);
const CsvReportStatusDocumentString = print(CsvReportStatusDocument);
const GetLearnMenuProgressDocumentString = print(GetLearnMenuProgressDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    loginWithPasswordMutation(variables: LoginWithPasswordMutationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: LoginWithPasswordMutationMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<LoginWithPasswordMutationMutation>(LoginWithPasswordMutationDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'loginWithPasswordMutation', 'mutation', variables);
    },
    requestAdminReportCSV(variables: RequestAdminReportCsvMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: RequestAdminReportCsvMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<RequestAdminReportCsvMutation>(RequestAdminReportCsvDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'requestAdminReportCSV', 'mutation', variables);
    },
    signURLForReport(variables: SignUrlForReportMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: SignUrlForReportMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SignUrlForReportMutation>(SignUrlForReportDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signURLForReport', 'mutation', variables);
    },
    KhanCoursesQuery(variables: KhanCoursesQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: KhanCoursesQueryQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<KhanCoursesQueryQuery>(KhanCoursesQueryDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'KhanCoursesQuery', 'query', variables);
    },
    ProgressByStudent(variables: ProgressByStudentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ProgressByStudentQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ProgressByStudentQuery>(ProgressByStudentDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProgressByStudent', 'query', variables);
    },
    csvReportStatus(variables: CsvReportStatusQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CsvReportStatusQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CsvReportStatusQuery>(CsvReportStatusDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'csvReportStatus', 'query', variables);
    },
    getLearnMenuProgress(variables?: GetLearnMenuProgressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetLearnMenuProgressQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetLearnMenuProgressQuery>(GetLearnMenuProgressDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLearnMenuProgress', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;