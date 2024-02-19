export const userColumns=[
    {field:"id", headerName:"ID", width: 70 },
    {field:"username",headerName:"User",width:230,renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
            
        )
    }},
    {
        field:"email",headerName:"Email",width:300,
    },
    {
        field:"age",headerName:"Age",width:100,
    },
    {
        field:"status",
        headerName:"status",
        width:150,
        renderCell:(params)=>{
            return<div className={` cellWithstatus ${params.row.status}`}> {params.row.status}</div>
        },
    }
    
]

//DB Columns
export const DBColumns=[
    {field:"id", headerName:"ID", width: 70 },
    {field:"username",headerName:"Name",width:230,renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
            
        )
    }},
    {
        field:"email",headerName:"Email",width:300,
    },
    {
        field:"status",
        headerName:"status",
        width:150,
        renderCell:(params)=>{
            return<div className={` cellWithstatus ${params.row.status}`}> {params.row.status}</div>
        },
    }
    
]
//Hotel column
export const HotelColumns=[
    {field:"id", headerName:"ID", width: 70 },
    {field:"username",headerName:"Hotel",width:230,renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
            
        )
    }},
    {
        field:"email",headerName:"Email",width:300,
    },
    ,{
        field:"phone",headerName:"phone",width:100,
    },
    {
        field:"status",
        headerName:"status",
        width:150,
        renderCell:(params)=>{
            return<div className={` cellWithstatus ${params.row.status}`}> {params.row.status}</div>
        },
    },
    {
        field:"place",headerName:"place",width:150,
    }
    
]

//order column
export const OrderColumns=[
    {field:"id", headerName:"ID", width: 70 },
    {field:"product",headerName:"product",width:230,renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.product}
            </div>
            
        )
    }},
    {field:"username", headerName:"username", width: 160 },
    {
        field:"order_time",headerName:"order_time",width:90,
    },
    {
        field:"Total",headerName:"Total",width:90,
    },{
        field:"DB",headerName:"DB",width:120,
    },{
        field:"Payment",headerName:"Payment",width:70,
    },
    {
        field:"status",
        headerName:"status",
        width:150,
        renderCell:(params)=>{
            return<div className={` cellWithstatus ${params.row.status}`}> {params.row.status}</div>
        },
    }
    
]


//temporary data
export const  DBRows=[
    {
        id:1,
        username:"Sajal P T",
        img:"https://img.freepik.com/free-photo/front-view-portrait-businessman-with-glasses_23-2148816831.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701648000&semt=ais",
        status:"active",
        email:"sajalpt@gmail.com",
    },
    {
        id:2,
        username:"Nishad",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy50BUmqL3TwTGBoMlKdc4XKIZn6GPOlrgeNF-MgOpx7r6aeF1_u7p3ZeLYq_3fdhV2wI&usqp=CAU",
        status:"passive",
        email:"snishad@gmail.com",
    },
    {
        id:3,
        username:"Sreyas prasanth",
        img:"https://img.freepik.com/free-photo/young-man-with-beard-round-glasses_273609-6191.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais",
        status:"pending",
        email:"sreyas@gmail.com",
    },
    {
        id:4,
        username:"Midhun Santhosh",
        img:"https://img.freepik.com/free-photo/close-up-portrait-serious-attractive-man-student-with-dark-bristle-wears-spectacles_273609-17371.jpg",
        status:"active",
        email:"msanthoshidhun@gmail.com",
    },
    {
        id:5,
        username:"Noorul Ameen",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2LQ8cSqXGBRKwHo8rIyCW8B5pYo2X9ry0M5h1oYjjwZsKRicreY57RirqlmjuhbX6Qc&usqp=CAU",
        status:"passive",
        email:"nooru@gmail.com",
    },
    {
        id:6,
        username:"Hima Madhu",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDMOtwEeME33MIRO_Jfe3Vismgdn0b36nz0hI-oIoAKI-uADkD1gH3OWquoJOkXlgBcA&usqp=CAU",
        status:"active",
        email:"himamadhuu@gmail.com",
    },
    {
        id:7,
        username:"Swetha Satheesh",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7LQoyCoW6PLoeOfxTd88x6X4uiaIrVu72vGi4-720OT-lxjiefIHKr9M9DTodlS0mq8&usqp=CAU",
        status:"pending",
        email:"swethasatheesh@gmail.com",
    },
    {
        id:8,
        username:"Muhammed Shaharas",
        img:"https://img.freepik.com/free-photo/young-bearded-man-with-round-glasses-denim-shirt_273609-12127.jpg",
        status:"active",
        email:"shahaharas@gmail.com",
        age:20,
    },

];

