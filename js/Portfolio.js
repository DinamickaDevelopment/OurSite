$(function () {
    $("#elastic_grid_demo").elastic_grid({
        'showAllText': 'All',
        'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
        'hoverDirection': true,
        'hoverDelay': 0,
        'hoverInverse': false,
        'expandingSpeed': 500,
        'expandingHeight': 500,
        'items':
        [
           
            {
                'title': 'Single Zoo',
                'description': 'SingleZoo company spesialty is pet grooming and veterinarian services. SingleZoo website is developed for small business with all required features. Mobile friendly and elegant website is the best choice to bring your company to the right customers via Internet.',
                'thumbnail': ['images/Portfolio/small/SingleZoo_250x250.jpg', 'images/Portfolio/small/SingleZoo_250x250_2.jpg', 'images/Portfolio/small/SingleZoo_250x250_3.jpg'],
                'large': ['images/Portfolio/large/SingleZoo_500x500.jpg', 'images/Portfolio/large/SingleZoo_500x500_2.jpg', 'images/Portfolio/large/SingleZoo_500x500_3.jpg'],
                'button_list':
                [
                    
                    { 'title': 'View', 'url': 'http://singlezoo.hol.es/', 'new_window': true }
                ],
                'tags': ['Portrait']
            },
           
            {
                'title': 'Real estate services',
                'description': 'Elegant and responsive design for real estate service website. Pixel - perfect development were done according to all client`s requirements. As the result there is informative and modern website.',
                'thumbnail': ['images/Portfolio/small/AM_250x250_1.jpg', 'images/Portfolio/small/AM_250x250_2.jpg', 'images/Portfolio/small/AM_250x250_3.jpg'],
                'large': ['images/Portfolio/large/AM_500x500_1.jpg', 'images/Portfolio/large/AM_500x500_2.jpg', 'images/Portfolio/large/AM_500x500_3.jpg'],
                'button_list':
                [
                ],
                'tags': ['Portrait']
            },
            {
                'title': 'BrainStorm',
                'description': 'Our client wanted a parallax and animation and we built a front-end page in HTML CSS, JavaScript and JQuery.',
                'thumbnail': ['images/Portfolio/small/BrainStorm_250x250_1.jpg', 'images/Portfolio/small/BrainStorm_250x250_2.jpg', 'images/Portfolio/small/BrainStorm_250x250_3.jpg'],
                'large': ['images/Portfolio/large/BrainStorm_500x500_1.jpg', 'images/Portfolio/large/BrainStorm_500x500_2.jpg', 'images/Portfolio/large/BrainStorm_500x500_3.jpg'],
                'button_list':
                [
                    { 'title': 'View', 'url': 'http://dinamickadevelopment.github.io/Nousles/', 'new_window': true }
                    
                ],
                'tags': ['Portrait']
            },
            {
                'title': 'Coffee',
                'description': 'Creative layout in vector, as a template of landing page for cafe.There was no client so we oriented just on our ideas.',
                'thumbnail': ['images/Portfolio/small/Coffee_250x250_1.jpg', 'images/Portfolio/small/Coffee_250x250_2.jpg', 'images/Portfolio/small/Coffee_250x250_3.jpg'],
                'large': ['images/Portfolio/large/Coffee_500x500_1.jpg', 'images/Portfolio/large/Coffee_500x500_2.jpg', 'images/Portfolio/large/Coffee_500x500_3.jpg'],
                'button_list':
                [                    
                ],
                'tags': ['Portrait']
            },
            {
                'title': 'FMXA',
                'description': 'Website for marketing agency. We have created redesign for website and branding guidelines from scratch to improve user experience, enhance usability for visual elements. I have also enlarged amount of content according to documents provided by client.',
                'thumbnail': ['images/Portfolio/small/FMXA_250x250_1.jpg', 'images/Portfolio/small/FMXA_250x250_2.jpg', 'images/Portfolio/small/FMXA_250x250_3.jpg'],
                'large': ['images/Portfolio/large/FMXA_500x500_1.jpg', 'images/Portfolio/large/FMXA_500x500_2.jpg', 'images/Portfolio/large/FMXA_500x500_3.jpg'],
                'button_list':
                [
                    { 'title': 'View', 'url': 'http://fmxa.co.uk/', 'new_window': true }
                    
                ],
                'tags': ['Portrait']
            },
            {
                'title': 'Dreams',
                'description': "Colorful layout  was made to fulfil designer's idea and has its own plot. This design will be perfect choice for creative companies, services and goods for kids or art cafe.",
                'thumbnail': ['images/Portfolio/small/Dreams_250x250_1.jpg', 'images/Portfolio/small/Dreams_250x250_2.jpg', 'images/Portfolio/small/Dreams_250x250_3.jpg'],
                'large': ['images/Portfolio/large/Dreams_500x500_1.jpg', 'images/Portfolio/large/Dreams_500x500_2.jpg', 'images/Portfolio/large/Dreams_500x500_3.jpg'],
                'button_list':
                [                    
                ],
                'tags': ['Portrait']
            },
             {
                 'title': 'MYH Fine Wines',
                 'description': "Web site for exclusive distributor of Zalto Glassware brand in Hong Kong, Macau and mainland China. Company needed nice elegant design along with intuitive functionality. Web site has three different custom slaiders, custom contact and subscription forms.",
                 'thumbnail': ['images/Portfolio/small/MYH_250x250_1.jpg', 'images/Portfolio/small/MYH_250x250_2.jpg', 'images/Portfolio/small/MYH_250x250_3.jpg'],
                 'large': ['images/Portfolio/large/MYH_500x500_1.jpg', 'images/Portfolio/large/MYH_500x500_2.jpg', 'images/Portfolio/large/MYH_500x500_3.jpg'],
                 'button_list':
                 [
                     { 'title': 'View', 'url': 'http://myhfinewines.com/index.html', 'new_window': true }
                 ],
                 'tags': ['Portrait']
             },
              {
                  'title': 'Landing page for a restaurant',
                  'description': "Sophisticated and eye-catching landing page template for restaurant. Fine design and great user experience in one mock up. We have no client for this design yet, so you can easily order it.",
                  'thumbnail': ['images/Portfolio/small/lambda_250x250_1.jpg', 'images/Portfolio/small/lambda_250x250_2.jpg', 'images/Portfolio/small/lambda_250x250_3.jpg'],
                  'large': ['images/Portfolio/large/lambda_500x500_1.jpg', 'images/Portfolio/large/lambda_500x500_2.jpg', 'images/Portfolio/large/lambda_500x500_3.jpg'],
                  'button_list':
                  [
                  ],
                  'tags': ['Portrait']
              },
        ]
    });

    $("li.portrait").addClass("animated_delete_fill-mode");
    $("li.portrait:nth-child(4n+1)").addClass(" fadeInLeft anim "); // Left 1&5
    $("li.portrait:nth-child(4n+4)").addClass(" fadeInRight anim "); // Right 4&8
    $("li.portrait").slice(1, 3).addClass(" fadeInDown anim "); //Down 2&3
    $("li.portrait").slice(5, 7).addClass(" fadeInUp anim "); //Down 6&7
    
    

});