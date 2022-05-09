import { appFragment, appUserFragment } from './fragments';

export const UPDATE_APP = `
  mutation AppsUpdate($appKey: String!, $appParams: Any!){
    appsUpdate(appKey: $appKey, appParams: $appParams){
      errors
      app{
        ${appFragment}
      }
    }
  }
`;

export const IMPORT_CONTACTS = `
  mutation ImportContact($appKey: String!, $appParams: Any!){
    importContacts(appKey: $appKey, appParams: $appParams){
      errors
    }
  }
`;

export const DESTROY_APP = `
  mutation AppsUpdate($appKey: String!){
    appsDestroy(appKey: $appKey){
      errors
    }
  }
`;

export const CREATE_APP = `
  mutation AppsCreate($appParams: Any!, $operation: String){
    appsCreate(appParams: $appParams, operation: $operation){
      errors
      app{
        ${appFragment}
      }
    }
  }
`;

export const APP_USER_UPDATE_STATE = `
  mutation AppUserUpdateData($appKey: String!, $id: String!, $state: String!){
    appUserUpdateData(appKey: $appKey, id: $id, state: $state){
      ${appUserFragment}
    }
  }
`;

export const APP_USER_UPDATE = `
  mutation UpdateAppUser($appKey: String!, $id: String!, $options: Any!){
    updateAppUser(appKey: $appKey, id: $id, options: $options){
      ${appUserFragment}
    }
  }
`;

export const APP_USER_CREATE = `
  mutation CreateAppUser($appKey: String!, $options: Any!){
    createAppUser(appKey: $appKey, options: $options){
      ${appUserFragment}
      errors
    }
  }
`;

export const APP_USER_PROFILE_CREATE = `
  mutation CreateExternalProfile($appKey: String!, $userId: String!, $provider: String!, $profileId: String!){
    createExternalProfile(appKey: $appKey, userId: $userId, provider: $provider, profileId: $profileId ){
      profile {
        id,
        data,
        profileId
        provider
      }
      errors
    }
  }
`;

export const APP_USER_PROFILE_UPDATE = `
  mutation UpdateExternalProfile($appKey: String!, $id: String!, $profileId: String!){
    updateExternalProfile(appKey: $appKey, id: $id, profileId: $profileId ){
      profile {
        id,
        data,
        profileId
        provider
      }
      errors
    }
  }
`;

export const APP_USER_PROFILE_DELETE = `
  mutation DeleteExternalProfile($appKey: String!, $id: String!){
    deleteExternalProfile(appKey: $appKey, id: $id){
      profile {
        id,
        data,
        profileId
        provider
      }
      errors
    }
  }
`;

export const SYNC_EXTERNAL_PROFILE = `
  mutation SyncExternalProfile($appKey: String!, $id: String!, $provider: String!){
    syncExternalProfile(appKey: $appKey, id: $id, provider: $provider){
      ${appUserFragment}
    }
  }
`;

export const START_CONVERSATION = `
  mutation StartConversation($appKey: String!, $id: String, $message: MessageInput!){
    startConversation(appKey: $appKey, id: $id, message: $message){
      conversation{
        id
        key
        state 
        readAt
        priority
        assignee {
          id
          email
          name
          avatarUrl
        }
        mainParticipant{
          id
          email
          properties
          avatarUrl
          displayName
        }

        lastMessage{
          source
          createdAt
          key
          message{
            htmlContent
            textContent
            serializedContent
            blocks
          }
          privateNote
          messageSource{
            id
            type
          }
          appUser {
            id
            email
            kind
            displayName
            avatarUrl
          }
        }
      }
    }
  }
`;

export const INSERT_COMMMENT = `
  mutation InsertComment($appKey: String!, $id: String!, $message: MessageInput!){
    insertComment(appKey: $appKey, id: $id, message: $message){
      message{
        key
        message{
          htmlContent
          textContent
          serializedContent
          blocks
        }
        readAt
        appUser{
          id
          email
          kind
          displayName
          avatarUrl
        }
        source
        messageSource {
          name
          state
          fromName
          fromEmail
          serializedContent
        }
        emailMessageId
      }
    }
  }
`;