export const  HotelRows=[
    {
        id:1,
        username:"Hotel Nandanam",
        img:"https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
        place:"Kochi",
        phone:"8590089307",
        email:"nandanam@gmail.com",
        status:"active"
    },
    {
        id:2,
        username:"Hotel Krishnaprabha",
        img:"data:image/png;base64,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",
        place:"Muvattupuzha",
        phone:"8590089307",
        email:"kp@gmail.com",
        status:"active"
    },
    {
        id:3,
        username:"Chick chic",
        img:"https://t10589978.p.clickup-attachments.com/t10589978/39af3a33-794f-4706-b921-19e71c372394/image.png",
        place:"Kochi",
        phone:"8590089307",
        email:"chicchick@gmail.com",
        status:"Denied"
    },
    {
        id:4,
        username:"Hotel Nandanam",
        img:"https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
        place:"Kochi",
        phone:"8590089307",
        email:"nandanam@gmail.com",
        status:"active"
    },
    {
        id:5,
        username:"Hotel Nandanam",
        img:"https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
        place:"Kochi",
        phone:"8590089307",
        email:"nandanam@gmail.com",
        status:"active"
    },
    {
        id:6,
        username:"Hotel Nandanam",
        img:"https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
        place:"Kochi",
        phone:"8590089307",
        email:"nandanam@gmail.com",
        status:"active"
    },
    {
        id:7,
        username:"Hotel Nandanam",
        img:"https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
        place:"Kochi",
        phone:"8590089307",
        email:"nandanam@gmail.com",
        status:"active"
    },
    {
        id:8,
        username:"Hotel Nandanam",
        img:"https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
        place:"Kochi",
        phone:"8590089307",
        email:"nandanam@gmail.com",
        status:"active"
    },{
        id:9,
        username:"Hotel Nandanam",
        img:"https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
        place:"Kochi",
        phone:"8590089307",
        email:"nandanam@gmail.com",
        status:"active"
    }

];

//temporary data
export const userRows=[
    {
        id:1,
        username:"Sajal P T",
        img:"https://img.freepik.com/free-photo/front-view-portrait-businessman-with-glasses_23-2148816831.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701648000&semt=ais",
        status:"active",
        email:"sajalpt@gmail.com",
        age:23,
    },
    {
        id:2,
        username:"Nishad",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy50BUmqL3TwTGBoMlKdc4XKIZn6GPOlrgeNF-MgOpx7r6aeF1_u7p3ZeLYq_3fdhV2wI&usqp=CAU",
        status:"passive",
        email:"snishad@gmail.com",
        age:21,
    },
    {
        id:3,
        username:"Sreyas prasanth",
        img:"https://img.freepik.com/free-photo/young-man-with-beard-round-glasses_273609-6191.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais",
        status:"pending",
        email:"sreyas@gmail.com",
        age:20,
    },
    {
        id:4,
        username:"Midhun Santhosh",
        img:"https://img.freepik.com/free-photo/close-up-portrait-serious-attractive-man-student-with-dark-bristle-wears-spectacles_273609-17371.jpg",
        status:"active",
        email:"msanthoshidhun@gmail.com",
        age:21,
    },
    {
        id:5,
        username:"Noorul Ameen",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2LQ8cSqXGBRKwHo8rIyCW8B5pYo2X9ry0M5h1oYjjwZsKRicreY57RirqlmjuhbX6Qc&usqp=CAU",
        status:"passive",
        email:"nooru@gmail.com",
        age:21,
    },
    {
        id:6,
        username:"Hima Madhu",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDMOtwEeME33MIRO_Jfe3Vismgdn0b36nz0hI-oIoAKI-uADkD1gH3OWquoJOkXlgBcA&usqp=CAU",
        status:"active",
        email:"himamadhuu@gmail.com",
        age:21,
    },
    {
        id:7,
        username:"Swetha Satheesh",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7LQoyCoW6PLoeOfxTd88x6X4uiaIrVu72vGi4-720OT-lxjiefIHKr9M9DTodlS0mq8&usqp=CAU",
        status:"pending",
        email:"swethasatheesh@gmail.com",
        age:20,
    },
    {
        id:8,
        username:"Muhammed Shaharas",
        img:"https://img.freepik.com/free-photo/young-bearded-man-with-round-glasses-denim-shirt_273609-12127.jpg",
        status:"active",
        email:"shahaharas@gmail.com",
        age:20,
    },

];

//temporary data
export const OrderRows=[
    {
        id:1,
        username:"Sajal P T",
        product:"KuzhiMandhi",
        img:"https://t4.ftcdn.net/jpg/03/24/50/53/360_F_324505357_SWfRhx7862SwygH4jHJAbXPdgKA3nxm6.jpg",
        order_time:"10:30pm",
        Total:"390/-",
        DB:"Amal",
        Payment:"Online",
        status:"Order Accepted",
    },
    {
        id:2,
        username:"sreyas Prasanth",
        product:"Biriyani",
        img:"https://t4.ftcdn.net/jpg/04/18/22/51/360_F_418225186_OCtaNADfMMtBWBwTTOTJYcyjuRMQIqjW.jpg",
        order_time:"10:00pm",
        Total:"190/-",
        DB:"Nakul",
        Payment:"Online",
        status:"picked up",
    },
    {
        id:3,
        username:"Midhun Santhosh",
        product:"Porotta and Beef Curry Combo",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAE0SUDxYr1rDtMHlHAs-Atolyy62uiehI6kHGqxrTg&s",
        order_time:"10:30pm",
        Total:"190/-",
        DB:"Adhith ",
        Payment:"COD",
        status:"DB Assigned",
    },
    {
        id:4,
        username:"Hima",
        product:"KuzhiMandhi",
        img:"https://t4.ftcdn.net/jpg/03/24/50/53/360_F_324505357_SWfRhx7862SwygH4jHJAbXPdgKA3nxm6.jpg",
        order_time:"10:30pm",
        Total:"390/-",
        DB:"Amal",
        Payment:"Online",
        status:"Delivered",
    },
    
    
];