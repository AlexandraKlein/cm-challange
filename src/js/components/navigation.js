import $ from 'jquery/dist/jquery.min';
import navigation from '../../navigation';

export default class Navigation {

  constructor() {
    this.handleRenderListItems();
    this.handleItemSelect();
    this.handleGetPosition($('li.active'));
    $(window).resize(() => this.handleGetPosition($('li.active')));
  }

  handleRenderListItems() {
    const listItems = navigation.cities.map((city, index) => {
      return `<li class="${index === 0 ? 'active' : ''}">${city.label}</li>`
    });
    $('.navigation').append(listItems)
  }

  handleGetPosition(el) {
    const $line = $('.line');
    const left = el.offset().left;
    const width = el.width();
    $line.css({
      left,
      width
    });
  }

  handleItemSelect() {
    const $navigation = $('.navigation');
    const $listItem = $navigation.find('li');
    const _this = this;

    $listItem.click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      _this.handleGetPosition($(this));
    });
  }
};
