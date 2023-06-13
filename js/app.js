class comment
{
    
    num;
    nom;
    titre;
    comment;
    constructor(nom, num, titre, comment)
    {
        this.nom = nom;
        this.comment = comment;
        this.num = num;
        this.titre = titre;
    }
    comm()
    {
        $('.commentebloc').append("<div class='commenter'><div class='blocint'><div class='num'><img class='imgc' src='images/" + this.num + "-etoile.png' /></div><div class='titrecom'>" + this.nom + "</div><div class='titrecomment'>" + this.titre + "</div><div class='commentercom'>" + this.comment + "</div></div></div>")
    }

}

class sc
{
    constructor(id, tocote, tr)
    {
        this.id = id;
        this.tr = true;
        this.tocote = tocote;
        this.top = id.offset().top;
    }
}

var nm = [new comment('Pascal Praud', '5', '', 'Prestation totalement à la hauteur de ce type d’établissement. La chambre en duplex était superbe. La propreté est irréprochable tout comme la qualité du mobilier et de la literie. +1 pour la superbe baignoire à l’étage! …'),
new comment('Jean Helle', '4', '', 'Nous avons passé une nuit dans la magnifique chambre dublex. L’hôtel est vraiment beau, le personnel, très chaleureux. Tous les produits sont frais'),
new comment('Mohamed Hellal', '5', '', "Endroit magnifique ! Le restaurant était particulièrement bon avec un service au top. Excellent séjour à l'hôtel Zallay, accueil et petites attentions appréciées." ),
new comment('Anne Sophie', '5', '', "Un séjour magique à la hauteur de toutes nos espérances, fabuleux. Les chambres sont magnifiques et d'une propreté irréprochable. Le service est parfait. Je tiens à adresser un message plus personnel à toute l'équipe du bar restaurant et notamment à l'attention de Chiraze qui nous a fait découvrir des cocktails délicieux, et qui a été à nos petits soins. Merci à toute l'équipe pour ce week-end magique."),
new comment('Amir Dawlat', '5', '', "Service excellent, j'ai réservé pour une nuitée. Une chambre magnifiquement bien préparée, hauteur sous plafond qui rend la chambre encore plus spacieuse, très belle décoration. Salle d'eau propre et bien entretenue. Restaurant chic et service professionnel. Bagagiste très poli, serviable et souriant. En sommes hôtel à la hauteur de mes espérances."),
new comment('Nathalie Grimaud', '4', '', "Notre séjour à l'hôtel ZALLAY a été fabuleux. La chambre était spacieuse et très propre. Une bouteille de champagne nous attendait à notre arrivée avec une petite boîte de chocolats. Une délicieuse attention pour notre anniversaire de mariage. La terrasse nous a permis de profiter ")];
commente();
function commente()
{
    for(var i = 0; i < nm.length; i++)
    {
        nm[i].comm();
    }
}

function sct()
{
    for(var i = 0; i < lists.length; i++)
    {
            console.log(lists[i].id);

        if($(window).scrollTop() > lists[i].top)
    {
        console.log('heu');
        lists[i].id.css({'transform': 'translateX(0px)', 'transition-duration': '1s'});
    }
    }
    
}

var lists = [new sc($('#im1'), 'right'), new sc($('#im2'), 'left'), new sc($('#im3'), 'right'), new sc($('#im4'), 'left')];
$(document).scroll(function(){

    sct();
})

$(document).ready(function(){
    $('.imgbac').css('height', $('.imgbacf').height() + 'px');
    $(window).scrollTop(parseInt($(window).height() * 0.02));
    for(var i = 0; i < lists.length; i++)
    {
        console.log($(window).width() - lists[i].id.offset().left)
        var t = lists[i].tocote == 'right'? $(window).width() - lists[i].id.offset().left: 0 - ($(window).width() - lists[i].id.offset().left);
        console.log(t);
        lists[i].id.css('transform', 'translateX(' + t + 'px)');
    }

})

