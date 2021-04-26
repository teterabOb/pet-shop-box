pragma solidity >=0.4.21 <0.8.0;

contract Adopcion {
    address[16] public adopters;

    //Adoptando una mascota
    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15, "La mascota no tiene un identificador valido");

        adopters[petId] = msg.sender;

        return petId;
    }

    //Retrieving the adopters
    function getAdopters() public view returns (address[16] memory){
        return adopters;
    }
}