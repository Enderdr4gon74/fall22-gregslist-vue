

export class Job { 
  /**
   * @param {{company: string, jobTitle: string, hours: number, rate: number, description?: string, id?: string}} data 
   */
   constructor(data) {
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description || ""
    this.id = data.id
  }
 }