export const TYPING_NOTIFIER = `
  mutation TypingNotifier($appKey: String!, $id: String!){
    typingNotifier(appKey: $appKey, id: $id, ){
      message
    }
  }
`;

export const INSERT_APP_BLOCK_COMMMENT = `
  mutation InsertAppBlockComment($appKey: String!, $id: String!, $controls: Any!){
    insertAppBlockComment(appKey: $appKey, id: $id, controls: $controls){
      message{
        key
        readAt
        source
        emailMessageId
        message{
          htmlContent
          textContent
          serializedContent
          blocks
        }
        appUser{
          id
          email
          kind
          displayName
          avatarUrl
        }
        messageSource {
          name
          state
          fromName
          fromEmail
          serializedContent
        }
      }
    }
  }
`;

export const SEND_TRIGGER = `
  mutation SendTrigger($appKey: String!, $conversationId: String!, $triggerId: String!){
    sendTrigger(appKey: $appKey, conversationId: $conversationId, triggerId: $triggerId){
      conversation{
        id
        key
        state 
        readAt
        priority
      }
    }
  }
`;

export const INSERT_NOTE = `
  mutation InsertNote($appKey: String!, $id: String!, $message: MessageInput!){
    insertNote(appKey: $appKey, id: $id, message: $message){
      message{
        message{
          htmlContent
          textContent
          serializedContent
        }
        key
        readAt
        createdAt
        source
        emailMessageId
        appUser{
          id
          email
          kind
          displayName
          avatarUrl
        }
        messageSource {
          name
          state
          fromName
          fromEmail
          serializedContent
        }
      }
    }
  }
`;

export const ASSIGN_USER = `
  mutation AssignUser($appKey: String!, $conversationId: String!, $appUserId: String!){
    assignUser(appKey: $appKey, conversationId: $conversationId, appUserId: $appUserId){
      conversation{
        id
        state 
        readAt
        priority
        assignee {
          id
          email
          name
          avatarUrl
        }
        mainParticipant{
          id
          email
          properties
          avatarUrl
          displayName
        }
      }
    }
  }
`;

export const CREATE_ASSIGNMENT_RULE = `
  mutation CreateAssignmentRule($appKey: String!, $agentId: String!, $title: String!, $conditions: [Any!]!){
    createAssignmentRule(appKey: $appKey, agentId: $agentId, title: $title, conditions: $conditions){
      errors
      assignmentRule{
        id
        title
        conditions
        state
        agent{
          id
          email
          avatarUrl
        }
        state
      }
    }
  }
`;

export const UPDATE_RULE_PRIORITIES = `
  mutation UpdateRulePriorities($appKey: String!, $rules: [Any!]!){
    updateRulePriorities(appKey: $appKey, rules: $rules){
      errors
    }
  }
`;

export const EDIT_ASSIGNMENT_RULE = `
  mutation EditAssignmentRule($appKey: String!, $ruleId: String!, $agentId: String!, $title: String!, $conditions: [Any!]!){
    editAssignmentRule(appKey: $appKey, ruleId: $ruleId, agentId: $agentId, title: $title, conditions: $conditions){
      errors
      assignmentRule{
        id
        title
        conditions
        state
        agent{
          id
          email
          avatarUrl
        }
        state
      }
    }
  }
`;

export const DELETE_ASSIGNMENT_RULE = `
  mutation DeleteAssignmentRule($appKey: String!, $ruleId: String! ){
    deleteAssignmentRule(appKey: $appKey, ruleId: $ruleId){
      errors
      assignmentRule{
        id
        title
        conditions
        state
        agent{
          id
          email
          avatarUrl
        }
        state
      }
    }
  }
`;

