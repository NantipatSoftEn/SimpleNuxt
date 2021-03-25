<template>
  <div>
    <b-card
      title="ประกายแสงสีทอง"
      :img-src="require('~/assets/img/mock1.jpg')" 
      img-alt="Image"
      img-top
    >
      <b-card-text>
        นินจาต้องอ่านเบื้องหลังของเบื้องหลังให้ออก
      </b-card-text>
      <b-button variant="outline-primary">Button</b-button>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </div>
</template>


