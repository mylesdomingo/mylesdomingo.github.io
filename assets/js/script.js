class Image {
    constructor(name, title, color, category){
        this.name = name;
        this.title = title;
        this.color = color;
        this.category = category;
    }
}



$(document).ready(function() {
    //jQuery Function Number 1
    $('#nav-text').localScroll({duration:800});
    var waypoints = $('.transition').waypoint({
        handler: function(direction) {
            console.log(this.element.id);
            if(direction == 'down' && this.element.id == "design-display"){
                $("#design-display").css('opacity', 1)
                $("#design-display").fadeIn(500);
                $("#design-display").css('transform', 'translateY(0px)');
                $("#design-section-text-wrapper").css('opacity', 1)
                $("#design-section-text-wrapper").fadeIn(500);
                $("#design-section-text-wrapper").css('transform', 'translateY(0px)');
            }
            else if(direction == 'down'){
                $("#" + this.element.id).css('opacity', 1)
                //jQuery Function Number 2
                $("#" + this.element.id).fadeIn(500);
                $("#" + this.element.id).css('transform', 'translateY(0px)');
            }
        },
        offset: '80%'
    });




    function set_dist(){
        width = $("#carousel-container").css('width');
        return parseInt(width.substring(0, width.length - 2)) *-1;
    }
    function set_bg(){
        distanceToNextImage = set_dist();
        change_info(images[currentImageNumber]);
        // jQuery Function Number 3
        $("#carousel-strip").css("transition", '0.0s');
        $("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
    }
    function set_gallery(){
        result = []
        green = "#00DFB8";
        blue = "#007AFF";
        yellow = "#EAD700";
        // lol sorry
        result.push(new Image("itsalook", "its a look", green, "Photography | Personal Work"));
        result.push(new Image("saveset", "save design", blue, "Logo Design | Product Branding"));
        result.push(new Image("bearstickers", "bear stickers", yellow , "Logo Design | Personal Work"));
        result.push(new Image("berkeleytime", "berkeley-time", blue, "Web Illustration | Innovative Design"));
        result.push(new Image("cherryblossom", "cherry blossom", yellow, "Pixel Art | Personal Work"));
        result.push(new Image("workinprogress", "work in progress", green, "Duotones | Personal Work"));
        result.push(new Image("classshirts", "school apparel", blue, "Logo Design | Apparel"));
        result.push(new Image("moffit", "moffit rebrand", yellow, "Logo Design | Personal Work"));
        result.push(new Image("blockbytes", "blockbytes", blue, "Logo Design | Innovative Design"));
        result.push(new Image("helloworld", "hello world!", yellow, "Typography | Personal Work"));
        return result;
    }
    function shift(direction){
        return (currentImageNumber + totalImages + direction) % totalImages;
    }
    function gallery_move(){
        $("#carousel-strip").css("transition", "0.6s");
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
    }
    function change_info(image){
        $("#design-category-box").css("transition", "0.4s");
        $("#design-category-box").css("background-color", image.color);
        //jQuery Function Number 4
        $("#design-title").text(image.title);
        $("#design-tags").text(image.category);
        $("#design-number").text(currentImageNumber + 1 + "/10");
    }

    let distanceToNextImage = set_dist();
    let currentImageNumber = 0;
    let itsalook = new Image("its a look", "yellow", "hi");
    let images = set_gallery();
    let totalImages = images.length;
    set_bg();

    for(var i = 0; i < totalImages; i++){
        let img_file = "url('assets/images/" + images[i].name + ".png')";
        // jQuery Function Number 5
        $("#carousel-strip").append("<div class='carousel-section' id='" + images[i].name + "'></div>");
        $("#" + images[i].name).css('background-image', img_file);
    }

    $(window).resize(function() {
        distanceToNextImage = set_dist();
        set_bg();
    });

    // jQuery Function Number 6
	$("#rightarrow").click(function() {
        currentImageNumber = shift(1);
		gallery_move();
        change_info(images[currentImageNumber]);
	});

	$("#leftarrow").click(function() {
        currentImageNumber = shift(-1);
		gallery_move();
        change_info(images[currentImageNumber]);
	});
});
