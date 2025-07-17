import React from 'react';
import './Contact.css';
import videoBg from '../assets/banner-video.mp4';
import {
    FaCheckCircle,
    FaTools,
    FaBuilding,
    FaHeadset,
    FaChartLine,
    FaClipboardList,
} from 'react-icons/fa';

const ManageProperties = () => {
    const services = [
        {
            icon: <FaBuilding size={40} className="text-warning mb-3" />,
            title: 'Tenant Management',
            desc: 'From screening to lease handling and support, we manage it all.',
        },
        {
            icon: <FaTools size={40} className="text-warning mb-3" />,
            title: 'Maintenance Services',
            desc: 'Reliable maintenance and repairs with quick response times.',
        },
        {
            icon: <FaChartLine size={40} className="text-warning mb-3" />,
            title: 'Financial Reporting',
            desc: 'Transparent monthly reports, rent collection, and expense tracking.',
        },
        {
            icon: <FaCheckCircle size={40} className="text-warning mb-3" />,
            title: 'Legal Compliance',
            desc: 'We ensure all regulations and legal documentation are handled professionally.',
        },
        {
            icon: <FaHeadset size={40} className="text-warning mb-3" />,
            title: '24/7 Support',
            desc: 'Round-the-clock assistance for tenants and property owners.',
        },
        {
            icon: <FaClipboardList size={40} className="text-warning mb-3" />,
            title: 'Detailed Inspections',
            desc: 'Routine inspections to maintain property condition and value.',
        },
    ];

    return (
        <>
            {/* Hero Section with Background Video */}
            <div className="position-relative" style={{backgroundColor: 'white'}}>
                <video
                
                    className="w-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ height: '400px', objectFit: 'cover'}}
                >
                    <source src={videoBg} type="video/mp4" />
                </video>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                >
                    <h1 className="text-white fw-bold display-4">Property Management</h1>
                </div>
            </div>

            {/* Description Section */}
            <section className="py-5 px-3 px-md-5 text-center">
                <h2 className="fw-bold mb-3">
                    Complete <span className="text-warning">Management</span> Solutions
                </h2>
                <p className="mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                    Letting a property to tenants can be rewarding, but also unpredictable and time-consuming. Whether it’s filling in forms, taking calls at midnight, chasing rent payments or carrying out an inspection, there is always something on the ‘to do’ list. ever season holiday homes offers a wide range of Property Management services in Dubai, providing a professional service and peace of mind at all times. We provide our clients with a made to measure property management package designed to cater to all your property needs.
                </p>
            </section>

            {/* Services Grid - 6 Balanced Points */}
            <section className="container pb-5">
                <div className="row text-center g-4">
                    {services.map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="border p-4 h-100 shadow-sm rounded bg-white">
                                {service.icon}
                                <h5 className="fw-bold">{service.title}</h5>
                                <p className="text-muted">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

          
        </>
    );
};

export default ManageProperties;
