<?php
session_start();

    include("connection.php");
    include("functions.php");

?>

<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Komyut Subscription</title>
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="preloader">
	<div class="spinner">
		<p><div class="double-bounce1"></div></p>
		<p><div class="double-bounce2"></div></p>
	</div>
		<p>Redirecting...</p>
</div>


<div class="container-body">

	
	<div class="container form-container">
	<div class="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-7 col-xlg-12">
		<div class="col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xlg-4 payment-overview">
			<p class="price-payment">₱49</p>
			<p class="product-payment">Komyut</p>
			<p>Can view better directions</p>
			<p>No Ads</p>
			<p>Can vote and earn points</p>
			<p>Can put directions</p>
		</div>
		<div class="col-xs-12 col-sm-7 col-md-8 col-lg-8 col-lg-8 col-xlg-8 payment-details">
		<p class="credit-card-title">Credit Card Details</p>
		<p><input type="number" class="long-number" required placeholder="Account Number"></p>
			<select class="month-select minimal">
				<option>Expiry Month</option>
				<option>01</option>
				<option>02</option>
				<option>03</option>
				<option>04</option>
				<option>05</option>
				<option>06</option>
				<option>07</option>
				<option>08</option>
				<option>09</option>
				<option>10</option>
				<option>11</option>
				<option>12</option>
			</select>
			<select class="year-select minimal">
				<option>Expiry Year</option>
				<option>18</option>
				<option>19</option>
				<option>20</option>
				<option>21</option>
				<option>22</option>
				<option>23</option>
				<option>24</option>
				<option>25</option>
				<option>26</option>
				<option>27</option>
				<option>28</option>
				<option>29</option>
			</select>
			<input type="number" class="security-code" placeholder="eg. 123">
			<p class="security-code-p">3 or 4 digits found on the signature strip</p>
			
			<div class="bottom-buttons">

				<div class="proceed">
					<button class="proceed-button" href="\Nuxt App with Login and Redirect\Dashboard\google-maps-directions-sidebar\dist\index.html" title="proceed">Proceed</button>
				</div>

				<div class="or">Or</div>

				<div class="paypal">
					<button class="paypal-button">Pay with GCASH</button>
				</div>
			
			</div>				
				
		</div>
		
		
		
	</div>
</div>
</div>
</div>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
<script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/jquery.waitforimages.min.js'></script><script  src="./script.js"></script>

</body>
</html>
