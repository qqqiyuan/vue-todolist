<template>
	<div class="detail-page" v-bind:class="{'show-detail': detailPage.isShow}">
		<p class="title">
			<span class="icon-back" v-on:click="goBack"></span>
			<span class="save" v-bind:class="{'able': able}" v-on:click="saveList">保存</span>
		</p>
		<div class="text-container">
			<textarea class="textarea" v-model="text" v-on:input="changeText"></textarea>
		</div>
	</div>
</template>

<script type="text/javascript">
	import session from './../assets/util/session.js';

	export default {
		props: ['detailPage', 'text'],
		data() {
			return {
				able: false
			}
		},
		methods: {
			goBack: function() {
				this.text = this.detailPage.detail.param;
				this.detailPage.isShow = false;
			},
			changeText: function() {
				this.able = true;
			},
			saveList: function() {
				if(!this.able) {
					return;
				}
				this.detailPage.detail.status = 0;
				let sessionList = session.fecth().sessionList;
				this.detailPage.detail.param = this.text;
				sessionList.splice(this.detailPage.index, 1);
				sessionList.unshift(this.detailPage.detail);
				session.store({sessionList: sessionList});
				this.detailPage.isShow = false;
				this.able = false;
			}
		},
		ready() {
			
		}
	}
</script>

<style lang="less" scope>
  @import "./../assets/mixins/color.less";
	.detail-page {
		display: none;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: @grey-light;
		-webkit-animation: fadeIn 0.4s 0s 1 both;
		&.show-detail {
			display: block;
		}
		.icon-back,
		.save {
			display: block;
			width: 1.333333rem;
			text-align: left;
			height: 1.333333rem;
			line-height: 1.333333rem;
			font-size: 0.60rem;
			padding: 0 0.133333rem;
		}
		.icon-back {
			float: left;
		}
		.save {
			float: right;
			margin: 0.133333rem 0.266667rem;
			height: 1.066667rem;
			line-height: 1.066667rem;
			text-align: center;
			font-size: 0.373333rem;
			background-color: @grey-mid;
			color: @white;
			border-radius: 3px;
			&.able {
				background-color: @green;
			}
		}
		.text-container {
			margin-top: 0.266667rem;
			height: 20.0rem;
			.textarea {
				display: block;
				width: 9.733333rem;
				height: 20.0rem;
				padding: 0.133333rem;
				border: none;
				font-size: 0.373333rem;
				line-height: 0.533333rem;
				color: @grey-dark;
				resize: none;
				outline: none;
			}
		}
	}	
</style>