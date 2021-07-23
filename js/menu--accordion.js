const openItem = item => {
    const container = item.closest(".members__item");
    const contentBlock = container.find(".members__info");
    const textBlock = contentBlock.find(".members__info-block");
    const reqHeight = textBlock.height();
    
    container.addClass("active");
    //contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.members__info');
    const itemContainer = container.find(".members__item");

    itemContainer.removeClass("active");
    //items.height(0);
}

$('.members__content').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.members');
    const elemContainer = $this.closest(".members__item.member");
    
    console.log(elemContainer)

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
        // close
    } else {
        closeEveryItem(container);
        openItem($this);
    }
});