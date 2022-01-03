<template>
  <!-- Responsive navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">Start Bootstrap</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="(menu, i) in headerMenus" v-bind:key="i" class="nav-item">
						<router-link :to="menu.link" exact class="nav-link">
							{{ menu.name }}
						</router-link>
					</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { headerMenus } from '../constant/menus';
  export default {
    name: 'Header',
    data() {
			return {
				headerMenus
			};
		},
  }
</script>