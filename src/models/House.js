

export class House { 
    /**
   * @param {{bedrooms: number, bathrooms: number, levels: number, imgUrl: string, year: number, price: number, description?: string, id?: string}} data 
   */
     constructor(data) {
      this.id = data.id
      this.bedrooms = data.bedrooms
      this.bathrooms = data.bathrooms
      this.levels = data.levels
      this.imgUrl = data.imgUrl
      this.year = data.year
      this.price = data.price
      this.description = data.description
    }
 }
