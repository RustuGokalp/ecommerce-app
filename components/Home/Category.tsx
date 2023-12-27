"use client"
const Category = () => {
    const categoryList= [
        { name:'Telefon'},
        { name:'Telefon'},
        { name:'Telefon'},
        { name:'Telefon'},
        { name:'Telefon'},
        { name:'Telefon'},
        { name:'Telefon'},
    ]
  return (
    <div className="flex items-center justify-center px:3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto container">{
            categoryList.map((category,index) => (
                <button className="border text-slate-500 rounded-full min-w-[120px] flex item-center justify-center flex-1 px-4 py-2 text-center" key={index} >{category.name}</button>
            ))
        }
    </div>
  )
}

export default Category