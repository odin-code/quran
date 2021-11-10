import React, { Component } from 'react';
import { Skeleton, Input } from "antd";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

// Next
import Head from "next/head";
import Link from "next/link";
//config
import { baseUrlAPI } from "../../../config/constants";

import HeaderBack from "../../../components/headerback";

import { Wrapper } from "../../../styles/pages/doa/style";

const { Search } = Input;


class subCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loadingSubCategoryDoa: false,
			dataSubCategory: false
		}
	}

	componentDidMount = () => {
		this._handleCheckFromServer();
	}

	_handleCheckFromServer = () => {
		const {subCategory} = this.props;
		if(subCategory) {
			this.setState({
				loadingSubCategoryDoa: true,
				dataSubCategory: subCategory
			})
		}
	}

	_handleSearchCategoryPray = (q) => {
		const { slugID } = this.props;
		axios
			.get(`${baseUrlAPI}/prayers/categories/${slugID}?_q=${q}&_limit=10`)
			.then((response) =>
				this.setState({ dataSubCategory: response.data, loadingSubCategoryDoa: true })
			);
	};

	_handleGetNextCategoryPray = () => {
		const { dataSubCategory } = this.state;
		axios
			.get(`${baseUrlAPI}/prayers/categories/${slugID}?_start=${feed.length}&_limit=10`)
			.then((response) =>
				this.setState({ dataSubCategory: [...dataSubCategory, ...response.data] })
			);
	};
	render() {
		const {
			loadingSubCategoryDoa,
			dataSubCategory
		} = this.state;
		return (
			<>
				<Head>
					<title>Muslim Life Indonesia - {dataSubCategory.name}</title>
					<meta name="title" content={`Muslim Life Indonesia - ${dataSubCategory.name}`} />
					<meta name="description" content={`Muslim Life Indonesia - ${dataSubCategory.name}`} />

					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://muslimlifeindonesia.com/" />
					<meta property="og:title" content={`Muslim Life Indonesia - ${dataSubCategory.name}`} />
					<meta
						property="og:description"
						content={`Muslim Life Indonesia - ${dataSubCategory.name}`}
					/>
					<meta
						property="og:image"
						content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
					/>
					<link rel="canonical" href="https://muslimlifeindonesia.com/" />

					<meta property="twitter:card" content="summary_large_image" />
					<meta
						property="twitter:url"
						content="https://muslimlifeindonesia.com/"
					/>
					<meta
						property="twitter:title"
						content="Muslim Life Indonesia - Quran "
					/>
					<meta
						property="twitter:description"
						content={`Muslim Life Indonesia - ${dataSubCategory.name}`}
					/>
					<meta
						property="twitter:image"
						content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
					/>
				</Head>
				<Wrapper>
					<div className="body">
						<HeaderBack
							actionBackLink="/doa"
							titlePage={dataSubCategory.name}
							isArabic={false}
						/>
						<div className="pt-20 pl-4 pr-4 mb-4">
							<div className="w-full list_item_doa block h-full shadow text-lg flex mt-2 search-custom">
								<Search
									placeholder="Search"
									onSearch={(val) => this._handleSearchCategoryPray(val)}
									allowClear
									enterButton
								/>
							</div>
							{loadingSubCategoryDoa ? (
								<>
									{dataSubCategory && (
										<InfiniteScroll
											dataLength={dataSubCategory.prayer_subcategories.length} //This is important field to render the next data
											next={this._getMoreItemFeed}
											hasMore={true}
										>
											{dataSubCategory.prayer_subcategories.map((item) => {
												return (
													<Link href={item.slug}>
														<a
															className={`w-full list_item_doa bg-white block h-full shadow text-lg p-3 flex mt-4 content-custom`}
														>
															<div className="flex">
																<div className="bg-green-500 number-custom mr-6">
																	<span className="block text-sm font-medium">
																		{item.id}
																	</span>
																</div>
																<span className="block text-sm font-medium">
																	{item.name}
																</span>
															</div>
														</a>
													</Link>
												);
											})}
										</InfiniteScroll>
									)}
								</>
							) : (
								<>
									<div className="w-full list_item_doa bg-white block h-full shadow text-lg p-3 flex mt-4 loading-custom">
										<Skeleton active paragraph={{ rows: 1 }} />
									</div>
									<div className="w-full list_item_doa bg-white block h-full shadow text-lg p-3 flex mt-4 loading-custom">
										<Skeleton active paragraph={{ rows: 1 }} />
									</div>
									<div className="w-full list_item_doa bg-white block h-full shadow text-lg p-3 flex mt-4 loading-custom">
										<Skeleton active paragraph={{ rows: 1 }} />
									</div>
								</>
							)}
						</div>
					</div>
				</Wrapper>
			</>
		);
	}
}

export async function getServerSideProps(context) {
	const res = await fetch(`${baseUrlAPI}/prayers/categories/${context.query.slug}?&_limit=10`);
	const subCategory = await res.json();
	const slugID = context.query.slug;
	return {
		props: {
			subCategory,
			slugID,
		},
	};
}


export default subCategory;