// Vendors
import React, { Component } from "react";
// Next
import Link from 'next/link'

class HeaderBack extends Component {
	render() {
		const {
			actionBackLink,
			titlePage,
			isArabic
		} = this.props;
		return (
			<>
				<div class="p-3 fixed top-0 header z-10">
					<Link href={actionBackLink}>
						<a className="w-full block h-full text-white text-xl header-back">
							<i className="fa fa-angle-left mr-4"></i>
							<span className="font-normal">{titlePage}</span>
						</a>
					</Link>
				</div>
			</>
		)
	}
}

export default HeaderBack;