import profileImage from '../../images/profile.png';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio, index) => (
					<span key={index}>
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"

						>
							{bio.title}
						</p>
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						>
							{bio.experience_summary}
						</p>
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						>
							{bio.services}
						</p>
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						>
							🔑 What I Bring to the Table: <br />
							✅ Frontend : {` ${bio.skills.frontend} `} <br />
							✅ Backend : {` ${bio.skills.backend} `} <br />
							✅ Database : {` ${bio.skills.database} `} <br />
							✅ Devops & Cloud : {` ${bio.skills.devops_and_cloud} `} <br />
							✅ Advanced Features : {` ${bio.skills.advanced_features} `} <br />
						</p>
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						>
							🎯 Why Work With Me: <br />
							✅ Efficient Communication : {` ${bio.why_work_with_me.efficient_communication} `} <br />
							✅ On Time Delivery : {` ${bio.why_work_with_me.on_time_delivery} `} <br />
							✅ Client Centric Approach : {` ${bio.why_work_with_me.client_centric_approach} `} <br />
							✅ Post Launch Support : {` ${bio.why_work_with_me.post_launch_support} `} <br />
						</p>

						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						>
							😎 {` ${bio.additional_information.testing} `} <br />
							💪 {` ${bio.additional_information.goal} `} <br />
							😇 {` ${bio.additional_information.relationship} `} <br />
						</p>

						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						>
							{` ${bio.closing.message} `} <br />
							{` ${bio.closing.signature} `} <br />
						</p>
					</span>

				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
