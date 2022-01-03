<template>
    <section class="error-page-section-area text-center">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="notfound">
						<div class="notfound-404">
							<h1>4<span></span>4</h1>
						</div>
						<h2>Oops! Page Not Be Found</h2>
						<p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
						<router-link to="/">
							Back to Homepage
						</router-link>
					</div>           
				</div>
			</div>
		</div>
    </section>
</template>

<script>
  export default {
    name: 'NotFound404',
  }
</script>