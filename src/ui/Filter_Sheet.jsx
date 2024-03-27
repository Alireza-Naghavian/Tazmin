import React from 'react'

function Filter_Sheet() {
  return (
    <div class="filter-sec">
    <div class="filter__header">
        <div class="filter__head-title">
            <button class="filter__close-btn flex items-center justify-center text-gray-500">
                <svg class="h-6 w-6">
                    <use xlink:href="#close"></use>
                </svg>
            </button>
            <span class="font-DanaBold text-lg text-zinc-700 dark:text-white">فیلتر</span>
        </div>
    </div>
    <form class="filter__body" id="filter_mobile">
        <label class="toggle w-full flex items-center justify-between py-5">
            <span class="text-sm text-zinc-700 dark:text-white select-none">فقط دوره های رایگان</span>
            <input data-id="free"  type="checkbox" name="only_free" value="yes" class="toggle_input check-sort-input freeInp"/>
            <span class="toggle_marker bg-gray-400 dark:bg-grayTheme"></span>
        </label>
        <label class="toggle w-full flex items-center justify-between py-5">
            <span class="text-sm text-zinc-700 dark:text-white select-none">در حال پیش فروش</span>
            <input data-id="presell"  type="checkbox" name="only_free" value="yes" class="toggle_input check-sort-input"/>
            <span class="toggle_marker bg-gray-400 dark:bg-grayTheme"></span>
        </label>
    </form>
</div>
  )
}

export default Filter_Sheet