export const UPDATE_CONVERSATION_TAG_LIST = `
  mutation UpdateConversationTags($appKey: String!, $conversationId: String!, $tagList: [String!]!){
    updateConversationTags(appKey: $appKey, conversationId: $conversationId, tagList: $tagList){
      conversation{
        id
        state 
        readAt
        priority
        tagList
        assignee {
          id
          email
          name
          avatarUrl
        }
        mainParticipant{
          id
          email
          properties
          avatarUrl
          displayName
        }
      }
    }
  }
`;

export const UPDATE_CONVERSATION_STATE = `
  mutation UpdateConversationState($appKey: String!, $conversationId: String!, $state: String!){
    updateConversationState(appKey: $appKey, conversationId: $conversationId, state: $state){
      conversation{
        id
        state 
        readAt
        priority
        assignee {
          id
          email
          name
          avatarUrl
        }
        mainParticipant{
          id
          email
          properties
          avatarUrl
          displayName
        }
      }
    }
  }
`;

export const TOGGLE_CONVERSATION_PRIORITY = `
  mutation ToggleConversationPriority($appKey: String!, $conversationId: String!){
    toggleConversationPriority(appKey: $appKey, conversationId: $conversationId){
      conversation{
        id
        state 
        readAt
        priority
        assignee {
          id
          email
          name
          avatarUrl
        }
        mainParticipant{
          id
          email
          properties
          avatarUrl
          displayName
        }
      }
    }
  }
`;

export const UPDATE_CAMPAIGN = `
  mutation UpdateCampaign($appKey: String!, $id: String!, $campaignParams: Any!){
    campaignUpdate(appKey: $appKey, id: $id, campaignParams: $campaignParams){
      errors
      campaign {
        name
        id
        type
        url
        serializedContent
        segments
        scheduledAt
        scheduledTo
        state
        subject
        timezone
        description
        statsFields
        configFields
        fromName
        fromEmail
        replyEmail
        steps
        bannerData
        hiddenConstraints
      }
    }
  }
`;

export const DELETE_CAMPAIGN = `
  mutation DeleteCampaign($appKey: String!, $id: String!){
    campaignDelete(appKey: $appKey, id: $id){
      errors
      campaign {
        id
      }
    }
  }
`;

export const DELIVER_CAMPAIGN = `
  mutation DeliverCampaign($appKey: String!, $id: String!, ){
    campaignDeliver(appKey: $appKey, id: $id){
      errors
      campaign {
        name
        id
        type
        url
        serializedContent
        segments
        scheduledAt
        scheduledTo
        state
        subject
        timezone
        description
        statsFields
        configFields
        fromName
        fromEmail
        replyEmail
        steps
      }
    }
  }
`;

export const PURGE_METRICS = `
  mutation PurgeMetrics($appKey: String!, $id: String!, ){
    purgeMetrics(appKey: $appKey, id: $id){
      errors
      campaign {
        name
        id
        type
        serializedContent
        segments
        scheduledAt
        scheduledTo
        state
        subject
        timezone
        description
        statsFields
        configFields
        fromName
        fromEmail
        replyEmail
      }
    }
  }
`;

export const CREATE_CAMPAIGN = `
  mutation CreateCampaign($appKey: String!, $campaignParams: Any!, $operation: String, $mode: String!){
    campaignCreate(operation: $operation, appKey: $appKey, mode: $mode, campaignParams: $campaignParams){
      errors
      campaign {
        name
        id
        type
        url
        serializedContent
        segments
        scheduledAt
        scheduledTo
        state
        subject
        timezone
        description
        statsFields
        configFields
        fromName
        fromEmail
        replyEmail
        steps
        bannerData
      }
    }
  }
`;

export const PREDICATES_SEARCH = `
  mutation PredicatesSearch($appKey: String!, $search: Any!, $page: Int, $per: Int){
    predicatesSearch(appKey: $appKey, search: $search, page: $page, per: $per){
      appUsers{
        collection{
          id
          email
          avatarUrl
          os
          osVersion
          lastVisitedAt
          browser
          state
          displayName
          online
          tagList
          referrer
          ip
          city
          region
          country
          lat
          lng
          postal
          webSessions
          timezone
          browser
          browserVersion
          browserLanguage
          lang
          properties
        }
        meta
      }
    }
  }
`;

