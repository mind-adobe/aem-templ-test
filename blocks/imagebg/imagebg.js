export default function decorate(block) {
    try{
        block.children[0].children[1].classList.add('imagebg-content');
    }catch(e){
        console.error('Imagebg block is missing the required structure');
    }
}