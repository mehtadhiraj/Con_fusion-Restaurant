$(document).ready(function(){
            // $('#carousel-button').click(function(){
            //     if ($('#carousel-button').children('span').hasClass('fa-pause')) {
            //         $("#mycarousel").carousel('pause');
            //         $("#carousel-button").children('span').removeClass('fa-pause');
            //         $("#carousel-button").children('span').addClass('fa-play');    
            //     } else {
            //         $("#mycarousel").carousel('cycle');
            //         $("#carousel-button").children('span').removeClass('fa-play');
            //         $("#carousel-button").children('span').addClass('fa-pause');
            //     }
        // });
            //$('[data-toggle="tooltip"]').tooltip();
            $('#mycarousel').carousel({interval:5000});
            $('#mycarousel').hover(function(){
                $("#mycarousel").carousel("pause");
            });
            $('#mycarousel').mouseleave(function(){
                $("#mycarousel").carousel("cycle");
            });
            $("#login").click(function(){
                $('#loginModal').modal('show');
            });
            $("#reserveTable").click(function(){
                $('#reserveTableModal').modal('show');
            });
        });