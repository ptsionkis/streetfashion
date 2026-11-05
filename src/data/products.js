// DEMO ONLY. Replace with Base44 product and variant entities once connected.
export const products = [
  {id:'st-01',name:'Night Shift Hoodie',brand:'STATION EDIT',category:'Hoodies',priceCents:8900,tag:'NEW',colors:['Ink','Ash'],sizes:['S','M','L','XL'],stock:12,visual:'hoodie'},
  {id:'st-02',name:'District Shell Jacket',brand:'STATION EDIT',category:'Outerwear',priceCents:14900,tag:'DROP 01',colors:['Stone','Black'],sizes:['S','M','L'],stock:7,visual:'jacket'},
  {id:'st-03',name:'Pulse Runner',brand:'STATION EDIT',category:'Sneakers',priceCents:11900,tag:'HOT',colors:['Graphite'],sizes:['40','41','42','43','44'],stock:9,visual:'sneaker'},
  {id:'st-04',name:'Static Cargo Pant',brand:'STATION EDIT',category:'Bottoms',priceCents:9900,tag:'CORE',colors:['Olive','Black'],sizes:['S','M','L','XL'],stock:6,visual:'cargo'},
  {id:'st-05',name:'Grid Oversized Tee',brand:'STATION EDIT',category:'T-Shirts',priceCents:4900,tag:'NEW',colors:['Chalk','Ink'],sizes:['S','M','L','XL'],stock:19,visual:'tee'},
  {id:'st-06',name:'Signal Cap',brand:'STATION EDIT',category:'Accessories',priceCents:3400,tag:'CORE',colors:['Slate'],sizes:['ONE SIZE'],stock:22,visual:'cap'},
];
export const formatMoney = cents => new Intl.NumberFormat('el-GR',{style:'currency',currency:'EUR'}).format(cents/100);
