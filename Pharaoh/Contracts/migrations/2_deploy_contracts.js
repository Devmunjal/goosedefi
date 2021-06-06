



    const RAToken = artifacts.require("RAToken");
    const MasterChef = artifacts.require("MasterChef");
    
    let devAddress = "0x007a154f935b4e8224ac9dD0314F5a3A28d53e43"
    let divFeeAddress = devAddress;
    let rewardPerBlock = web3.utils.toWei('10');
    let startBlockTime = 6658440;



    module.exports = async function(deployer) {
  

        //DEV1 
      await deployer.deploy(RAToken);
      const prvInstance = await RAToken.deployed();
      await prvInstance.mint(devAddress, web3.utils.toWei('10'));

      
      await deployer.deploy(MasterChef,prvInstance.address,
        devAddress,
        divFeeAddress,
        rewardPerBlock,
        startBlockTime);
    

      // const MasterChefInstance = await MasterChef.deployed()    
      // await deployer.deploy(LotteryNFT);
      // const LotteryNFTInstance = await LotteryNFT.deployed()    


      // await deployer.deploy(Lottery,
      //   prvInstance.address,
      //   LotteryNFTInstance.address,
      //   lotteryPrice,
      //   maxNumber,
      //   devAddress

      //   );


        // await LotteryNFTInstance.transferOwnership(Lottery.address)



      

      await prvInstance.transferOwnership(MasterChef.address);



    
    
    
    
    
    };