export const PREDICATES_DELETE = `
  mutation PredicatesDelete($appKey: String!, $id: String,){
    predicatesDelete(appKey: $appKey, id: $id){
      segment {
        name
      }
    }
  }
`;

export const PREDICATES_CREATE = `
  mutation PredicatesCreate($appKey: String!, $name: String!, $predicates: Any!){
    predicatesCreate(appKey: $appKey, name: $name, predicates: $predicates){
      segment {
        id
        name
        predicates{
          comparison
          type
          value
          attribute
        }
      }
    }
  }
`;

export const PREDICATES_UPDATE = `
  mutation PredicatesUpdate($appKey: String!, $predicates: Any!, $id: String){
    predicatesUpdate(appKey: $appKey, predicates: $predicates, id: $id){
      segment {
        id
        name
        predicates {
          comparison
          type
          value
          attribute
        }
      }
    }
  }
`;

export const WEBHOOK_DELETE = `
  mutation WebhookDelete($appKey: String!, $id: String!){
    deleteWebhook(appKey: $appKey, id: $id){
      webhook
      errors
    }
  }
`;

export const WEBHOOK_CREATE = `
  mutation WebhookCreate($appKey: String!, $url: String!, $tags: Any!, $state: String!){
    createWebhook(appKey: $appKey, url: $url, tags: $tags, state: $state){
      webhook
      errors
    }
  }
`;

export const WEBHOOK_UPDATE = `
  mutation WebhookUpdate($appKey: String!, $url: String!, $state: String!, $tags: Any!, $id: String!){
    updateWebhook(appKey: $appKey, url: $url, tags: $tags, id: $id, state: $state){
      webhook
      errors
    }
  }
`;

export const CLONE_MESSAGE = `
  mutation CloneMessage($appKey: String!, $id: String!){
    cloneMessage(appKey: $appKey, id: $id){
      id
      errors
    }
  }
`;

export const QUICK_REPLY_CREATE = `
  mutation QuickReplyCreate($appKey: String!, $title: String!, $content: String!, $lang: String){
    createQuickReply(appKey: $appKey, title: $title, content: $content, lang: $lang){
      quickReply {
        id
        title
        content
      }
      errors
    }
  }
`;

export const QUICK_REPLY_UPDATE = `
  mutation QuickReplyUpdate($appKey: String!, $title: String!, $content: String!, $id: String!, $lang: String ){
    updateQuickReply(appKey: $appKey, title: $title, content: $content, id: $id, lang: $lang ){
      quickReply {
        id
        title
        content
      }
      errors
    }
  }
`;

export const QUICK_REPLY_DELETE = `
  mutation QuickReplyDelete($appKey: String!, $id: String! ){
    deleteQuickReply(appKey: $appKey, id: $id){
      quickReply {
        id
      }
      errors
    }
  }
`;

export const INVITE_AGENT = `
  mutation InviteAgent($appKey: String!, $email: String!){
    inviteAgent(appKey: $appKey, email: $email){
      agent {
        email
        avatarUrl
        name
      }
    }
  }
`;

export const UPDATE_AGENT = `
  mutation UpdateAgent($appKey: String!, $email: String!, $params: Any!){
    updateAgent(appKey: $appKey, email: $email, params: $params){
      agent {
        email
        avatarUrl
        name
        lang
      }
    }
  }
`;

export const UPDATE_AGENT_ROLE = `
  mutation UpdateAgentRole($appKey: String!, $id: String!, $params: Any!){
    updateAgentRole(appKey: $appKey, id: $id, params: $params){
      agent {
        id
        email
        avatarUrl
        name
        lang
        agentId
      }
    }
  }
`;

