console.log("route.js is loaded");
const ROUTE = {
  widgetButton: async () => await widgetButtonController.view(),
  widgetCard: async () => await widgetCardController.view(),
  contactForm: async () => await contactFormController.view(),
  configuration: async () => await configurationController.view(),
  createLocalParticipant: (meeitngObj, videoContainer) =>
    configurationController.createLocalParticipant(meeitngObj, videoContainer),
  micOn: () => configurationController.mic.enable(),
  micOff: () => configurationController.mic.disable(),
  webcamOn: () => configurationController.webcam.enable(),
  wecamOff: () => configurationController.webcam.disable(),
  audioElement: (pId) => configurationController.audioElement(pId),
  setTrack: (stream, audioElement, participant, isLocal) =>
    configurationController.setTrack(
      stream,
      audioElement,
      participant,
      isLocal
    ),
  audioStreamEnable: () => configurationController.audioStreamEnable(),
  audioStreamDisable: () => configurationController.audioStreamDisable(),
  videoStreamEnable: () => configurationController.videoStreamEnable(),
  videoStreamDisable: () => configurationController.videoStreamDisable(),
  cursorVideoFrameElement: (userId, isLocalUser, show) =>
    mouseController.cursorVideoFrameElement(userId, isLocalUser, show),
  cursorVideoFrameShow: (localCursor) =>
    mouseController.cursorVideoFrameShow(localCursor),
  cursorVideoFrameHide: (localCursor) =>
    mouseController.cursorVideoFrameHide(localCursor),
  createRemoteCursorPointer: (participantId) =>
    mouseController.createRemoteCursorPointer(participantId),
  cursorHandle: (event) => mouseController.cursorHandle(event),
  cursorLoadingShow: (message) => mouseController.cursor.loading.show(message),
  cursorLoadingHide: () => mouseController.cursor.loading.hide(),
  getCursorLocation: async (event) =>
    await mouseController.cursor.location(event),
  getWindowSize: () => configurationController.getWindowSize(),
  setCDNLink: () => configurationController.setCDNLink(),
  setUserRole: () => configurationController.setUserRole(),
  getUtmInfo: async () => await configurationController.getUtmInfo(),
  getQuery: () => configurationController.getQuery(),
  getIpAddress: async () => await configurationController.getIpAddress(),
  getCountry: async (ipAddress) =>
    await configurationController.getCountry(ipAddress),
  checkUrlChanges: () => configurationController.checkUrlChanges(),
  checkMeetingVariables: () => configurationController.checkMeetingVariables(),
  generateCursorId: () => mouseController.cursor.ID(),
  scrollPosition: (pageX, pageY) => scrollController.position(pageX, pageY),
  formNotification: (isAgentAvailable) =>
    notificationController.form(isAgentAvailable),
  componentData: (componentName) => componentController.getData(componentName),
};
