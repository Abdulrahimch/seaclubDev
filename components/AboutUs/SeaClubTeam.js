import { useState } from "react";
import styles from "../../src/styles/AboutUs/SeaClubTeam.module.css";
import Image from "next/image";
import ArrowLeft from "../../public/assets/about-us/arrow-left.svg";
import ArrowRight from "../../public/assets/about-us/arrow-right.svg";
import Member from "./Member";
const SeaClubTeam = () => {
	const [teamMembers, setTeamMembers] = useState([
		// This is the Team members state that has been initialized with these objects
		{
			src: "/assets/about-us/gabriel.jpg",
			name: "Jean Gabriel Paquette",
			role: "CO-Founder & COO",
			linkedin_page: "",
			isCooFounder: true,
		},
		{
			src: "/assets/about-us/gaspard.jpg",
			name: "Gaspard Monot",
			role: "CO-Founder & CSO",
			linkedin_page: "",
			isCooFounder: true,
		},
		{
			src: "/assets/about-us/mohamed.jpg",
			name: "Mohamed Dhiaeddine",
			role: "CTO",
			linkedin_page: "",
			isCooFounder: false,
		},
		{
			src: "/assets/about-us/jessan.jpg",
			name: "Jessan Khan",
			role: "Project Owner",
			linkedin_page: "",
			isCooFounder: false,
		},
		{
			src: "/assets/about-us/shaun.jpg",
			name: "Shaun Wilson",
			role: "Lead Developer",
			linkedin_page: "",
			isCooFounder: false,
		},
		{
			src: "/assets/about-us/abul.jpg",
			name: "Abul Basar",
			role: "Frontend and Backend Developer",
			linkedin_page: "",
			isCooFounder: false,
		},
		{
			src: "/assets/about-us/alpha.jpg",
			name: "Alpha Kabinet Toure",
			role: "Frontend Developer",
			linkedin_page: "",
			isCooFounder: false,
		},
		{
			src: "/assets/about-us/daniel.jpg",
			name: "Daniel Jean Rodrigues",
			role: "Blockchain Developer",
			linkedin_page: "",
			isCooFounder: false,
		},
		{
			src: "/assets/about-us/shittu.jpg",
			name: "Shittu Odunayo Lekan",
			role: "Backend Developer",
			linkedin_page: "",
			isCooFounder: false,
		},
	]);
	const [activeCurrentSlide, setActiveCurrentSlide] = useState(true); // State used to track the current slide
	const delaySlides = (callback, timer) =>{
		setTimeout(callback, timer)
	}
	const slidePrev = () => {
		// function used to slide to the left
		delaySlides(() => setActiveCurrentSlide((active) => !active), 500)
	};
	const slideNext = () => {
		// function used to slide to the right
		delaySlides(() => setActiveCurrentSlide((active) => !active), 500)
	};
	return (
		<div className={styles.seaClub_team}>
			{activeCurrentSlide ? (
				<div className={styles.founders}>
					<div className={styles.title}>
						<h3 className={styles.team_title}>Founding Team </h3>

						<Image // This is the left Icon
							src={ArrowLeft}
							className={styles.icon_behavior}
							width={70}
							height={70}
							alt='Left Arrow Button'
							style={{opacity:'.5'}}
						/>
						<Image //This is the right Icon
							src={ArrowRight}
							width={70}
							height={70}
							className={styles.icon_behavior}
							onClick={slideNext}
							alt='Right Arrow Button'
						/>
					</div>

					<div className={styles.founders_team}>
						{teamMembers
							.filter((member) => member.isCooFounder)
							.map((member) => (
								<div
									key={member.name}
								>
									<Member {...member} />
								</div>
							))}
					</div>
				</div>
			) : (
				<div className={styles.teamMembers}>
					<div className={styles.title}>
						<h3 className={styles.team_title}>Tech Team</h3>
						<Image // This is the left Icon
							src={ArrowLeft}
							className={styles.icon_behavior}
							width={70}
							height={70}
							onClick={slidePrev}
							alt='Left Arrow Button'
						/>
						<Image //This is the right Icon
							src={ArrowRight}
							width={70}
							height={70}
							className={styles.icon_behavior}
							alt='Right Arrow Button'
							style={{opacity:'.5'}}
						/>
					</div>
					<div className={styles.team_members}>
						{teamMembers
							.filter((member) => !member.isCooFounder)
							.map((member) => (
								<div
									key={member.name}
									className={styles.eachMember}
								>
									<Member {...member} />
								</div>
							))}
					</div>
				</div>
			)}
		</div>
	);
};
export default SeaClubTeam;
