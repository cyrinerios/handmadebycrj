
function sendToSheet(data){
 if(!SHEET_URL)return;
 try{fetch(SHEET_URL,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(Object.assign({token:SHEET_TOKEN},data)),keepalive:true}).catch(()=>{})}catch(e){}
}
const P = [
 {id:1,n:"Blush Rose Bouquet",c:"Roses",p:85,d:"Seven soft pink crochet roses with green leaves.",col:["#f4a6c0","#f7c6d6","#e98aab"]},
 {id:2,n:"Cream Tulip Bunch",c:"Tulips",p:70,d:"Ten cream and peach tulips, wrapped in kraft paper.",col:["#fff0d6","#fbd9b8","#fff6e5"]},
 {id:3,n:"Daisy Sunshine Posy",c:"Daisies",p:55,d:"A cheerful mini posy of white daisies with golden centres.",col:["#ffffff","#fff4c9","#fde7ef"]},
 {id:4,n:"Lavender Dream Mix",c:"Mixed",p:120,d:"Lilac, pink and cream mixed blooms, 12 stems.",col:["#cdb4e6","#f4a6c0","#fff0d6"]},
 {id:5,n:"Bridal White Peonies",c:"Roses",p:180,d:"Luxurious cream peonies with pearl accents for brides.",col:["#fffaf2","#fbe3e9","#fff0d6"]},
 {id:6,n:"Mini Sunflower Gift",c:"Daisies",p:60,d:"Three bright sunflowers with a satin ribbon.",col:["#f7c948","#f2b134","#fbd86b"]},
 {id:7,n:"Rosy Garden Grand",c:"Mixed",p:220,d:"Our grandest 20-stem pink and cream garden bouquet.",col:["#e98aab","#f7c6d6","#fff0d6","#f4a6c0"]},
 {id:8,n:"Peach Blossom Pot",c:"Tulips",p:95,d:"Peach blossoms arranged in a crochet-wrapped pot.",col:["#fbc3a5","#fde0cf","#f7a98b"]}
];
// ★ Stock levels: product id → pieces available. 0 = sold out. Update these numbers whenever your stock changes.
const STOCK={1:5,2:4,3:8,4:3,5:2,6:6,7:2,8:4};
P.forEach(p=>{p.stock=STOCK[p.id]??0;p.k="Bouquets"});
P.push({id:9,n:"Luna Stitch Crochet Crossbody",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:249,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1788116490575_9fcd7db8-c9b0-4fb7-98e5-83a8ec9db4d9_GV_50.webp"},{id:10,n:"Olive Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786644971001_4e5a2a55-7441-4533-b3ef-3a0bd3415cc6_GV_50.webp"},{id:11,n:"Light Gray Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786645156604_6dadef5e-964c-48f0-bf13-645971c58a97_GV_50.webp"},{id:12,n:"Amara Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786547531009_e85ecbee-6f98-4798-aa74-589f3b8ad6e0_GV_50.webp"},{id:13,n:"Light Pink Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786547472180_788c97a9-7f97-4c66-92ab-ba8771db846c_GV_50.webp"},{id:14,n:"Lilac Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786547574735_991d72d2-54b8-4b9a-863f-b242faa657c2_GV_50.webp"},{id:15,n:"Lavender Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786547657792_e0f834f3-0209-4870-8621-fc5fc327b2aa_GV_50.webp"},{id:16,n:"Fuschia Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786644458460_0aaa01fb-6fa8-400e-b7c4-88ed27850824_GV_50.webp"},{id:17,n:"Blush Bloom Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786644508906_d8020a9f-bbbb-4fe7-b227-02f886b84daa_GV_50.webp"},{id:18,n:"Burgundy Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786644605184_811f5c8e-7b3b-4107-8816-8bb53e750292_GV_50.webp"},{id:19,n:"Navy Blue Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786644662382_043a003b-09d8-423e-bb50-9078623101d2_GV_50.webp"},{id:20,n:"Skyline Crossbody Bag",c:"Crossbody",k:"Bags",d:"Handmade crochet crossbody bag.",p:300,stock:1,col:["#f4a6c0"],img:"https://d2oi1rqwb0pj00.cloudfront.net/community-images/physical_product/common/nio_1786644787074_8c4da99e-6616-40d0-b505-7406d88acca1_GV_50.webp"});
const stockTag=x=>x.stock<=0?`<span class="note">Sold out – message us for a made-to-order</span>`:x.stock<=3?`<span class="note" style="color:var(--pink);font-weight:700">Only ${x.stock} left</span>`:`<span class="note">In stock</span>`;
const $=s=>document.querySelector(s);
const AED=n=>"AED "+n;
function bloom(x,y,r,c){let s="";for(let i=0;i<6;i++){const a=i*Math.PI/3;s+=`<circle cx="${(x+Math.cos(a)*r).toFixed(1)}" cy="${(y+Math.sin(a)*r).toFixed(1)}" r="${r*.8}" fill="${c}" stroke="#0001"/>`}return s+`<circle cx="${x}" cy="${y}" r="${r*.6}" fill="#f7d774" stroke="#0001"/>`}
function art(p){if(p.img)return `<img src="${p.img}" alt="${p.n}" loading="lazy">`;const pos=[[100,52,17],[64,72,15],[136,72,15],[82,98,15],[118,98,15],[100,78,14]];
 let s=`<svg viewBox="0 0 200 200" role="img" aria-label="${p.n}"><rect width="200" height="200" fill="#f6e9e5"/>`;
 [[100,150,100,100],[100,150,66,82],[100,150,134,82],[100,150,84,104],[100,150,116,104]].forEach(l=>s+=`<path d="M${l[0]} ${l[1]} L${l[2]} ${l[3]}" stroke="#7fa882" stroke-width="4"/>`);
 s+=`<ellipse cx="72" cy="112" rx="14" ry="6" fill="#8fb893" transform="rotate(-30 72 112)"/><ellipse cx="128" cy="112" rx="14" ry="6" fill="#8fb893" transform="rotate(30 128 112)"/>`;
 pos.forEach((q,i)=>s+=bloom(q[0],q[1],q[2],p.col[i%p.col.length]));
 s+=`<path d="M62 130 L138 130 L112 186 L88 186 Z" fill="#fff4e6" stroke="#e8c9b4"/><path d="M80 150 L120 150" stroke="#e0658f" stroke-width="5" stroke-linecap="round"/></svg>`;return s}
let cart={},cat="All";
try{cart=JSON.parse(localStorage.getItem("cart")||"{}")}catch(e){}
function save(){try{localStorage.setItem("cart",JSON.stringify(cart))}catch(e){}}
const COLLECTION=document.body.dataset.collection||"";
function card(x){return `<div class="card">${art(x)}<div class="b"><h3>${x.n}</h3><p>${x.d}</p><div class="row"><span class="price">${AED(x.p)}</span>${x.stock>0?`<button class="btn" onclick="add(${x.id})">Add to basket</button>`:`<button class="btn" disabled style="opacity:.5;cursor:not-allowed">Sold out</button>`}</div>${stockTag(x)}</div></div>`}
function renderShop(){
 const grid=$("#grid");if(!grid)return;
 const items=P.filter(x=>x.k==COLLECTION);
 const cats=["All",...new Set(items.map(x=>x.c))];
 $("#filters").innerHTML=cats.length>2?cats.map(c=>`<button class="chip ${c==cat?"on":""}" onclick="cat='${c}';renderShop()">${c}</button>`).join(""):"";
 const shown=items.filter(x=>cat=="All"||x.c==cat);
 grid.innerHTML=shown.length?shown.map(card).join(""):`<p class="empty">${grid.dataset.empty||"New pieces are coming soon."}</p>`;
 const sec=grid.closest("section");if(sec&&grid.dataset.hideEmpty&&!items.length)sec.style.display="none";
}
function add(id){const p=P.find(x=>x.id==id);if(!p)return;if((cart[id]||0)>=p.stock){alert("Sorry, only "+p.stock+" of this item available.");return}cart[id]=(cart[id]||0)+1;save();renderCart();openCart()}
function chg(id,d){const p=P.find(x=>x.id==id);if(!p)return;const n=(cart[id]||0)+d;if(n>p.stock){alert("Sorry, only "+p.stock+" of this item available.");return}cart[id]=n;if(n<=0)delete cart[id];save();renderCart()}
function renderCart(){
 const ids=Object.keys(cart).filter(id=>P.find(x=>x.id==id));let t=0,n=0;
 $("#items").innerHTML=ids.length?ids.map(id=>{const p=P.find(x=>x.id==id);t+=p.p*cart[id];n+=cart[id];
  return `<div class="item">${art(p)}<div><strong>${p.n}</strong><br><span class="note">${AED(p.p)}</span></div><div class="qty"><button onclick="chg(${id},-1)" aria-label="Less">−</button>${cart[id]}<button onclick="chg(${id},1)" aria-label="More">+</button></div></div>`}).join(""):`<p class="note" style="padding:20px 0">Your basket is empty. Add something to get started 🌸</p>`;
 $("#total").textContent=AED(t);$("#count").textContent=n;$("#orderForm").style.display=ids.length?"grid":"none";
}
function openCart(){$("#drawer").classList.add("open");$("#veil").classList.add("open")}
function closeCart(){$("#drawer").classList.remove("open");$("#veil").classList.remove("open")}
function wa(msg){window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,"_blank")}
$("#orderForm").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target);let t=0;
 const lines=Object.keys(cart).filter(id=>P.find(x=>x.id==id)).map(id=>{const p=P.find(x=>x.id==id);t+=p.p*cart[id];return `• ${cart[id]} × ${p.n} – ${AED(p.p*cart[id])}`});
 sendToSheet({type:"order",website:f.get("website")||"",name:f.get("name"),phone:f.get("phone"),email:f.get("email"),emirate:f.get("emirate"),address:f.get("addr"),deliveryDate:f.get("date")||"",items:lines.join("\n"),total:t,gift:f.get("gift")||""});
 wa(`Hello Handmade by CRJ! I’d like to order:\n${lines.join("\n")}\n\nTotal: ${AED(t)} (excl. delivery)\n\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email")}\nEmirate: ${f.get("emirate")}\nAddress: ${f.get("addr")}\nDelivery date: ${f.get("date")||"Flexible"}\nGift message: ${f.get("gift")||"-"}`)});
