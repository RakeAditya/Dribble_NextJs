import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@/constants';
import Image from 'next/image';
// utility component
// columnType
type ColumnType = {
	title: string;
	links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnType) => (
	<div className=" footer_column">
		<h4 className="font-semibold">{title}</h4>

		<ul className=" font-normal flex flex-col gap-2">
			{links.map((itm) => (
				<Link href="/" key={itm}>
					{itm}
				</Link>
			))}
		</ul>
	</div>
);
const Footer = () => {
	return (
		<footer className=" flexStart footer">
			<div className="w-full flex flex-col gap-12">
				<div className="flex items-start flex-col">
					<Image src="/logo-purple.svg" width={115} height={30} alt="flexibble" />
					<p className="text-sm text-start font-normal mt-5 max-w-xs">Flexibble is the largest community to share ,create and grow together.</p>
				</div>
				<div className="flex flex-wrap gap-12">
					<FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
					<div className="flex flex-1 flex-col gap-4">
						<FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
						<FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
					</div>
					<FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
					<div className="flex flex-1 flex-col gap-4">
						<FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
						<FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
					</div>
					<FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
				</div>
			</div>
			<div className=" flexBetween footer_copyright">
				<p>@ 2023 Flexibble. all rights reserved</p>
				<p className="text-gray">
					<span className="text-black">5000 </span>
					projects Submitted
				</p>
			</div>
		</footer>
	);
};

export default Footer;