export const DESTROY_AGENT_ROLE = `
  mutation DestroyAgentRole($appKey: String!, $id: String!){
    destroyAgentRole(appKey: $appKey, id: $id){
        agent {
          id
        }
      }
  }
`;

export const CREATE_ARTICLE = `
  mutation CreateArticle($appKey: String!, $content: Any!, $title: String!, $lang: String){
    createArticle(appKey: $appKey, content: $content, title: $title, lang: $lang){
      article {
        id
        title
        slug
        content
        state
        author{
          email
          avatarUrl
          id
          name
        }
      }
    }
  }
`;

export const EDIT_ARTICLE = `
  mutation EditArticle($appKey: String!, $content: Any, $id: String!, $title: String!, $description: String!, $lang: String){
    editArticle(appKey: $appKey, content: $content, id: $id, title: $title, description: $description, lang: $lang){
      article {
        id
        title
        slug
        content
        state
        author{
          email
          avatarUrl
          id
          name
        }
      }
    }
  }
`;

export const ARTICLE_BLOB_ATTACH = `
  mutation ArticleBlobAttach($appKey: String!, $id: String!, $blobId: String!){
    articleBlobAttach(appKey: $appKey, id: $id, blobId: $blobId){
      article {
        id
        title
        slug
        content
        state
        author{
          email
          avatarUrl
          id
          name
        }
      }
    }
  }
`;

export const TOGGLE_ARTICLE = `
  mutation ToggleArticle($appKey: String!, $id: String!, $state: String!){
    toggleArticle(appKey: $appKey, id: $id, state: $state){
      article {
        id
        title
        slug
        content
        state
        author{
          email
          avatarUrl
          id
          name
        }
      }
    }
  }
`;

export const ARTICLE_ASSIGN_AUTHOR = `
  mutation AssignAuthor($appKey: String!, $id: String!, $authorId: String!){
    assignAuthor(appKey: $appKey, id: $id, authorId: $authorId){
      article {
        id
        title
        slug
        content
        state
        author{
          email
          avatarUrl
          id
          name
        }
      }
    }
  }
`;

export const DELETE_ARTICLE = `
  mutation DeleteArticle($appKey: String!, $id: String!){
    deleteArticle(appKey: $appKey, id: $id){
      article {
        id
        title
        slug
        content
        state
      }
    }
  }
`;

export const CREATE_DIRECT_UPLOAD = `
  mutation CreateDirectUpload($filename: String!, $contentType: String!, $checksum: String!, $byteSize: Int!){
    createDirectUpload( input: { 
      filename: $filename, 
      contentType: $contentType, 
      checksum: $checksum, 
      byteSize: $byteSize 
    }){
      directUpload {
        signedBlobId
        url
        headers
        blobId
        serviceUrl
      }
    }
  }
`;

export const CREATE_URL_UPLOAD = `
  mutation CreateUrlUpload($url: String!){
    createUrlUpload( input: { 
      url: $url,
    }){
      directUpload {
        signedBlobId
        url
        headers
        blobId
        serviceUrl
      }
    }
  }
`;

export const REORDER_ARTICLE = `
  mutation ReorderArticle( $appKey: String!, $id: String!, $position: Int!, $section: String, $collection: String){
    reorderArticle( appKey: $appKey, id: $id, position: $position, section: $section, collection: $collection ){
      article{
        id
        position
      }
    }
  }
`;

export const ARTICLE_COLLECTION_CREATE = `
  mutation ArticleCollectionCreate($appKey: String!, $title: String!, $description: String){
    articleCollectionCreate( 
      appKey: $appKey, 
      title: $title, 
      description: $description
    ){
      collection{
        id
        title
        description
      }
      errors
    }
  }
`;

export const ARTICLE_COLLECTION_CHANGE = `
  mutation ChangeCollectionArticle($appKey: String!, $id: String!, $collectionId: String!){
    changeCollectionArticle( 
      appKey: $appKey, 
      id: $id, 
      collectionId: $collectionId
    ){
      article {
        id
        title
        slug
        content
        state
        author{
          email
          id
          name
        }
      }
    }
  }
`;

