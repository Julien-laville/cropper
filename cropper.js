
let isResizeHandleDown = false
let isMouveHandleDown = false

let handlePositionX = 0
let handlePositionY = 0

let lastX = 0
let lastY = 0


function startCropper(ratio) {
  let cropWidth = 230
  let cropHeight = 230
  let cropPositionX = 0
  let cropPositionY = 0


  const cropZone = document.getElementById('crop-zone')
  const resizeZone = document.getElementById('resize-zone')

  cropZone.style.width = `${cropWidth}px`
  cropZone.style.height = `${cropHeight}px`
  cropZone.style.left = `${cropPositionX}px`
  cropZone.style.top = `${cropPositionY}px`


  resizeZone.onmousedown = (e) => {
    handlePositionX = cropZone.offsetLeft
    handlePositionY = cropZone.offsetTop
    cropWidth = parseFloat(cropZone.style.width.replace('px', ''))
    cropHeight = parseFloat(cropZone.style.height.replace('px', ''))
    lastX = e.screenX
    lastY = e.screenY
    isResizeHandleDown = true
    resizeZone.classList.add('crop__zone__handle--active')
  }



  cropZone.onmousedown = (e) => {

    // css
    cropZone.classList.add('crop__zone--active')

    handlePositionX = cropZone.offsetLeft
    handlePositionY = cropZone.offsetTop
    lastX = e.screenX
    lastY = e.screenY
    isMouveHandleDown = true
    console.log('down')
  }

  document.onmouseup = (e) => {
    cropZone.classList.remove('crop__zone--active')
    resizeZone.classList.remove('crop__zone__handle--active')
    isMouveHandleDown = false
    isResizeHandleDown = false
  }

  document.onmousemove = (e) => {

    if(isMouveHandleDown && !isResizeHandleDown) {
      handlePositionX = handlePositionX + (e.screenX - lastX)
      handlePositionY = handlePositionY + (e.screenY - lastY)
      cropZone.style.left = `${handlePositionX}px`
      cropZone.style.top = `${handlePositionY}px`
    } else if(isResizeHandleDown) {

      cropWidth = cropWidth + (e.screenX - lastX)
      cropHeight = cropHeight + (e.screenY - lastY)
      if(ratio) {
        cropWidth = cropHeight * ratio
      }
      cropZone.style.width = `${cropWidth}px`
      cropZone.style.height = `${ cropHeight}px`
    }

    lastX = e.screenX
    lastY = e.screenY
  }


}


function preview(x,y,w,h) {

}


 startCropper()
