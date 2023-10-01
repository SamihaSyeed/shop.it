class ApiFeatures{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;  
    }
    search(){
        const keyword = this.queryStr.keyword ? {
            $or: [ 
                { name:{
                    $regex:this.queryStr.keyword,
                    $options:"i"
                } },
                { category:{
                    $regex:this.queryStr.keyword,
                    $options:"i"
                } } 
            ]
        } : {}
        this.query = this.query.find({...keyword})
        return this;
    }
    
    filter(){
        let filterKey = {...this.queryStr}
        const removeFields = ["keyword","page","limit"]
        removeFields.forEach(key=> delete filterKey[key])
        if(filterKey.price){
            console.log("price")
            filterKey={
                price:{
                    $gte:filterKey.price
                }
            }
        } 
        
        this.query = this.query.find(filterKey)
        return this;
    }

    paginate(perPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = perPage * (currentPage-1);
        this.query = this.query.limit(perPage).skip(skip)
        return this
    }
}

module.exports = ApiFeatures