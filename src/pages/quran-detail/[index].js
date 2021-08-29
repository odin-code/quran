// Vendors
import React, {
	Component
} from "react";
import {
	Button,
	notification
} from "antd";

// Next
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router'


//component
import HeaderBack from '../../components/headerback';

class quran extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const {
			quranData
		} = this.props;
		return(
			<>
				<Head>
					<title>
						Muslim Life Indonesia - Quran
					</title>
					<meta
					name="title"
					content="Muslim Life"
					/>
					<meta
					name="description"
					content="Muslim Life"
					/>

					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://muslimlifeindonesia.com/" />
					<meta
					property="og:title"
					content="Muslim Life Indonesia - Quran "
					/>
					<meta
					property="og:description"
					content="Muslim Life Indonesia - Quran"
					/>
					<meta
					property="og:image"
					content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
					/>
					<link rel="canonical" href="https://muslimlifeindonesia.com/" />

					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://muslimlifeindonesia.com/" />
					<meta
					property="twitter:title"
					content="Muslim Life Indonesia - Quran "
					/>
					<meta
					property="twitter:description"
					content="Muslim Life Indonesia - Quran"
					/>
					<meta
					property="twitter:image"
					content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
					/>
				</Head>
				<div class="body">
					<HeaderBack
						actionBackLink="/quran"
						titlePage={`${quranData.data.englishName} [ ${quranData.data.name} ] `}
					/>
					<div className="pt-20 pl-5 pr-5 mb-4">
						{
							quranData && 
							quranData.data.ayahs.map((item, index) => {
								return(
									<Link href="javascript:void(0)" key={index}>
										<a className={`w-full bg-white block h-full shadow text-xl p-4 flex ${item.number == 1 ? 'mt-0' : 'mt-4'}`}>
											<span className="block mr-10 text-base font-medium	">
												{item.numberInSurah}
											</span>
											<div className="block w-full text-right">
												<span className="text-3xl font-medium font-arabic">
												{item.text}
												</span>
											</div>
										</a>
									</Link>
								)
							})
							
						}
						
					</div>
				</div>
			</>
		)
	}
}

export async function getServerSideProps(context) {

	const res = await fetch(`http://api.alquran.cloud/v1/surah/${context.query.index}`)
	const quranData = await res.json()
 
	return {
		props: {
			quranData,
		},
	}
 }

export default quran;