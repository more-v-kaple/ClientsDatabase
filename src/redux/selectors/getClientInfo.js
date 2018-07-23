const getClientInfo = (clients, id) => {

    const info = clients.find(client => client.id === id);

    return info ?
        {
            avatar: info.general.avatar,
            name: `${info.general.firstName} ${info.general.lastName}`,
            job: `${info.job.title} - ${info.job.company}`,
            email: info.contact.email,
            phone: info.contact.phone,
            street: info.address.street,
            city: info.address.city,
            zipCode: info.address.zipCode,
            country: info.address.country
        }
        : {}
};

export default getClientInfo;