if($("#customForm")){
$("#photo").addEventListener("change",e=>{const t=$("#thumbs");t.innerHTML="";const fs=[...e.target.files].slice(0,3);if(e.target.files.length>3){alert("Please choose up to 3 photos.");e.target.value="";return}fs.forEach(f=>{const i=document.createElement("img");i.src=URL.createObjectURL(f);i.alt="Inspiration photo";i.style.cssText="width:84px;height:84px;object-fit:cover;border-radius:12px;border:1.5px solid var(--line)";t.appendChild(i)})});
$("#customForm").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target);
 sendToSheet({type:"custom",website:f.get("website")||"",name:f.get("name"),phone:f.get("phone"),email:f.get("email"),itemType:f.get("item"),occasion:f.get("occ"),quantity:f.get("num"),budget:f.get("budget"),colours:f.get("colors"),link:f.get("link")||"",notes:f.get("notes")||""});
 wa(`Hello Handmade by CRJ! Custom request:\nItem: ${f.get("item")}\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email")}\nOccasion: ${f.get("occ")}\nQuantity: ${f.get("num")}\nBudget: ${f.get("budget")?AED(f.get("budget")):"Open"}\nColours / design: ${f.get("colors")}\nDetails: ${f.get("notes")||"-"}\nInspiration link: ${f.get("link")||"-"}\nInspiration photo(s): ${$("#photo").files.length?$("#photo").files.length+" photo(s), I’ll attach in this chat now 📎":"none"}`)});
}
if($("#waChat"))$("#waChat").href=`https://wa.me/${WA}?text=${encodeURIComponent("Hello Handmade by CRJ! I have a question.")}`;
function fixCart(){Object.keys(cart).forEach(id=>{const p=P.find(x=>x.id==id);if(!p||p.stock<=0)delete cart[id];else if(cart[id]>p.stock)cart[id]=p.stock});save()}
renderShop();renderCart();
// Products and stock come from the Google Sheet (Product Listing + Finished Goods Inventory).
// If the sheet cannot be reached, the built-in bouquets above stay in use.
(function(){
 if(!SHEET_URL)return;
 const clean=t=>String(t==null?"":t).replace(/[<>&"'\\`]/g,"").trim();
 const colById={};P.forEach(x=>colById[x.id]=x.col);
 const fallback=[["#f4a6c0","#f7c6d6","#fff0d6"],["#cdb4e6","#f4a6c0","#fff0d6"],["#fff0d6","#fbd9b8","#fff6e5"],["#f7c948","#f2b134","#fbd86b"]];
 fetch(SHEET_URL+"?action=products").then(r=>r.json()).then(j=>{
  if(!j||!j.ok||!Array.isArray(j.products)||!j.products.length)return;
  const list=j.products.filter(x=>x&&x.id>0&&x.p>0&&x.n).map((x,i)=>({id:Number(x.id),n:clean(x.n),c:clean(x.c)||"Other",k:clean(x.k)||"Bouquets",img:/^https:\/\//.test(String(x.img||""))?String(x.img).replace(/["'<>\s]/g,""):"",d:clean(x.d),p:Number(x.p),stock:Math.max(0,Math.floor(Number(x.stock)||0)),col:colById[x.id]||fallback[i%fallback.length]}));
  if(!list.length)return;
  P.length=0;list.forEach(x=>P.push(x));
  cat="All";fixCart();renderShop();renderCart();
 }).catch(()=>{});
})();
