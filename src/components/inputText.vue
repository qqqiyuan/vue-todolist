<template>
	<div class="input-container">
		<input class="input" type="text" placeholder="添加TODO" v-model="inputValue" v-on:input="inputing">
		<div class="add-btn" v-bind:class="{'active': isActive}" v-on:click="addItem">添加</div>
	</div>
</template>

<script type="text/javascript">
	import session from './../assets/util/session.js';

	function parseDate(time) {
	  return time.getFullYear() +'-'+ parseInt(time.getMonth() + 1) +'-'+ time.getDate() +' '
	    + time.getHours() +':'+ time.getMinutes() +':'+ time.getSeconds();
	}

	export default {
		props: ['sessionList'],
		data() {
			return {
				inputValue: '',
				isActive: false
			}
		},
		methods: {
			inputing: function() {
				if(this.inputValue) {
					this.isActive = true;
				} else {
					this.isActive = false;
				}
			},
			addItem: function() {
				if(this.inputValue) {
					let id = this.sessionList.length + 1;
					let list = {
						id: id,
						param: this.inputValue,
						createTime: parseDate(new Date()),
						status: 0
					};
					this.sessionList.unshift(list);
					session.store({sessionList:this.sessionList});
					this.inputValue = '';
					this.isActive = false;
				} else {
					return false;
				}
			}
		}
	}
</script>

<style lang="less" scope>
  @import "./../assets/mixins/mixin.less";
  @import "./../assets/mixins/color.less";

	.input-container {
		margin: 0.266667rem;
		height: 1.066667rem;
		line-height: 1.066667rem;
		font-size: 0.373333rem;
		overflow: hidden;
		.input {
			float: left;
			width: 7.466667rem;
			height: 0.8rem;
			padding: 0.133333rem 0;
			height: 0.8rem;
			.border-left-radius(3px);
			text-indent: 0.106666rem;
		}
		.add-btn {
			float: left;
			width: 2.0rem;
			text-align: center;
			color: @white;
			background-color: @grey-mid;
			.border-right-radius(3px);
			&.active {
				background-color: @green;
			}
		}
	}
</style>