export const ARTICLE_COLLECTION_EDIT = `
  mutation ArticleCollectionEdit($appKey: String!, $id: String!, $title: String!, $description: String, $lang: String, $icon: String){
    articleCollectionEdit( 
      appKey: $appKey, 
      title: $title, 
      id: $id,
      description: $description,
      lang: $lang,
      icon: $icon
    ){
      collection{
        id
        title
        description
        icon
      }
      errors
    }
  }
`;

export const ARTICLE_COLLECTION_DELETE = `
  mutation ArticleCollectionDelete($appKey: String!, $id: String!){
    articleCollectionDelete( 
      appKey: $appKey, 
      id: $id,
    ){
      collection{
        id
      }
    }
  }
`;

export const ARTICLE_COLLECTION_REORDER = `
  mutation ArticleCollectionReorder( $appKey: String!, $id: String!, $idAfter: String! ){
    articleCollectionReorder( appKey: $appKey, id: $id, idAfter: $idAfter ){
      collection{
        id
        title
        description
        icon
      }
    }
  }
`;

export const ARTICLE_SECTION_CREATE = `
  mutation ArticleSectionCreate($appKey: String!, $title: String!, $collectionId: String!, $lang: String){
    articleSectionCreate( 
      appKey: $appKey, 
      title: $title, 
      collectionId: $collectionId,
      lang: $lang
    ){
      section{
        id
        title
        description
        articles {
          id
          title
        }
      }
    }
  }
`;

export const ARTICLE_SECTION_EDIT = `
  mutation ArticleSectionEdit($appKey: String!, $title: String!, $id: String!, $collectionId: String!, $lang: String){
    articleSectionEdit( 
      appKey: $appKey, 
      title: $title,
      collectionId: $collectionId
      id: $id,
      lang: $lang
    ){
      section{
        id
        title
        description
      }
    }
  }
`;

export const ARTICLE_SECTION_DELETE = `
  mutation ArticleSectionDelete($appKey: String!, $id: String!){
    articleSectionDelete( 
    appKey: $appKey,
    id: $id
    ){
      section{
        id
      }
    }
  }
`;

export const ADD_ARTICLES_TO_COLLECTION = `
  mutation AddArticlesToCollection($appKey: String!, $collectionId: String!, $articlesId: [String!]!){
    addArticlesToCollection( 
      appKey: $appKey,
      collectionId: $collectionId,
      articlesId: $articlesId
    ){
      collection{
        id
      }
    }
  }
`;

export const ARTICLE_SETTINGS_UPDATE = `
  mutation ArticleSettingsUpdate($appKey: String!, $settings: Any!){
    articleSettingsUpdate( 
      appKey: $appKey,
      settings: $settings
    ){
      settings{
        id
        subdomain
        domain
        siteTitle
        siteDescription
        website
        googleCode
        color
        facebook
        twitter
        linkedin
        credits
        logo
        headerImage
        translations
        availableLanguages
      }
      errors
    }
  }
`;

export const ARTICLE_SETTINGS_DELETE_LANG = `
  mutation ArticleSettingsDeleteLan($appKey: String!, $langItem: String!){
    articleSettingsDeleteLang( 
      appKey: $appKey,
      langItem: $langItem
    ){
      settings{
        id
        subdomain
        siteTitle
        siteDescription
        website
        googleCode
        color
        facebook
        twitter
        linkedin
        credits
        logo
        headerImage
        translations
        availableLanguages
      }
      errors
    }
  }
`;

export const CREATE_BOT_TASK = `
  mutation CreateBotTask($appKey: String!, $params: Any!){
    createBotTask( 
      appKey: $appKey,
      params: $params,
    ){
      botTask{
        id
        title
        segments
        scheduling
        state
        urls
        botType
        paths {
          id
          title
          followActions
        }
      }
      errors
    }
  }
`;

