<template>
	<div  v-if="dialogInfo.show"  class="dialog-container">
		<div class="dialog">
			<p class="dialog-title">{{dialogInfo.title}}</p>
			<div class="dialog-btn" v-for="item in dialogInfo.btns" v-bind:class="{'confirm': item.confirm}" 
				v-on:click="dialogConfirm($index)">{{item.text}}</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['dialogInfo'],
		methods: {
			dialogConfirm: function(index) {
				this.dialogInfo.show = false;
				this.dialogInfo.btns[index].callback();
			}
		}
	}
</script>

<style lang="less" scope>
  @import "./../assets/mixins/color.less";
	.dialog-container {
		position: fixed;
		z-index: 11;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		overflow: hidden;
		-webkit-animation: fadeIn 0.4s 0s 1 both;
		.dialog {
			position: absolute;
			width: 8.0rem;
			height: 4.266667rem;
			left: 50%;
			top: 50%;
			margin-top: -2.133333rem;
			margin-left: -4.0rem;
			border-radius: 5px;
			background-color: @white;
			overflow: hidden;
			.dialog-title {
				padding: 0.8rem 0.533333rem;
				color: @grey-dark;
				font-size: 0.48rem;
				line-height: 0.533333rem;
				text-align: center;
			}
			.dialog-btn {
				position: absolute;
				bottom: 0;
				width: 4.0rem;
				height: 1.333333rem;
				text-align: center;
				line-height: 1.333333rem;
				font-size: 0.426667rem;
				color: @white;
				background-color: @grey-mid;
				&.confirm {
					right: 0;
					background-color: @green;
				}
			}
		}
	}
</style>