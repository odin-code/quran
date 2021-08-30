// Vendors
import React, {
	Component
} from "react";
import {
	Button,
	notification
} from "antd";
import ReactAudioPlayer from 'react-audio-player';

// Next
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router'

//component
import HeaderBack from '../../components/headerback';

const { convert } = require('html-to-text');

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
						titlePage={`${quranData.nama_latin} [ ${quranData.nama} ] `}
					/>
					<div className="pt-20 pl-5 pr-5 mb-4">
						<div className={`w-full bg-white block h-full shadow text-xl p-4 mb-4`}>
							<span className="block mr-10 text-lg font-medium font-arabic">
								{quranData.nama_latin}{`(${quranData.nama}) - ${quranData.tempat_turun}`}
							</span>
							<div className="mt-3 z-0">
								<ReactAudioPlayer
									className="w-full"
									src={quranData.audio}
									autoPlay={false}
									controls
								/>
							</div>
							<div className="block w-full text-left mt-3">
								<span className="text-sm font-normal">
									{'Arti: ' + quranData.arti}
									<br/>
									{'Penjelesan: ' + convert(quranData.deskripsi)}
								</span>
							</div>
						</div>

						{
							quranData && 
							quranData.ayat.map((item, index) => {
								return(
									<div className={`w-full bg-white block h-full p-4 shadow ${item.id == 1 ? 'mt-0' : 'mt-4'}`}>
										<div key={index} className={`text-xl flex `}>
											<span className="block mr-10 text-base font-medium	">
												{item.surah}:{ item.nomor}
											</span>
											<div className="block w-full text-right">
												<span className="text-3xl font-medium font-arabic">
													{item.ar}
												</span>
											</div>
										</div>
										<div className="block w-full text-left mt-3">
											<p className="text-lg font-normal italic">
												{convert(item.tr)}
											</p>
										</div>

										<div className="block w-full text-left mt-3">
											<p className="text-sm font-light">
												{item.idn}
											</p>
										</div>
									</div>
									
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

	const res = await fetch(`https://equran.id/api/surat/${context.query.index}`)
	const quranData = await res.json()
 
	return {
		props: {
			quranData,
		},
	}
 }

export default quran;