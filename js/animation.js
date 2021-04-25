//tạo hiệu ứng gsap
const hf = gsap.timeline();
// tạo hiệu ứng xuất hiện cho toàn trang
hf.from(".container",{
    duration:1.3,
    y:-200,
    height:0,
    opacity:0,
    ease:"power3.onOut"
})
// tạo hiệu ứng cho thanh nav
    .from(".container-nav",{
        delay:-0.3,
        y:-18, 
        opacity:0,
        duration:0.8,
        // right:10,
        ease:"power3.inOut",
        stragger:{
            amount:.5
        }
    })
    .from(".container-product_details",{
        delay:-0.2,
        y:-42, 
        opacity:0,
        duration:0.8,
        // right:10,
        ease:"power3.linearInOut",
        stagger:{
            amount:.3
        }
    })
    .from(".container-item",{
        delay:-0.4,
        x:40, 
        opacity:0,
        duration:0.9,
        // right:10,
        ease:"power3.out",
        stagger:{
            amount:.3
        }
    })
    .from(".container-title",{
        delay:-0.3,
        x:-25, 
        opacity:0,
        duration:0.9,
        // right:10,
        ease:"power3.linear",
        stagger:{
            amount:.3
        }
    })
    .from(".container-cta",{
        delay:-0.4,
        x:25, 
        opacity:0,
        duration:0.9,
        // right:10,
        ease:"power3.ease",
        stagger:{
            amount:.3
        }
    })
    .from(".container-footer",{
        delay:-0.5,
        x:25, 
        opacity:0,
        duration:0.8,
        // right:10,
        ease:"power3.linear",
        stagger:{
            amount:.3
        }
    })