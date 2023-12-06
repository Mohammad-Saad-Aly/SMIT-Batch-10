// PROMISE JS

// let pro = new Promise((resolve,reject)=>{
//     let worldCup = 'Pakistan'
//     if(worldCup == 'India'){
//         resolve('jeet gaya')
//     }
//     else{
//         reject('Haar gaya')
//     }
// })


// pro.then(data => console.log(data))
// .catch(err => console.log(err))

// DESTRUCTURING (array, object)

// const abc = ['abc','def','ghi','jkl','mno']

// const [a,b,c,d,e] = abc

// console.log(c)


// const obj = {
//     abc: 'ABCD',
//     def: '24',
//     ghi: 'Hello world',
//     arr: [1, 2, 3]
// }

// const { abc, def, ghi, arr } = obj
// const [a,b,c] = arr

// console.log(a)

// Fetch

let obj = [
    {
        p_id : '01',
        p_des : 'Hello world',
        p_img : 'https://cubeonline.pk/cdn/shop/products/FLRC-214-B0-Burgundy-01-PDP-GALLERY-1600x1200_800x.jpg?v=1696490551'
    },

    {
        p_id : '02',
        p_des : 'Hello world',
        p_img : 'https://images.samsung.com/is/image/samsung/p6pim/pk/feature/164028106/pk-feature-minimalist-design-with-striking-style-532103593?$FB_TYPE_B_JPG$'
    },
    {
        p_id : '03',
        p_des : 'Hello world',
        p_img : 'https://www.pakmobizone.pk/wp-content/uploads/2023/03/Samsung-Galaxy-A14-Light-Green-8-819x1024.jpg'
    },
    {
        p_id : '01',
        p_des : 'Hello world',
        p_img : 'https://cubeonline.pk/cdn/shop/products/FLRC-214-B0-Burgundy-01-PDP-GALLERY-1600x1200_800x.jpg?v=1696490551'
    },

    {
        p_id : '02',
        p_des : 'Hello world',
        p_img : 'https://images.samsung.com/is/image/samsung/p6pim/pk/feature/164028106/pk-feature-minimalist-design-with-striking-style-532103593?$FB_TYPE_B_JPG$'
    },
    {
        p_id : '03',
        p_des : 'Hello world',
        p_img : 'https://www.pakmobizone.pk/wp-content/uploads/2023/03/Samsung-Galaxy-A14-Light-Green-8-819x1024.jpg'
    },
]

var products = document.getElementById('show')


for(var i =0; i < obj.length; i++){
    var pro = obj[i]
    var p = document.createElement('p')
    p.innerHTML = pro.p_id
    products.appendChild(p)

    var pdes = document.createElement('p')
    pdes.innerHTML = pro.p_des
    products.appendChild(pdes)

    var pimg = document.createElement('img')
    pimg.src = pro.p_img
    products.appendChild(pimg)
    pimg.setAttribute('width','100')

}











