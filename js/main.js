
var app = new Vue({
    el:"#app",
    data:{
        products:[
            {
                id:1, 
                title:"Grape_Biancone",
                name:"Biancone", 
                short_text:'Biancone is a light-skinned grape variety from the Marche region of eastern central Italy, although it seems to have commanded greater respect in its newly adopted home in Australia. It produces relatively bright, fruit-driven wines in its Southern Hemisphere incarnation, and is particularly favored as an ingredient in sweet wine from Victoria, where some of the world finest Muscats are produced.',
                image:"01_Biancone.jpg",
                desc:"Full desc"},
            {
                id:2, 
                title:"Grape_Brun-Fourca",
                name:"Brun Fourca",
                short_text:'Brun Fourca is an ancient red wine grape variety associated with wines of the miniscule Palette appellation in Provence, southern France. It is permitted as a minor constituent in both rosé and red wines from Palette, alongside the dominant Grenache, Syrah, Mourvèdre and Cinsault varieties.',
                image:"02_Brun-Fourca.jpg",
                desc:"Full desc"},
            {
                id:3, 
                title:"Grape_Bigolona",
                name:"Bigolona",
                short_text:'Bigolona is an ancient and rare Italian white wine variety native to the northeastern Veneto region. It is particularly susceptible to Botrytis cinerea and thus is predominantly used in sweet passito wines – those made from grapes that are dried before fermentation.',
                image:"03_Bigolona.jpg",
                desc:"Full desc"},
            {
                id:4, 
                title:"Grape_Abrustine",
                name:"Abrustine",
                short_text:'Abrustine (Abrostine) is an ancient – and near-extinct – red wine grape from Tuscany. At present just one producer, Podere Santa Felicità, is making wines from the variety.The wine, made from 100 percent',
                image:"04_Abrustine.jpg",
                desc:"Full desc"},
            {
                id:5, 
                title:"Grape_Rebo",
                name:"Rebo",
                short_text:"Rebo is a dark-skinned crossing of Merlot and Teroldego created by agronomist Rebo Rigotti in Trentino, Italy. Originally it was thought to be a crossing of Marzemino and Merlot, but genomic testing has since disproved this.",
                image:"05_Rebo.jpg",
                desc:"Full desc"}
        ]
    }

})