class BugObj{
  constructor({title, bugDescription, priorityLevel, bugImg}, bugReporterId, bugReporterName, isPublic = false, bugFixed = false){
    this.title = title
    this.bugDescription = bugDescription
    this.priorityLevel = priorityLevel
    this.bugImg = bugImg
    this.bugReporterId = bugReporterId
    this.bugReporterName = bugReporterName
    this.isPublic = isPublic
    this.bugFixed = bugFixed
  }
}

export default BugObj