$(document).ready(function () {
    console.log("working js")
    let weapons = [
        {
            "name": "44_pistol",
            "ammo":32,
            "damage": 48,
            "fire_rate": 6,
            "range": 199,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99
        },
        {
            "name": "10mm_pistol",
            "damage": 18,
            "ammo":230,
            "fire_rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight": 4.2,
            "value": 43
        },
        {
            "name": "assault_rifle",
            "damage": 108,
            "ammo":40,
            "fire_rate": 60,
            "range": 299,
            "accuracy": 64,
            "weight": 5.2,
            "value": 100
        }
    ];

    ///removing the existing class
    $(".item-list a").on("click",function (e){
        $('.item-list a').removeClass('active');
        $('.item-list a').addClass('active');
    });


    // displaying the values of different guns
    $('.item-list a').on('mouseenter',function (e) {
        // console.log("heloo");
        let current_item = $(e.currentTarget).attr('class');
        // console.log(current_item);
        for(item in weapons) {
            if ( weapons[item].name == current_item) {
                // console.log(weapon[item]);
                let container = $('.items-stats .row');
                container.find('.amo').html(weapons[item].ammo);
                container.find('.damage').html(weapons[item].damage);
                container.find('.fire').html(weapons[item].fire_rate);
                container.find('.range').html(weapons[item].range);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
            }
        }
        // for(item in weapon){
        //     if (weapon[item].name == current_item){
        //         console.log(weapon[item]);
        //         let container = $('.items-stats');
        //         container.find('.amo').html(weapon[item].ammo);
        //         container.find('.damage').html(weapon[item].damage);
        //         container.find('.fire').html(weapon[item].fire_rate);
        //         container.find('.range').html(weapon[item].range);
        //         container.find('.accuracy').html(weapon[item].accuracy);
        //         container.find('.weight').html(weapon[item].weight);
        //         container.find('.value').html(weapon[item].value);
        //     }
        //
        // }
    });
});