export const UPDATE_BOT_TASK = `
  mutation UpdateBotTask($appKey: String!, $id: String!, $params: Any!){
    updateBotTask( 
      appKey: $appKey,
      params: $params,
      id: $id
    ){
      botTask{
        id
        title
        scheduling
        segments
        state
        urls
        botType
        paths {
          id
          title
          steps
          followActions
        }
      }
      errors
    }
  }
`;

export const DELETE_BOT_TASK = `
  mutation DeleteBotTask($appKey: String!, $id: String!){
    deleteBotTask( 
      appKey: $appKey,
      id: $id
    ){
      botTask{
        id
      }
      errors
    }
  }
`;

export const REORDER_BOT_TASK = `
  mutation ReorderBotTask( $appKey: String!, $id: String!, $idAfter: String!, $mode: String ){
    reorderBotTask( appKey: $appKey, id: $id, idAfter: $idAfter, mode: $mode ){
      botTask{
        id
        position
      }
    }
  }
`;

export const CREATE_OAUTH_APP = `
  mutation CreateOauthApplication($appKey: String!, $params: Any!){
    createOauthApplication( 
      appKey: $appKey,
      params: $params,
    ){
      oauthApplication{
        name
        redirectUri
        secret
        uid
      }
      errors
    }
  }
`;

export const UPDATE_OAUTH_APP = `
  mutation UpdateOauthApplication($appKey: String!, $uid: String!, $params: Any!){
    updateOauthApplication( 
      appKey: $appKey,
      params: $params,
      uid: $uid
    ){
      oauthApplication{
        name
        redirectUri
        secret
        uid
        scopes
      }
      errors
    }
  }
`;

export const DELETE_OAUTH_APP = `
  mutation DeleteOauthApplication($appKey: String!, $uid: String!){
    deleteOauthApplication( 
      appKey: $appKey,
      uid: $uid
    ){
      oauthApplication{
        name
        redirectUri
        secret
        uid
      }
      errors
    }
  }
`;

export const CREATE_INTEGRATION = `
  mutation CreateIntegration($appKey: String!, $appPackage: String! , $params: Any!){
    integrationsCreate(appKey: $appKey, appPackage: $appPackage, params: $params){
      errors
      integration {
        id
        name
        settings
        definitions
        icon
        state
        description
        hookUrl
      }
    }
  }
`;

export const UPDATE_INTEGRATION = `
  mutation UpdateIntegration($appKey: String!, $id: String!, $params: Any!){
    integrationsUpdate(appKey: $appKey, id: $id, params: $params){
      errors
      integration {
        id
        name
        settings
        definitions
        icon
        state
        description
        hookUrl
      }
    }
  }
`;

export const DELETE_INTEGRATION = `
  mutation DeleteIntegration($appKey: String!, $id: String!){
    integrationsDelete(appKey: $appKey, id: $id){
      errors
      integration {
        id
        name
        settings
        definitions
        icon
        state
        description
      }
    }
  }
`;

export const CREATE_PACKAGE = `
  mutation CreatePackage($appKey: String!, $params: Any!){
    appPackagesCreate(appKey: $appKey, params: $params){
      errors
      appPackage {
        id
        name
        icon
        state
        name
        definitions
        description
        apiUrl
        contentUrl
        initializeUrl
        configureUrl
        submitUrl
        sheetUrl
        capabilities
        capabilityList
        tagList
        oauthUrl
      }
    }
  }
`;

export const UPDATE_PACKAGE = `
  mutation UpdatePackage($appKey: String!, $id: String!, $params: Any!){
    appPackagesUpdate(appKey: $appKey, id: $id, params: $params){
      errors
      appPackage {
        id
        name
        icon
        state
        name
        definitions
        description
        apiUrl
        contentUrl
        initializeUrl
        configureUrl
        submitUrl
        sheetUrl
        capabilities
        capabilityList
        tagList
        oauthUrl
      }
    }
  }
`;

