export default function( id, left, top, mouseX, mouseY, speed ) {
    let obj = document.getElementById( id );
    let parentObj = obj.parentNode,
    containerWidth = parseInt( parentObj.offsetWidth ),
    containerHeight = parseInt( parentObj.offsetHeight );
    obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
    obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}