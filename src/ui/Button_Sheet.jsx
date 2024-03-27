import React from 'react'

function Button_Sheet() {
  return (
    <div className="bottom-sheet ">
    <div className="bottom-sheet__header">
        <button className="bottom-sheet__close-btn">
            {/* <svg class="h-6 w-6 ">
                <use xlink:href="#close"></use>
            </svg> */}
        </button>
        <span className="bottom-sheet__name">مرتب سازی بر اساس</span>
    </div>
    <div className="sort-list bottom-sheet__body">
        {/* <a href="#" data-id="default"  aria-label = "normal" class="sort-select-btn bottom-sheet__item bottom-sheet__item--selected">
            <span>همه دوره ها</span>
            <svg class="w-5 h-5 "><use xlink:href="#check"></use></svg>
        </a>
        <a href="#" data-id="cheapest"  aria-label = "cheap"class="sort-select-btn bottom-sheet__item">
            <span>ارزان ترین</span>
            <svg class="w-5 h-5 hidden"><use xlink:href="#check"></use></svg>
        </a>
        <a href="#" data-id="expensive" aria-label = "expense" class="sort-select-btn bottom-sheet__item">
            <span>گرانترین</span>
            <svg class="w-5 h-5 hidden"><use xlink:href="#check"></use></svg>
        </a>
        <a href="#" data-id="popular" aria-label = "pop" class="sort-select-btn bottom-sheet__item">
            <span>پرمخاطب ها</span>
            <svg class="w-5 h-5 hidden"><use xlink:href="#check"></use></svg>
        </a> */}
    </div>
</div>
  )
}

export default Button_Sheet