export const DELETE_PACKAGE = `
  mutation DeletePackage($appKey: String!, $id: String!){
    appPackagesDelete(appKey: $appKey, id: $id){
      errors
      appPackage {
        id
        name
        icon
        state
        name
        definitions
        description
        apiUrl
        contentUrl
        initializeUrl
        configureUrl
        submitUrl
        sheetUrl
        capabilities
        capabilityList
        tagList
        oauthUrl
      }
    }
  }
`;

export const PUSH_EVENT = `
  mutation PushEvent($appKey: String!, $id: String!, $data: Any!){
    pushEvent(appKey: $appKey, id: $id, data: $data){
      status
    }
  }
`;

export default {
  PUSH_EVENT,
  UPDATE_APP,
  IMPORT_CONTACTS,
  DESTROY_APP,
  CREATE_APP,
  APP_USER_UPDATE_STATE,
  APP_USER_UPDATE,
  APP_USER_CREATE,
  SYNC_EXTERNAL_PROFILE,
  START_CONVERSATION,
  INSERT_COMMMENT,
  TYPING_NOTIFIER,
  INSERT_APP_BLOCK_COMMMENT,
  SEND_TRIGGER,
  INSERT_NOTE,
  ASSIGN_USER,
  CREATE_ASSIGNMENT_RULE,
  UPDATE_RULE_PRIORITIES,
  EDIT_ASSIGNMENT_RULE,
  DELETE_ASSIGNMENT_RULE,
  UPDATE_CONVERSATION_TAG_LIST,
  UPDATE_CONVERSATION_STATE,
  TOGGLE_CONVERSATION_PRIORITY,
  UPDATE_CAMPAIGN,
  DELETE_CAMPAIGN,
  DELIVER_CAMPAIGN,
  PURGE_METRICS,
  CREATE_CAMPAIGN,
  PREDICATES_SEARCH,
  PREDICATES_DELETE,
  PREDICATES_CREATE,
  PREDICATES_UPDATE,
  WEBHOOK_DELETE,
  WEBHOOK_CREATE,
  WEBHOOK_UPDATE,
  CLONE_MESSAGE,
  QUICK_REPLY_CREATE,
  QUICK_REPLY_UPDATE,
  QUICK_REPLY_DELETE,
  INVITE_AGENT,
  UPDATE_AGENT,
  UPDATE_AGENT_ROLE,
  DESTROY_AGENT_ROLE,
  CREATE_ARTICLE,
  EDIT_ARTICLE,
  ARTICLE_BLOB_ATTACH,
  TOGGLE_ARTICLE,
  ARTICLE_ASSIGN_AUTHOR,
  DELETE_ARTICLE,
  CREATE_DIRECT_UPLOAD,
  CREATE_URL_UPLOAD,
  REORDER_ARTICLE,
  ARTICLE_COLLECTION_CREATE,
  ARTICLE_COLLECTION_CHANGE,
  ARTICLE_COLLECTION_EDIT,
  ARTICLE_COLLECTION_DELETE,
  ARTICLE_COLLECTION_REORDER,
  ARTICLE_SECTION_CREATE,
  ARTICLE_SECTION_EDIT,
  ARTICLE_SECTION_DELETE,
  ADD_ARTICLES_TO_COLLECTION,
  ARTICLE_SETTINGS_UPDATE,
  ARTICLE_SETTINGS_DELETE_LANG,
  CREATE_BOT_TASK,
  UPDATE_BOT_TASK,
  DELETE_BOT_TASK,
  REORDER_BOT_TASK,
  CREATE_OAUTH_APP,
  UPDATE_OAUTH_APP,
  DELETE_OAUTH_APP,
  CREATE_INTEGRATION,
  UPDATE_INTEGRATION,
  DELETE_INTEGRATION,
  CREATE_PACKAGE,
  UPDATE_PACKAGE,
  DELETE_PACKAGE,
  APP_USER_PROFILE_CREATE,
  APP_USER_PROFILE_UPDATE,
  APP_USER_PROFILE_DELETE,
};
