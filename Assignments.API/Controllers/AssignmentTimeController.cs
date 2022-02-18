
using BLL.Interfaces;
using DAL.Models;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AssignmentTimes.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentTimeController : ControllerBase
    {
        IAssignmentTimeBL AssignmentTimeBL;
        public AssignmentTimeController(IAssignmentTimeBL _AssignmentTimeB)
        {
            AssignmentTimeBL = _AssignmentTimeB;
        }
        // GET: api/<AssignmentTimeController>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(AssignmentTimeBL.GetAllAssignmentTime());
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // GET api/<AssignmentTimeController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(AssignmentTimeBL.findById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // POST api/<AssignmentTimeController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] AssignmentTime item)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                return Ok(await AssignmentTimeBL.addAssignmentTime(item));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // PUT api/<AssignmentTimeController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] AssignmentTime item)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                return Ok(await AssignmentTimeBL.UpdateAssignmentTime(item));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // DELETE api/<AssignmentTimeController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await AssignmentTimeBL.DeleteAssignmentTime(id);

                return StatusCode(Convert.ToInt32(HttpStatusCode.NoContent));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}


