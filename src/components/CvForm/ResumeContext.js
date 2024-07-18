import React ,{useRef}from 'react'
import {useReactToPrint} from 'react-to-print';
import { createContext, useState, useEffect } from 'react';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import { v4 as uuid } from "uuid";
import { deepCopy } from "../../utils/utils"
import { useMemo } from 'react';
const ResumeDataContext = createContext();



export const ResumeProvider = ({ children }) => {

  const [rendertemp, setRenderTemp] = useState(false);
  const showRenderTemp = () => { setRenderTemp(true); console.log("show") };
  const hideRenderTemp = () => { setRenderTemp(false); console.log("hide") };
  const [selectedTemplates,setSelectedTemplates] = useState("Amsterdam"); 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Personal Details");
  const [capturedSkills, setCapturedSkills] = useState([
    {
      id: "def_0",
      name: "",
      expertLevel: "Beginner",
      type:"preDef",
    }
  ]);
  const [selectedImageURL,setSelectedImageURL]= useState(null);

  // This is PRE-DEFINED Skills DO NOT DELETE
  const preDefSkills =useMemo(()=>{
    return([
      {
        id: "preDef_0",
        name: "Effective Team Leader",
        expertLevel: "Beginner",

        type:"preDef"
      },
      {
        id: "preDef_1",
        name: "Highly Organized and Efficient ",
        expertLevel: "Beginner",

        type:"preDef"
      },
      {
        id: "preDef_2",
        name: "Critical Thinking ",
        expertLevel: "Beginner",

        type:"preDef"
      },
      {
        id: "preDef_3",
        name: "Microsoft Office  ",
        expertLevel: "Beginner",

        type:"preDef"
      },
      {
        id: "preDef_4",
        name: "Strong Communication Skills ",
        expertLevel: "Beginner",

        type:"preDef"
      },
      {
        id: "preDef_5",
        name: "Time Management Skills ",
        expertLevel: "Beginner",

        type:"preDef"
      },
      {
        id: "preDef_6",
        name: "Conflict Resolution ",
        expertLevel: "Beginner",

        type:"preDef"
      },
      {
        id: "preDef_7",
        name: "Public Speaking ",
        expertLevel: "Beginner",

        type:"preDef"
      },
      {
        id: "preDef_8",
        name: "Marketing ",
        expertLevel: "Beginner",

        type:"preDef"
      },
      {
        id: "preDef_9",
        name: "Initiatives and Problem-Solving Skills  ",
        expertLevel: "Beginner",

        type:"preDef"
      },

    ])
  },[])

  const [info, setInfo] = useState({
    jobTitle: "",
    photo: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    country: "",
    city: "",
  });

  const [summary, setSummary] = useState("");
  const [hobby, setHobby] = useState("");

  const [courses, setCourses] = useState([
    {
      id: uuid(),
      code: "",
      name: "",
      grades: "",
      duration: "",
    },
  ]);

  const [expertise, setExpertise] = useState([
    {
      id: uuid(),
      jobTitle: "",
      employer: "",
      role:"",
      city:"",
      desc:""
    },
  ]);
  const [languages, setLanguages] = useState([
    {
      id:uuid(),
      Language:"Language",
      expertLevel:"expertLevel"
    },
  ]);

  const [skill, setSkills] = useState([
    {
      id: uuid(),
      skill: "skill",
      expertLevel: "expertLevel",
      type:"newSkill"
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: uuid(),
      jobTitle:"",
      employer: "",
      role: "",
      city: "",
      desc: "",
      currentStatus: false,
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: uuid(),
      school: "",
      degree: "",
      major: "",
      city: "",
      time: "",
      desc: "",
      currentStatus: false,

    },
  ]);
  const [webLink, setWebLink] = useState([
    {
      id:uuid(),
      Label: "",
      Link: "",
    },
  ]);
  const [reference, setReference] = useState([
    {

      id:uuid(),
      Name:"",
      Company:"",
      Email:"",
      contact:""
    },
  ]);
  const [activity, setActivities] = useState([
    {
      id: uuid(),
      title: "",
      employer:"",
      role: "",
      city: "",
      timePeriod: "",
      desc:""
    },
  ]);

  const handleAddSkill = (skill) => {
    setSkills((prevState) => [...prevState, skill]);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <strong>New section Added</strong>,
      icon: "success",
    });
  };
  const handleDeleteSkill = (id) => {
    let filterSkills = capturedSkills.filter((sk) => id !== sk.id);
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#502acc",
      cancelButtonColor: "#d33",
      border:'none',
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCapturedSkills(filterSkills);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
   
  };

  const handleAddCourses = (courses) => {
    setCourses((prevState) => [...prevState, courses]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New section Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteCourses = (id) => {
    let filterCourse = courses.filter((sk) => id !== sk.id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#502acc",
      cancelButtonColor: "#d33",
      border:'none',
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCourses(filterCourse);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    
   
  };

  const handleAddEducation = (education) => {
    setEducation((prevState) => [...prevState, education]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New section Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteEducation = (id) => {
    let filterEducation = education.filter((edu) => id !== edu.id);
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#502acc",
      cancelButtonColor: "#d33",
      border:'none',
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setEducation(filterEducation);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleAddExperience = (singleExperience) => {
    setExperience((prevState) => [...prevState, singleExperience]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New section Added</strong>,

      icon: "success",
    });
  };
  const handleDeleteExperience = (id) => {
    let filterExperience = experience.filter((exp) => id !== exp.id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#502acc",
      cancelButtonColor: "#d33",
      border:'none',
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setExperience(filterExperience);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
 
  };
  const handleAddActivities = (singleActivity) => {
    setActivities((prevState) => [...prevState, singleActivity]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New section Added</strong>,

      icon: "success",
    });
  };
  const handleDeleteActivities = (id) => {
    let filterActivities = activity.filter((exp) => id !== exp.id);
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#502acc",
      cancelButtonColor: "#d33",
      border:'none',
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setActivities(filterActivities);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleAddLanguages = (languages) => {
    setLanguages((prevState) => [...prevState, languages]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New section Added</strong>,
      icon: "success",
    });
  };
  const handleDeleteLanguages = (id) => {
    let filterLanguages = languages.filter((lang) => id !== lang.id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#502acc",
      cancelButtonColor: "#d33",
      border:'none',
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLanguages(filterLanguages);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });

  };
  const handleAddWebLink = (webLink) => {
    setWebLink((prevState) => [...prevState, webLink]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New section Added</strong>,
      icon: "success",
    });
  };
  const handleDeleteWebLink = (id) => {
    let filterWebLink = webLink.filter((e) => id !== e.id);

    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#502acc",
      cancelButtonColor: "#d33",
      border:'none',
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setWebLink(filterWebLink);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleAddReferences = (reference) => {
    setReference((prevState) => [...prevState, reference]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New section Added</strong>,
      icon: "success",
    });
  };
  const handleDeleteReference = (id) => {
    let filterReference = reference.filter((e) => id !== e.id);
    setReference(filterReference);
        
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#502acc",
      cancelButtonColor: "#d33",
      border:'none',
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setReference(filterReference);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleAddExpertise = (expertise) => {
    setExpertise((prevState) => [...prevState, expertise]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <strong>New { } Added</strong>,
      // html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const handleDeleteExpertise = (id) => {
    let filterExpertise = expertise.filter((exp) => id !== exp.id);
 
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#502acc",
      cancelButtonColor: "#d33",
      border:'none',
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setExpertise(filterExpertise);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  // DATA CHANGE SECTIONS

  const handleChangeHobby = (e) => {
    const { value } = e.target;
    setHobby(value);
  };
  const handleChangeInfo = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeSummary = (e) => {
    const { value } = e.target;
    setSummary(value);
  };

  function handleChangeEducation(e, id) {
    // console.log("handleEditDescription>>e.target>>", e.target, id)
    setEducation((prevState) => {
      let newState = deepCopy(prevState);
      let oldDesc = newState.find((desc) => desc.id === id);

      if (oldDesc) {
        // console.log("afawf>>>", e.target.value,e.target.checked)
        if (e.target.name === 'currentStatus') {
          oldDesc[e.target.name] = e.target.checked;
        }else{
          oldDesc[e.target.name] = e.target.value;
        }
      }
      return newState;
    });
  }
  function handleChangeExperience(e, id) {
    // console.log("handleEditDescription>>e.target>>", e.target, id)
    setExperience((prevState) => {
      let newState = deepCopy(prevState);
      let oldDesc = newState.find((desc) => desc.id === id);

      if (oldDesc) {
        // console.log("afawf>>>", e.target.value,e.target.checked)
        if (e.target.name === 'currentStatus') {
          oldDesc[e.target.name] = e.target.checked;
        }else{
          oldDesc[e.target.name] = e.target.value;
        }
      }
      return newState;
    });
  }
  function handleChangeWebLinks(e, id) {
    // console.log("handleEditDescription>>e.target>>", e.target, id)
    setWebLink((prevState) => {
      let newState = deepCopy(prevState);
      let oldDesc = newState.find((desc) => desc.id === id);

      if (oldDesc) {
        // console.log("afawf>>>", e.target.value,e.target.checked)
        if (e.target.name === 'currentStatus') {
          oldDesc[e.target.name] = e.target.checked;
        }else{
          oldDesc[e.target.name] = e.target.value;
        }
      }
      return newState;
    });
  }
  function handleChangeReference(e, id) {
    // console.log("handleEditDescription>>e.target>>", e.target, id)
    setReference((prevState) => {
      let newState = deepCopy(prevState);
      let oldDesc = newState.find((desc) => desc.id === id);

      if (oldDesc) {
        // console.log("afawf>>>", e.target.value,e.target.checked)
        if (e.target.name === 'currentStatus') {
          oldDesc[e.target.name] = e.target.checked;
        }else{
          oldDesc[e.target.name] = e.target.value;
        }
      }
      return newState;
    });
  }
  function handleChangeActivities(e, id) {
    // console.log("handleEditDescription>>e.target>>", e.target, id)
    setActivities((prevState) => {
      let newState = deepCopy(prevState);
      let oldDesc = newState.find((desc) => desc.id === id);

      if (oldDesc) {
        // console.log("afawf>>>", e.target.value,e.target.checked)
        if (e.target.name === 'currentStatus') {
          oldDesc[e.target.name] = e.target.checked;
        }else{
          oldDesc[e.target.name] = e.target.value;
        }
      }
      return newState;
    });
  }
  function handleChangeLanguages(e, id) {
    console.log("handleEditDescription>>e.target>>", e.target, id)
    setLanguages((prevState) => {
      let newState = deepCopy(prevState);
      let oldDesc = newState.find((desc) => desc.id === id);

      if (oldDesc) {
        // console.log("afawf>>>", e.target.value,e.target.checked)
        if (e.target.name === 'currentStatus') {
          oldDesc[e.target.name] = e.target.checked;
        }else{
          oldDesc[e.target.name] = e.target.value;
        }
      }
      return newState;
    });
  }
  function handleChangeExpertise(e, id) {
    // console.log("handleEditDescription>>e.target>>", e.target, id)
    setExpertise((prevState) => {
      let newState = deepCopy(prevState);
      let oldDesc = newState.find((desc) => desc.id === id);

      if (oldDesc) {
        // console.log("afawf>>>", e.target.value,e.target.checked)
        if (e.target.name === 'currentStatus') {
          oldDesc[e.target.name] = e.target.checked;
        }else{
          oldDesc[e.target.name] = e.target.value;
        }
      }
      return newState;
    });
  }
  function handleChangeCourse(e, id) {
    // console.log("handleEditDescription>>e.target>>", e.target, id)
    setCourses((prevState) => {
      let newState = deepCopy(prevState);
      let oldDesc = newState.find((desc) => desc.id === id);

      if (oldDesc) {
        // console.log("afawf>>>", e.target.value,e.target.checked)
        if (e.target.name === 'currentStatus') {
          oldDesc[e.target.name] = e.target.checked;
        }else{
          oldDesc[e.target.name] = e.target.value;
        }
      }
      return newState;
    });
  }
  function handleChangeActivities(e, id) {
    // console.log("handleEditDescription>>e.target>>", e.target, id)
    setActivities((prevState) => {
      let newState = deepCopy(prevState);
      let oldDesc = newState.find((desc) => desc.id === id);

      if (oldDesc) {
        // console.log("afawf>>>", e.target.value,e.target.checked)
        if (e.target.name === 'currentStatus') {
          oldDesc[e.target.name] = e.target.checked;
        }else{
          oldDesc[e.target.name] = e.target.value;
        }
      }
      return newState;
    });
  }
  function handleChangeSkills(e, id) {
    console.log("handleEditDescription>>e.target>>", e.target, id)
    console.log(e.target.value)
    setCapturedSkills((prevState) => {
      let newState = deepCopy(prevState);
      let oldDesc = newState.find((desc) => desc.id === id);

      if (oldDesc) {
        // console.log("afawf>>>", e.target.value,e.target.checked)
        if (e.target.name === 'currentStatus') {
          oldDesc[e.target.name] = e.target.checked;
        }else{
          oldDesc[e.target.name] = e.target.value;
        }
      }
      return newState;
    });
  }
  const addSkills = (skill) => {
    console.log(skill)
    if (skill?.type === "preDef") {
      // Check if the skill already exists in the capturedSkills array
      if (!capturedSkills.find((s) => s.id === skill.id)) {
        // Add the skill to the capturedSkills array
        setCapturedSkills([...capturedSkills, skill]);
      }else{
        let newSkills = capturedSkills.filter(skillFilter=> skillFilter?.id!==skill?.id)
        setCapturedSkills(newSkills)
      }
    }
  };
  const fileInputRef = useRef();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImageURL(imageURL);
    }
  };
  const handleTemplateChange = (templateName)=>{
    setSelectedTemplates(templateName);
   }
   const componentRef = useRef(null);
   const handlePrint = useReactToPrint ({
     content: () => componentRef.current,
   });
 
  
  return (
    <ResumeDataContext.Provider value={{ handlePrint,componentRef, handleTemplateChange,selectedTemplates,handleImageChange, fileInputRef,
      info, handleChangeInfo, handleChangeSummary, summary, setSummary, handleAddExpertise, handleDeleteExpertise, expertise,handleChangeExpertise,
      handleAddActivities, handleDeleteActivities, handleChangeActivities,activity,handleChangeActivities, handleAddReferences, handleDeleteReference,handleChangeReference, reference,handleChangeReference, handleAddWebLink, handleDeleteWebLink, webLink,handleChangeWebLinks, handleAddLanguages,
      handleDeleteLanguages, languages,handleChangeLanguages, handleAddExperience, handleDeleteExperience, experience,handleChangeExperience, handleAddEducation, handleDeleteEducation, education, handleChangeEducation, 
      handleAddCourses, handleChangeCourse,handleDeleteCourses,handleAddActivities, courses, handleAddSkill, handleDeleteSkill,handleChangeSkills,preDefSkills ,skill,addSkills,capturedSkills,selectedImageURL,setSelectedImageURL,hobby,handleChangeHobby
    }}>
      {children}
    </ResumeDataContext.Provider>
  );

}

export default ResumeDataContext;
