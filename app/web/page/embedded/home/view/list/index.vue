<template>
  <div>
    <div
      class="recommend-box"
      id="recommendBox"
    >
      <nav
        class="recommend-tab"
        id="recommendNav"
      >
        <a
          class="nav-tab selected"
          href="javascript:void(0)"
        ><span>热门</span></a>
        <a
          v-for="(item,index) in tabObj"
          class="nav-tab nav-switch"
          href="javascript:void(0)"
        ><span>{{item.name}}</span></a>
        <a
          class="nav-tab add-tab"
          href="javascript:void(0)"
        ><span class="iconfont icontianjia add-font"></span></a>
      </nav>
      <div
        class="recommend-body"
        style="width:100%"
      >
        <ul id="courseList">
          <li
            v-for="(element,index) in courseList"
            :key="index"
            @click="testClick"
          ><a
              class="flex-box"
              href="javascript:void(0)"
            >
              <img
                class="course-pic"
                :src="element.photoUrl"
              />
              <div class="img-right">
                <p class="course-title">{{ element.title}}
                </p>
                <p><span class="iconfont iconjigou jigou-font"></span><span class="organization">
                    {{element.orgName}}
                  </span></p>
                <p class="course-foot"><span class="iconfont iconapp_goumailiang people-font"></span><span class="people-num">
                    {{element.salesVolume}}
                  </span><span class="price">
                    {{element.price}}
                  </span></p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script lang="ts" src="./index.ts"></script>