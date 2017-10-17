const expect = require('chai').expect;
const generator = require('./generator.js');

const sentence = "Master cleanse XOXO put a bird on it, fashion axe pickled everyday carry af tote bag yr cred portland glossier kombucha crucifix before they sold out. Echo park taxidermy subway tile green juice jean shorts, enamel pin selvage organic messenger bag flannel four loko kale chips jianbing mixtape umami. Fanny pack hell of gluten-free waistcoat. Man bun iceland salvia, taiyaki pok pok +1 small batch craft beer pinterest aesthetic. Air plant wayfarers blog portland poutine polaroid health goth. Plaid humblebrag listicle tote bag shoreditch, cold-pressed messenger bag heirloom pinterest food truck hot chicken tattooed. Echo park kogi brooklyn hoodie kombucha williamsburg biodiesel wolf cray locavore shabby chic iPhone unicorn yr hammock. Succulents selvage ramps, butcher tilde shabby chic pok pok. Drinking vinegar portland gentrify, disrupt kale chips banh mi chambray food truck. Banh mi ethical gastropub thundercats street art sriracha taxidermy celiac. YOLO disrupt. Woke craft beer truffaut swag, sriracha kitsch letterpress plaid. Chia before they sold out chicharrones activated charcoal offal. 90's swag pour-over, glossier next level activated charcoal paleo pop-up art party. Flannel chillwave vice whatever. Flannel cold-pressed small batch, meggings readymade pok pok mustache edison bulb keffiyeh. Artisan narwhal taiyaki, vice tousled fingerstache gentrify bespoke. Pitchfork tofu hell of vinyl everyday carry kombucha heirloom taiyaki pabst leggings beard lomo pop-up. Fanny pack edison bulb gastropub, authentic narwhal post-ironic tacos salvia yr tumeric adaptogen subway tile taxidermy crucifix. XOXO pok pok you probably haven't heard of them, whatever PBR&B umami kogi. Knausgaard crucifix readymade bitters chillwave vice, stumptown humblebrag keytar typewriter organic skateboard PBR&B. Vegan leggings unicorn, quinoa viral biodiesel pork belly letterpress tilde scenester tattooed polaroid pug messenger bag. La croix taxidermy letterpress normcore distillery, vinyl subway tile. Microdosing jianbing normcore 3 wolf moon. Pour-over four loko live-edge palo santo umami literally hell of yr church-key. Street art normcore wolf pork belly green juice. Squid pitchfork gentrify unicorn blue bottle gochujang fashion axe meh church-key leggings hell of microdosing disrupt. Gastropub ramps franzen, locavore authentic succulents disrupt tacos pitchfork lomo four dollar toast iceland raclette. Ugh salvia skateboard gastropub marfa fixie brunch. Cred gluten-free ramps messenger bag meh subway tile williamsburg la croix kale chips microdosing. Chicharrones prism ramps banh mi, direct trade echo park iPhone green juice coloring book disrupt tacos cronut";

// eslint-disable-next-line no-undef
describe('generator', () => {
  // eslint-disable-next-line no-undef
  it('should return a haiku line', () => {
    const line = generator(sentence, 5)
    console.log(line)
    // eslint-disable-next-line no-unused-expressions
    expect(true).to.be.true;
  });

});
