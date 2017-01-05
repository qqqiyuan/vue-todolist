<template>
	<div class="list-container">
		<ul>
			<li class="list" v-for="item in sessionList" v-bind:class="{'done': item.status}">
				<span class="icon icon-circle choosed" v-on:click.stop="doneItem($index)"></span>
				<!-- <a class="param" v-link="{path: '/detail?id='+item.id}">{{item.param}}</a> -->
				<a class="param" v-on:click="goDetail($index)">{{item.param}}</a>
				<span class="icon icon-delete-press" v-on:click.stop="deleteItem($index)"></span>
				<p class="time">创建时间：{{item.createTime}}</p>
			</li>
		</ul>
		<!-- <router-view></router-view> -->
		<detail v-bind:detail-page="detailPage" v-bind:text="text"></detail>
	</div>
</template>

<script type="text/javascript">
	import detail from './detail.vue';
	import session from './../assets/util/session.js';

	export default {
		props: ['sessionList', 'dialogInfo'],
		data() {
			return {
				deleteIndex: null,
				text: '',
				detailPage: {
					isShow: false,
					detail: {
						index: ''
					}
				}
			}
		},
		methods: {
			doneItem: function(index) {
				let temp = this.sessionList[index];
				if(temp.status === 1) {
					temp.status = 0;
					this.sessionList.splice(index, 1);
					this.sessionList.unshift(temp);	
				} else {
					temp.status = 1;
					this.sessionList.splice(index, 1);
					this.sessionList.push(temp);
				}
				session.store({sessionList: this.sessionList});
			},
			deleteItem: function(index) {
				let tempSession = this.sessionList;
				this.dialogInfo.show = true;
				this.dialogInfo.title = '确定删除此项任务吗？';
				this.dialogInfo.btns = [
					{
						text: '取消',
						confirm: false,
						callback: function() {
							// console.log(1);
						}
					},
					{
						text: '确定',
						confirm: true,
						callback: function() {
							tempSession.splice(index, 1);
							session.store({sessionList:tempSession});
						}
					}
				];
			},
			goDetail: function(index) {
				this.detailPage.isShow = true;
				this.text = this.sessionList[index].param;
				this.detailPage.index = index;
				this.detailPage.detail = this.sessionList[index];
			}
		},
		ready() {
			// console.log(this.sessionList);
		},
		components: {
			detail
		}
	}
</script>

<style lang="less" scope>
	@import "./../assets/mixins/mixin.less";
	@import "./../assets/mixins/color.less";
	.list-container {
		background-color: @white;
		padding: 0 0.266667rem;
		.list {
			position: relative;
			padding: 0.266667rem 0;
			font-size: 0.373333rem;
			border-bottom: 1px solid @grey-light;
			-webkit-animation: fadeIn 0.4s 0s 1 both; 
			&:last-child {
				border-bottom: none;
			}
			&.done {
				text-decoration: line-through;
				color: @grey-mid;
				.icon-circle {
					left: 0;
					&.choosed:before {
						content: '\e60c';
					}
				}
				.param {
					color: @grey-mid;
				}
				.icon-delete-press {
					color: @black;
				}
			}
			.icon {
				position: absolute;
				top: 0.4rem;
				display: inline-block;
				width: 0.8rem;
				height: 0.8rem;
				font-size: 0.64rem;
				line-height: 0.8rem;
				&.icon-circle {
					left: 0;
				}
				&.icon-delete-press {
					right: 0;
					text-align: center;
				}
			}
			.param,
			.time {
				display: block;
				padding: 0 0.8rem;
				height: 0.533333rem;
				font-size: 0.426667rem;
				color: @grey-dark;
				line-height: 0.533333rem;
				.text-overflow();
				text-decoration: none;
			}
			.time {
				margin-top: 0.106667rem;
				font-size: 0.266667rem;
				color: @grey-mid;
				height: 0.32rem;
				line-height: 0.32rem;
			}
		}
	}
</style>